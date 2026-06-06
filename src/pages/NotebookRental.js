import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import Swal from 'sweetalert2'; 

function NotebookRental() {
  const [notebooks, setNotebooks] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyFilter, setHistoryFilter] = useState('All');
  const [searchName, setSearchName] = useState(''); 
  const [loading, setLoading] = useState(true);

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); 
  const [formData, setFormData] = useState({
    id: '01', team: '', name: '', rent_date: '', return_date: '', remark: ''
  });

  // 인라인 수정 상태 관리
  const [editingRowId, setEditingRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [editingNextRowId, setEditingNextRowId] = useState(null);
  const [editNextFormData, setEditNextFormData] = useState({});

  // DB 불러오기
  const fetchData = async () => {
    setLoading(true);
    const { data: nbData } = await supabase.from('notebooks').select('*').order('id', { ascending: true });
    if (nbData) setNotebooks(nbData);

    const { data: histData } = await supabase.from('rental_history').select('*').order('return_date', { ascending: false });
    if (histData) setHistory(histData);
    
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ============================
     💡 주말 제외 영업일 계산 로직
  ============================ */
  const calculateGapDays = (returnDate, nextRentDate) => {
    if (!returnDate || !nextRentDate) return null;
    
    const start = new Date(returnDate);
    const end = new Date(nextRentDate);
    
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    if (start > end) return -1; // 반납일보다 예약일이 빠른 경우 (오류)
    if (start.getTime() === end.getTime()) return 0; // 당일 반납/대여

    let count = 0;
    let cur = new Date(start);
    
    // 시작일 다음날부터 종료일까지 돌면서 주말(0:일, 6:토) 제외하고 카운트
    while (cur < end) {
      cur.setDate(cur.getDate() + 1);
      const day = cur.getDay();
      if (day !== 0 && day !== 6) {
        count++;
      }
    }
    return count;
  };

  // 뱃지 렌더링 함수
  const renderGapBadge = (currentReturn, nextRent) => {
    const gap = calculateGapDays(currentReturn, nextRent);
    if (gap === null) return null;

    if (gap < 0) {
      return <div style={{marginTop: '4px'}}><span style={{padding: '3px 6px', backgroundColor: '#ffe3e3', color: '#c92a2a', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold'}}>🚨 일정 꼬임 (확인)</span></div>;
    }
    if (gap === 0) {
      return <div style={{marginTop: '4px'}}><span style={{padding: '3px 6px', backgroundColor: '#ffe3e3', color: '#c92a2a', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold'}}>🚨 즉시 와이핑 (당일)</span></div>;
    }
    if (gap === 1) {
      return <div style={{marginTop: '4px'}}><span style={{padding: '3px 6px', backgroundColor: '#fff3cd', color: '#d97706', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold'}}>⚡ 빠른 와이핑 (1일)</span></div>;
    }
    return <div style={{marginTop: '4px'}}><span style={{padding: '3px 6px', backgroundColor: '#e6fcf5', color: '#0ca678', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold'}}>✅ 전환 대기 ({gap}일 여유)</span></div>;
  };

  /* ============================
     우측 상단 모달 등록 기능
  ============================ */
  const openModal = (type) => {
    setModalType(type);
    setFormData({ id: '01', team: '', name: '', rent_date: '', return_date: '', remark: '' });
    setIsModalOpen(true);
  };

  const handleModalChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleModalSubmit = async () => {
    if (!formData.team || !formData.name) {
      Swal.fire({ icon: 'warning', title: '입력 확인', text: '팀명과 성함은 필수 입력 항목입니다.', confirmButtonColor: '#2c3e50' });
      return;
    }

    const targetNotebook = notebooks.find(n => n.id === formData.id);
    
    if (modalType === 'current' && targetNotebook?.current_name) {
      Swal.fire({ icon: 'error', title: '등록 불가', text: `${formData.id}번 기기는 이미 대여 중입니다.`, confirmButtonColor: '#c92a2a' });
      return;
    }
    
    if (modalType === 'next' && targetNotebook?.next_name) {
      Swal.fire({ icon: 'error', title: '등록 불가', text: `${formData.id}번 기기는 이미 예약이 존재합니다.`, confirmButtonColor: '#c92a2a' });
      return;
    }

    const prefix = modalType === 'current' ? 'current_' : 'next_';
    const updateData = {
      [`${prefix}team`]: formData.team,
      [`${prefix}name`]: formData.name,
      [`${prefix}rent_date`]: formData.rent_date || null,
      [`${prefix}return_date`]: formData.return_date || null,
      [`${prefix}remark`]: formData.remark || null,
    };

    const { error } = await supabase.from('notebooks').update(updateData).eq('id', formData.id);
    
    if (error) {
      Swal.fire({ icon: 'error', title: '오류', text: '등록 중 오류가 발생했습니다.', confirmButtonColor: '#c92a2a' });
    } else {
      setIsModalOpen(false);
      Swal.fire({ icon: 'success', title: '완료', text: '성공적으로 등록되었습니다.', confirmButtonColor: '#2c3e50', timer: 1500 });
      fetchData();
    }
  };

  /* ============================
     인라인 수정/저장 기능 (현재)
  ============================ */
  const handleEditClick = (notebook) => {
    setEditingRowId(notebook.id);
    setEditFormData({
      current_team: notebook.current_team || '', current_name: notebook.current_name || '',
      current_rent_date: notebook.current_rent_date || '', current_return_date: notebook.current_return_date || '',
      current_remark: notebook.current_remark || ''
    });
  };
  const handleEditChange = (e) => setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  const handleEditSave = async (id) => {
    const payload = {
      current_team: editFormData.current_team || null, current_name: editFormData.current_name || null,
      current_rent_date: editFormData.current_rent_date || null, current_return_date: editFormData.current_return_date || null,
      current_remark: editFormData.current_remark || null,
    };
    const { error } = await supabase.from('notebooks').update(payload).eq('id', id);
    if (error) Swal.fire({ icon: 'error', title: '오류', text: '저장 중 오류가 발생했습니다.', confirmButtonColor: '#c92a2a' });
    else { setEditingRowId(null); fetchData(); }
  };

  /* ============================
     인라인 수정/저장 기능 (다음 예약)
  ============================ */
  const handleNextEditClick = (notebook) => {
    setEditingNextRowId(notebook.id);
    setEditNextFormData({
      next_team: notebook.next_team || '', next_name: notebook.next_name || '',
      next_rent_date: notebook.next_rent_date || '', next_return_date: notebook.next_return_date || '', next_remark: notebook.next_remark || ''
    });
  };
  const handleNextEditChange = (e) => setEditNextFormData({ ...editNextFormData, [e.target.name]: e.target.value });
  const handleNextEditSave = async (id) => {
    const payload = {
      next_team: editNextFormData.next_team || null, next_name: editNextFormData.next_name || null,
      next_rent_date: editNextFormData.next_rent_date || null, next_return_date: editNextFormData.next_return_date || null, next_remark: editNextFormData.next_remark || null,
    };
    const { error } = await supabase.from('notebooks').update(payload).eq('id', id);
    if (error) Swal.fire({ icon: 'error', title: '오류', text: '저장 중 오류가 발생했습니다.', confirmButtonColor: '#c92a2a' });
    else { setEditingNextRowId(null); fetchData(); }
  };

  /* ============================
     반납, 예약 전환 및 기록 삭제 
  ============================ */
  const handleReturnComplete = (notebook) => {
    Swal.fire({
      title: '반납 확인',
      text: `${notebook.id}번 기기 반납 처리를 완료하시겠습니까?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#2c3e50',
      cancelButtonColor: '#adb5bd',
      confirmButtonText: '완료하기',
      cancelButtonText: '취소'
    }).then(async (result) => {
      if (result.isConfirmed) {
        
        // KST 오늘 날짜 구하기
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const kst = new Date(utc + (9 * 60 * 60 * 1000));
        const todayKST = `${kst.getFullYear()}-${String(kst.getMonth() + 1).padStart(2, '0')}-${String(kst.getDate()).padStart(2, '0')}`;

        const finalReturnDate = notebook.current_return_date || todayKST;

        const { error: historyError } = await supabase.from('rental_history').insert([{
          notebook_id: notebook.id, 
          team: notebook.current_team, 
          name: notebook.current_name,
          rent_date: notebook.current_rent_date, 
          return_date: finalReturnDate, 
          remark: notebook.current_remark
        }]);
        
        if (historyError) {
          Swal.fire('오류', '기록 저장에 실패했습니다.', 'error');
          return;
        }

        await supabase.from('notebooks').update({
          current_team: null, current_name: null, current_rent_date: null, 
          current_return_date: null, current_remark: null
        }).eq('id', notebook.id);
        
        Swal.fire('반납 완료!', '', 'success');
        fetchData();
      }
    });
  };

  const handleMoveToCurrent = (notebook) => {
    if (notebook.current_name) {
      Swal.fire({ icon: 'warning', title: '전환 불가', text: '현재 대여자가 반납을 완료해야 대여로 전환 가능합니다.', confirmButtonColor: '#c92a2a' });
      return;
    }

    Swal.fire({
      title: '대여 전환',
      text: `[${notebook.next_name}]님을 현재 대여자로 변경하시겠습니까?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#0ca678',
      cancelButtonColor: '#adb5bd',
      confirmButtonText: '전환하기',
      cancelButtonText: '취소'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await supabase.from('notebooks').update({
          current_team: notebook.next_team, current_name: notebook.next_name,
          current_rent_date: notebook.next_rent_date, current_return_date: notebook.next_return_date,
          current_remark: notebook.next_remark,
          next_team: null, next_name: null, next_rent_date: null, next_return_date: null, next_remark: null
        }).eq('id', notebook.id);
        
        Swal.fire('전환 완료!', '', 'success');
        fetchData();
      }
    });
  };

  const handleDeleteHistory = (historyId) => {
    Swal.fire({
      title: '기록 삭제',
      text: '이 대여 기록을 영구적으로 삭제하시겠습니까? (복구 불가)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c92a2a',
      cancelButtonColor: '#adb5bd',
      confirmButtonText: '삭제하기',
      cancelButtonText: '취소'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabase.from('rental_history').delete().eq('id', historyId);
        
        if (error) {
          Swal.fire('오류', '삭제 중 오류가 발생했습니다.', 'error');
        } else {
          Swal.fire('삭제 완료!', '', 'success');
          fetchData(); 
        }
      }
    });
  };

  if (loading) return <div className="content">데이터를 불러오는 중입니다...</div>;

  const filteredHistory = history.filter(h => {
    const matchFilter = historyFilter === 'All' || h.notebook_id === historyFilter;
    const matchName = searchName === '' || (h.name && h.name.includes(searchName));
    return matchFilter && matchName;
  });

  return (
    <main className="content notebook-content">
      {/* ----------------- 상단: 노트북 현재 현황판 ----------------- */}
      <div className="rental-header-flex">
        <div>
          <h2 style={{margin: '0 0 5px 0', color: '#2c3e50'}}>임직원 노트북 대여</h2>
          <p style={{margin: 0, fontSize: '14px', color: '#868e96'}}>01번 ~ 09번 기기 대여/반납 현황</p>
        </div>
        <div className="top-actions">
          <button className="btn-action btn-register" onClick={() => openModal('current')}>대여 등록</button>
          <button className="btn-action btn-move" onClick={() => openModal('next')} style={{marginLeft: '8px'}}>예약 등록</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="notebook-table">
          <thead>
            <tr>
              <th>기기번호</th>
              <th>현재 정보</th>
              <th>대여일 / 반납일</th>
              <th>비고</th>
              <th>상태 관리</th>
              <th>다음 예약 정보</th>
              <th>예약 관리</th>
            </tr>
          </thead>
          <tbody>
            {notebooks.map((item) => {
              const isEditing = editingRowId === item.id;
              const isNextEditing = editingNextRowId === item.id;

              return (
                <tr key={item.id}>
                  <td><strong>{item.id}</strong></td>
                  
                  {/* 현재 대여자 영역 */}
                  <td>
                    {isEditing ? (
                      <div className="edit-cell">
                        <span style={{fontSize:'11px'}}>팀명/성함</span>
                        <input name="current_team" placeholder="팀명" value={editFormData.current_team} onChange={handleEditChange} className="edit-input" />
                        <input name="current_name" placeholder="이름" value={editFormData.current_name} onChange={handleEditChange} className="edit-input" />
                      </div>
                    ) : (
                      item.current_name ? <div>{item.current_team}<br/><b>{item.current_name}</b></div> : <span style={{color:'#adb5bd'}}>-</span>
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <div className="edit-cell">
                        <span style={{fontSize:'11px'}}>대여/반납 일정</span>
                        <input type="date" max="9999-12-31" name="current_rent_date" value={editFormData.current_rent_date} onChange={handleEditChange} className="edit-input" />
                        <input type="date" max="9999-12-31" name="current_return_date" value={editFormData.current_return_date} onChange={handleEditChange} className="edit-input" />
                      </div>
                    ) : (
                      item.current_name ? <span style={{fontSize: '12px'}}>{item.current_rent_date || '?'} <br/>~ {item.current_return_date || '미반납'}</span> : '-'
                    )}
                  </td>
                  
                  {/* 비고 영역 */}
                  <td>
                    {isEditing ? (
                      <div className="edit-cell">
                        <span style={{fontSize:'11px'}}>비고</span>
                        <input name="current_remark" placeholder="비고 입력" value={editFormData.current_remark} onChange={handleEditChange} className="edit-input" />
                      </div>
                    ) : (
                      item.current_name ? (
                        <span style={{fontSize: '12px'}}>{item.current_remark || '-'}</span>
                      ) : '-'
                    )}
                  </td>
                  
                  <td>
                    {isEditing ? (
                      <div className="edit-cell">
                        <button className="btn-action btn-submit" onClick={() => handleEditSave(item.id)} style={{marginBottom:'4px'}}>저장</button>
                        <button className="btn-action btn-cancel" onClick={() => setEditingRowId(null)}>취소</button>
                      </div>
                    ) : (
                      item.current_name ? (
                        <div className="edit-cell">
                          <button className="btn-action" onClick={() => handleEditClick(item)} style={{backgroundColor:'#f1f3f5', color:'#495057', marginBottom:'4px'}}>수정</button>
                          <button className="btn-action btn-return" onClick={() => handleReturnComplete(item)}>반납완료</button>
                        </div>
                      ) : '-'
                    )}
                  </td>

                  {/* 다음 예약자 영역 */}
                  <td>
                    {isNextEditing ? (
                      <div className="edit-cell">
                        <span style={{fontSize:'11px'}}>팀명/성함</span>
                        <input name="next_team" placeholder="팀명" value={editNextFormData.next_team} onChange={handleNextEditChange} className="edit-input" />
                        <input name="next_name" placeholder="이름" value={editNextFormData.next_name} onChange={handleNextEditChange} className="edit-input" />
                        <span style={{fontSize:'11px'}}>대여/반납 일정</span>
                        <input type="date" max="9999-12-31" name="next_rent_date" value={editNextFormData.next_rent_date} onChange={handleNextEditChange} className="edit-input" />
                        <input type="date" max="9999-12-31" name="next_return_date" value={editNextFormData.next_return_date} onChange={handleNextEditChange} className="edit-input" />
                        <span style={{fontSize:'11px'}}>비고</span>
                        <input name="next_remark" placeholder="비고 입력" value={editNextFormData.next_remark} onChange={handleNextEditChange} className="edit-input" />
                      </div>
                    ) : (
                      item.next_name ? (
                        <div style={{fontSize: '12px'}}>
                          {item.next_team} <b>{item.next_name}</b><br/>
                          <span style={{color: '#868e96'}}>{item.next_rent_date || '?'} ~ {item.next_return_date || '?'}</span><br/>
                          
                          {/* 💡 새로 추가된 와이핑 뱃지 영역 */}
                          {renderGapBadge(item.current_return_date, item.next_rent_date)}

                          {item.next_remark && (
                            <span style={{color: '#adb5bd', marginTop: '2px', display: 'inline-block'}}>{item.next_remark}</span>
                          )}
                        </div>
                      ) : <span style={{color:'#adb5bd'}}>예약 없음</span>
                    )}
                  </td>
                  <td>
                    {isNextEditing ? (
                      <div className="edit-cell">
                        <button className="btn-action btn-submit" onClick={() => handleNextEditSave(item.id)} style={{marginBottom:'4px'}}>저장</button>
                        <button className="btn-action btn-cancel" onClick={() => setEditingNextRowId(null)}>취소</button>
                      </div>
                    ) : (
                      item.next_name ? (
                        <div className="edit-cell">
                          <button className="btn-action" onClick={() => handleNextEditClick(item)} style={{backgroundColor:'#f1f3f5', color:'#495057', marginBottom:'4px'}}>수정</button>
                          <button className="btn-action btn-move" onClick={() => handleMoveToCurrent(item)}>대여로 전환</button>
                        </div>
                      ) : '-'
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ----------------- 하단: 대여 기록(History) 현황판 ----------------- */}
      <div className="rental-header-flex" style={{marginTop: '50px'}}>
        <div>
          <h2 style={{margin: '0 0 5px 0', color: '#2c3e50'}}>과거 대여 기록</h2>
          <p style={{margin: 0, fontSize: '14px', color: '#868e96'}}>반납이 완료된 기기 내역 (최신순)</p>
        </div>
        
        <div className="history-filter" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="이름 검색" 
            value={searchName} 
            onChange={(e) => setSearchName(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #dee2e6', outline: 'none', fontSize: '13px', fontFamily: 'inherit' }}
          />
          <select value={historyFilter} onChange={(e) => setHistoryFilter(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #dee2e6', outline: 'none', fontSize: '13px', fontFamily: 'inherit', cursor: 'pointer' }}>
            <option value="All">전체 기기 보기</option>
            {['01','02','03','04','05','06','07','08','09'].map(id => <option key={id} value={id}>{id}번 기기만</option>)}
          </select>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="notebook-table">
          <thead>
            <tr>
              <th>기기번호</th>
              <th>팀명</th>
              <th>이름</th>
              <th>대여 일자</th>
              <th>반납 일자</th>
              <th>비고</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.length > 0 ? (
              filteredHistory.map((h) => (
                <tr key={h.id}>
                  <td><strong>{h.notebook_id}</strong></td>
                  <td>{h.team}</td>
                  <td><b>{h.name}</b></td>
                  <td>{h.rent_date || '-'}</td>
                  <td style={{color: '#c92a2a', fontWeight: 'bold'}}>{h.return_date || '-'}</td>
                  <td>{h.remark || '-'}</td>
                  <td>
                    <button className="btn-action btn-delete" onClick={() => handleDeleteHistory(h.id)}>
                      기록 삭제
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{padding: '30px', color: '#adb5bd'}}>검색 조건에 맞는 과거 반납 기록이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 등록 모달 팝업창 */}
      {isModalOpen && (
        <div className="modal-overlay" style={{zIndex: 1000}}>
          <div className="modal-content">
            <h3>{modalType === 'current' ? '대여 정보 등록' : '예약 정보 등록'}</h3>
            <div className="form-group">
              <label>기기 번호</label>
              <select name="id" value={formData.id} onChange={handleModalChange} style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #dee2e6'}}>
                {['01','02','03','04','05','06','07','08','09'].map(num => <option key={num} value={num}>{num}번 기기</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>팀명</label>
              <input type="text" name="team" value={formData.team} onChange={handleModalChange} placeholder="예: 개발팀" />
            </div>
            <div className="form-group">
              <label>성함</label>
              <input type="text" name="name" value={formData.name} onChange={handleModalChange} placeholder="예: 홍길동" />
            </div>
            <div className="form-group">
              <label>대여 일자</label>
              <input type="date" max="9999-12-31" name="rent_date" value={formData.rent_date} onChange={handleModalChange} />
            </div>
            <div className="form-group">
              <label>반납 일자</label>
              <input type="date" max="9999-12-31" name="return_date" value={formData.return_date} onChange={handleModalChange} />
            </div>
            <div className="form-group">
              <label>비고</label>
              <input type="text" name="remark" value={formData.remark} onChange={handleModalChange} placeholder="특이사항 입력" />
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>취소</button>
              <button className="btn-submit" onClick={handleModalSubmit}>저장하기</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default NotebookRental;
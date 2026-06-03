import { createClient } from '@supabase/supabase-js';

// 스크린샷에서 추출한 주소와 보내주신 열쇠값입니다.
const supabaseUrl = 'https://aegbkvuptekkbrwchjvc.supabase.co';
const supabaseKey = 'sb_publishable_JgfRHv7etV2x1lXIZWLq7w_ZgW5osIx';

// 수파베이스 연결 객체 생성
export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nwjttlsrogmgjqwuyokb.supabase.co';
// Thay chuỗi bên dưới bằng đoạn Key thực tế dài ngoằng của bạn (bắt đầu bằng eyJ...)
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xxmtujwwctpeqknmeszg.supabase.co'; // From your Supabase Project Settings > API
const supabaseAnonKey = 'sb_publishable_a--xB9eqe2tQjrjXOCH6-Q_pVX9t2Kp'; // From your Supabase Project Settings > API

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
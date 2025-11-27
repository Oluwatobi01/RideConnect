
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfiigufdmvigexvcwndi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmaWlndWZkbXZpZ2V4dmN3bmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxOTI4NzksImV4cCI6MjA3OTc2ODg3OX0.2-rWYTxYnJDYMH37HU2ycKuL4vFR-47mQ1exDJeqexU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

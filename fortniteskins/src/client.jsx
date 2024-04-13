import { createClient } from '@supabase/supabase-js'

const URL = 'https://svlhbkpurfxqpdkeijbv.supabase.co'
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2bGhia3B1cmZ4cXBka2VpamJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTI3ODksImV4cCI6MjAyODUyODc4OX0.Tujy9Ocl41khSyrcfpqPLBvjzU_XA0SyivnuLnZaJJI"

export const supabase = createClient(URL, API_KEY)
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image_url?: string
  created_at: string
}

export interface Performance {
  id: string
  title: string
  composer: string
  audio_url?: string
  image_url?: string
  description: string
  category: string
  created_at: string
}

export interface Newsletter {
  id: string
  email: string
  subscribed_at: string
}


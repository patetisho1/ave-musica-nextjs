import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Better error handling with detailed messages
if (!supabaseUrl) {
  if (process.env.NODE_ENV === 'production') {
    console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
    // Don't throw in production to avoid build failure - use fallback
  } else {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable. Please check your .env.local file or Vercel environment variables.')
  }
}

if (!supabaseAnonKey) {
  if (process.env.NODE_ENV === 'production') {
    console.error('❌ Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
    // Don't throw in production to avoid build failure - use fallback
  } else {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. Please check your .env.local file or Vercel environment variables.')
  }
}

// Use fallback values in production if variables are missing (to avoid build failure)
const finalUrl = supabaseUrl || 'https://placeholder.supabase.co'
const finalKey = supabaseAnonKey || 'placeholder-key'

// Only throw in development if variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error(
      `Missing Supabase environment variables.\n` +
      `NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✅' : '❌ Missing'}\n` +
      `NEXT_PUBLIC_SUPABASE_ANON_KEY: ${supabaseAnonKey ? '✅' : '❌ Missing'}\n\n` +
      `Please check:\n` +
      `1. .env.local file in project root\n` +
      `2. Vercel Environment Variables (Settings → Environment Variables)`
    )
  }
}

export const supabase = createClient(finalUrl, finalKey)

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


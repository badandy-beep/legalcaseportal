import { createClient as createSupabase } from '@supabase/supabase-js'

let client: ReturnType<typeof createSupabase> | null = null

export function createClient() {
  if (client) return client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
  client = createSupabase(url, key)
  return client
}

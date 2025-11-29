import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export function createClient() {
  return createPagesServerClient({ cookies })
}

export function createAdminClient() {
  return createPagesServerClient({
    cookies,
    options: {
      db: { schema: 'public' }
    },
    supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY
  })
}

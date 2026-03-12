import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { action, resource, resource_id } = await req.json()
  await supabase.from('audit_log').insert({
    user_id: user.id,
    user_email: user.email,
    action,
    resource,
    resource_id: resource_id || null,
    ip_address: req.headers.get('x-forwarded-for') || 'unknown'
  })

  return NextResponse.json({ ok: true })
}

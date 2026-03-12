import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { caseData } = await req.json()

  // Return JSON with formatted case data for client-side PDF generation
  return NextResponse.json({ caseData, generatedAt: new Date().toISOString() })
}

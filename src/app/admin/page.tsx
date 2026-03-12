'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Invalid credentials. Access denied.')
      setLoading(false)
      return
    }
    // Log the login event
    await fetch('/api/admin/audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'LOGIN', resource: 'admin_portal' })
    })
    router.push('/admin/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">
        <div className="flex items-center gap-3 mb-8">
          <img src="/alg-logo.png" alt="Alpha Law Group" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-[#111827] mb-1" style={{fontFamily:'Georgia,serif'}}>Staff Portal</h1>
        <p className="text-sm text-[#475569] mb-8">Authorized personnel only. All access is logged and audited.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
              placeholder="attorney@alphalawgroup.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d4a843] hover:bg-[#b8902e] text-white font-semibold py-3 rounded-lg transition text-sm disabled:opacity-60"
          >
            {loading ? 'Authenticating...' : 'Sign In →'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
          <p className="text-xs text-[#475569] text-center">
            This portal contains protected health information (PHI).<br />
            HIPAA regulations apply. Unauthorized access is a federal offense.
          </p>
        </div>
      </div>
    </div>
  )
}

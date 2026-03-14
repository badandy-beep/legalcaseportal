'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (pin === '12345') {
      sessionStorage.setItem('alg-admin-auth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Incorrect PIN')
      setLoading(false)
    }
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
            <label className="block text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1">PIN</label>
            <input
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              required
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
              placeholder="Enter PIN"
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

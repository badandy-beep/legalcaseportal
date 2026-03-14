'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const TABS = [
  { id: 'cases', label: 'Cases', roles: ['admin','attorney','paralegal','developer'] },
  { id: 'emails', label: 'Emails', roles: ['admin','attorney','paralegal'] },
  { id: 'analytics', label: 'Analytics', roles: ['admin','developer'] },
  { id: 'infrastructure', label: 'Infrastructure', roles: ['admin','developer'] },
  { id: 'domains', label: 'Domains', roles: ['admin','developer'] },
  { id: 'landing', label: 'Landing Pages', roles: ['admin','developer'] },
  { id: 'media', label: 'Media Library', roles: ['admin','attorney','paralegal','developer'] },
  { id: 'database', label: 'Database', roles: ['admin','developer'] },
  { id: 'settings', label: 'Settings', roles: ['admin'] },
  { id: 'audit', label: 'Audit Log', roles: ['admin'] },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('cases')
  const [user, setUser] = useState<any>(null)
  const [adminUser, setAdminUser] = useState<any>(null)
  const [cases, setCases] = useState<any[]>([])
  const [infrastructure, setInfrastructure] = useState<any[]>([])
  const [domains, setDomains] = useState<any[]>([])
  const [auditLog, setAuditLog] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [revealedKeys, setRevealedKeys] = useState<Set<string>>(new Set())

  const router = useRouter()

  useEffect(() => {
    const isAuth = typeof window !== 'undefined' && sessionStorage.getItem('alg-admin-auth') === 'true'
    if (!isAuth) { router.push('/admin'); return }

    setUser({ email: 'admin@alphalawgroup.com' })
    setAdminUser({ role: 'admin' })
    setLoading(false)
  }, [])

  const handleSignOut = () => {
    sessionStorage.removeItem('alg-admin-auth')
    router.push('/admin')
  }

  const downloadCasePDF = async (caseData: any) => {
    const response = await fetch('/api/admin/cases/pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ caseData })
    })
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ALG-Case-${caseData.id?.slice(0,8)}-${caseData.child_first_name || 'Unknown'}.pdf`
    a.click()

    // Log the download
    await fetch('/api/admin/audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'DOWNLOAD_PDF', resource: 'case', resource_id: caseData.id })
    })
  }

  const toggleRevealKey = (id: string) => {
    setRevealedKeys(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const filteredCases = cases.filter(c => {
    const matchSearch = !searchTerm ||
      (c.first_name + ' ' + c.last_name + ' ' + c.child_first_name + ' ' + c.email)
        .toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = statusFilter === 'all' || c.status === statusFilter
    return matchSearch && matchStatus
  })

  const availableTabs = TABS.filter(t => !adminUser || t.roles.includes(adminUser.role))

  const statusColor = (status: string) => {
    const map: Record<string, string> = {
      new: 'bg-[#0a1628] text-[#d4a843]',
      in_review: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-green-100 text-green-800',
      declined: 'bg-red-100 text-red-800',
    }
    return map[status] || 'bg-gray-100 text-gray-800'
  }

  if (loading) return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center">
      <div className="text-white text-lg">Loading secure portal...</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Top Nav */}
      <div className="bg-[#111827] text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/alg-logo.png" alt="ALG" className="h-9 w-auto brightness-0 invert" />
          <span className="text-xs text-gray-400 border-l border-gray-600 pl-4">Staff Portal — {adminUser?.role?.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">{user?.email}</span>
          <button onClick={handleSignOut} className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition">Sign Out</button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-[#E2E8F0] px-6 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {availableTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-[#0a1628] text-[#0a1628]'
                  : 'border-transparent text-[#475569] hover:text-[#111827]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6 max-w-7xl mx-auto">

        {/* ── CASES TAB ── */}
        {activeTab === 'cases' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#111827]" style={{fontFamily:'Georgia,serif'}}>Case Intake</h2>
                <p className="text-sm text-[#475569]">{filteredCases.length} of {cases.length} cases</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Search by name, email..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="border border-[#E2E8F0] rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                />
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="border border-[#E2E8F0] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="in_review">In Review</option>
                  <option value="qualified">Qualified</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-[#F8F9FA] border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Parent Name</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Child Name</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">State</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {filteredCases.length === 0 ? (
                    <tr><td colSpan={7} className="px-4 py-12 text-center text-[#475569]">No cases found.</td></tr>
                  ) : filteredCases.map(c => (
                    <tr key={c.id} className="hover:bg-[#F8F9FA] transition">
                      <td className="px-4 py-3 text-[#475569] whitespace-nowrap">
                        {new Date(c.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#111827]">
                        {c.first_name} {c.last_name}
                      </td>
                      <td className="px-4 py-3 text-[#475569]">{c.child_first_name} {c.child_last_name}</td>
                      <td className="px-4 py-3 text-[#475569]">{c.state}</td>
                      <td className="px-4 py-3 text-[#475569]">
                        <a href={`mailto:${c.email}`} className="text-[#0a1628] hover:underline">{c.email}</a>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor(c.status || 'new')}`}>
                          {(c.status || 'new').replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => downloadCasePDF(c)}
                            className="bg-[#d4a843] hover:bg-[#b8902e] text-white text-xs px-3 py-1.5 rounded-lg transition"
                          >
                            PDF
                          </button>
                          <button className="border border-[#E2E8F0] hover:border-[#0a1628] text-[#475569] hover:text-[#d4a843] text-xs px-3 py-1.5 rounded-lg transition">
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── INFRASTRUCTURE TAB ── */}
        {activeTab === 'infrastructure' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#111827]" style={{fontFamily:'Georgia,serif'}}>Infrastructure &amp; API Keys</h2>
              <p className="text-sm text-[#475569]">Full-stack partner registry. API keys are masked — click to reveal. All views are logged.</p>
            </div>
            <div className="grid gap-4">
              {infrastructure.map(item => (
                <div key={item.id} className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-[#111827] text-lg">{item.partner_name}</h3>
                        <span className="text-xs bg-[#F8F9FA] border border-[#E2E8F0] px-2 py-0.5 rounded text-[#475569] uppercase tracking-wider">{item.category}</span>
                      </div>
                      <p className="text-sm text-[#475569] mb-3">{item.purpose}</p>
                      {item.notes && <p className="text-xs text-[#94a3b8] italic">{item.notes}</p>}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl font-bold text-[#111827]">
                        {item.monthly_cost > 0 ? `$${item.monthly_cost}/mo` : 'Free'}
                      </div>
                      {item.dashboard_url && (
                        <a href={item.dashboard_url} target="_blank" rel="noopener noreferrer"
                           className="text-xs text-[#0a1628] hover:underline">Open Dashboard &rarr;</a>
                      )}
                    </div>
                  </div>
                  {item.api_key_encrypted && (
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider">API Key:</span>
                      <code className="flex-1 bg-[#F8F9FA] border border-[#E2E8F0] rounded px-3 py-1.5 text-sm font-mono text-[#111827]">
                        {revealedKeys.has(item.id) ? item.api_key_encrypted : '••••••••••••••••••••••••••••••••'}
                      </code>
                      <button onClick={() => toggleRevealKey(item.id)}
                              className="text-xs border border-[#E2E8F0] hover:border-[#0a1628] px-3 py-1.5 rounded-lg text-[#475569] hover:text-[#d4a843] transition">
                        {revealedKeys.has(item.id) ? 'Hide' : 'Reveal'}
                      </button>
                      {revealedKeys.has(item.id) && (
                        <button onClick={() => copyToClipboard(item.api_key_encrypted)}
                                className="text-xs bg-[#d4a843] text-[#0a1628] px-3 py-1.5 rounded-lg hover:bg-[#b8902e] transition">
                          Copy
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── DOMAINS TAB ── */}
        {activeTab === 'domains' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#111827]" style={{fontFamily:'Georgia,serif'}}>Domain Registry</h2>
              <p className="text-sm text-[#475569]">All owned domains, where they point, and their current status.</p>
            </div>
            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-[#F8F9FA] border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Domain</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Registrar</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Expiry</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Points To</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Purpose</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {domains.map(d => (
                    <tr key={d.id} className="hover:bg-[#F8F9FA] transition">
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-[#0a1628]">{d.domain}</td>
                      <td className="px-4 py-3 text-[#475569]">{d.registrar}</td>
                      <td className="px-4 py-3 text-[#475569]">{d.expiry_date ? new Date(d.expiry_date).toLocaleDateString() : '—'}</td>
                      <td className="px-4 py-3 text-[#475569]">{d.pointed_to || '—'}</td>
                      <td className="px-4 py-3 text-[#475569]">{d.purpose}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          d.status === 'active' ? 'bg-green-100 text-green-800' :
                          d.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>{d.status?.toUpperCase()}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-[#94a3b8] italic">{d.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── ANALYTICS TAB ── */}
        {activeTab === 'analytics' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2" style={{fontFamily:'Georgia,serif'}}>Analytics</h2>
            <p className="text-sm text-[#475569] mb-6">Site traffic, conversion rates, and campaign performance. Connect Google Analytics or Plausible below.</p>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-12 text-center shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-2">Analytics Integration Pending</h3>
              <p className="text-sm text-[#475569] mb-6">Embed your Google Analytics 4 or Plausible dashboard here. Add your Measurement ID to .env to activate.</p>
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E2E8F0]">
                  <div className="text-2xl font-bold text-[#111827]">{cases.length}</div>
                  <div className="text-xs text-[#475569]">Total Submissions</div>
                </div>
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E2E8F0]">
                  <div className="text-2xl font-bold text-green-600">{cases.filter(c=>c.status==='qualified').length}</div>
                  <div className="text-xs text-[#475569]">Qualified</div>
                </div>
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E2E8F0]">
                  <div className="text-2xl font-bold text-blue-600">{cases.filter(c=>c.status==='new'||!c.status).length}</div>
                  <div className="text-xs text-[#475569]">New / Pending</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── EMAILS TAB ── */}
        {activeTab === 'emails' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2" style={{fontFamily:'Georgia,serif'}}>Email Activity</h2>
            <p className="text-sm text-[#475569] mb-6">Transactional email log via Resend. Connect Resend webhook to populate this log.</p>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-12 text-center shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-2">Email Log Integration Pending</h3>
              <p className="text-sm text-[#475569]">Add RESEND_WEBHOOK_SECRET to .env and configure webhook in Resend dashboard to activate email logging.</p>
            </div>
          </div>
        )}

        {/* ── LANDING PAGES TAB ── */}
        {activeTab === 'landing' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2" style={{fontFamily:'Georgia,serif'}}>Landing Pages &amp; Campaigns</h2>
            <p className="text-sm text-[#475569] mb-6">Track all landing pages, UTM campaigns, ad spend, and conversion rates.</p>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-12 text-center shadow-sm">
              <h3 className="text-lg font-bold text-[#111827] mb-2">Landing Pages — Coming Soon</h3>
              <p className="text-sm text-[#475569]">Add your first landing page campaign to begin tracking performance.</p>
            </div>
          </div>
        )}

        {/* ── MEDIA LIBRARY TAB ── */}
        {activeTab === 'media' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{fontFamily:'Georgia,serif'}}>Media Library</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/alg-logo.png', label: 'ALG Logo (Primary)' },
                { src: '/ajf-logo.png', label: 'AJF Logo (Transparent)' },
                { src: '/Alex-Kompothecras.webp', label: 'Alex Kompothecras' },
                { src: '/Chase-Engelbrecht.webp', label: 'Chase Engelbrecht' },
                { src: '/nicolas-hulscher.webp', label: 'Nicolas Hulscher' },
              ].map(asset => (
                <div key={asset.src} className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
                  <div className="h-36 bg-[#F8F9FA] flex items-center justify-center p-4">
                    <img src={asset.src} alt={asset.label} className="max-h-28 max-w-full object-contain" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-medium text-[#111827] mb-2">{asset.label}</p>
                    <a href={asset.src} download className="text-xs text-[#0a1628] hover:underline">Download</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── DATABASE TAB ── */}
        {activeTab === 'database' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2" style={{fontFamily:'Georgia,serif'}}>Database</h2>
            <p className="text-sm text-[#475569] mb-6">Supabase schema reference and direct links.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#111827] mb-4">Connection Info</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex gap-2"><dt className="text-[#475569] w-32 flex-shrink-0">Project ID:</dt><dd className="font-mono text-[#111827]">nyrarsaigsetyvinlpay</dd></div>
                  <div className="flex gap-2"><dt className="text-[#475569] w-32 flex-shrink-0">Region:</dt><dd className="text-[#111827]">us-east-1</dd></div>
                  <div className="flex gap-2"><dt className="text-[#475569] w-32 flex-shrink-0">Total Cases:</dt><dd className="font-bold text-[#0a1628]">{cases.length}</dd></div>
                </dl>
                <a href="https://supabase.com/dashboard/project/nyrarsaigsetyvinlpay" target="_blank" rel="noopener noreferrer"
                   className="mt-4 inline-block text-sm text-[#0a1628] font-semibold hover:underline">Open Supabase Dashboard &rarr;</a>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#111827] mb-4">Tables</h3>
                <ul className="space-y-2 text-sm font-mono text-[#475569]">
                  {['intake_submissions','admin_users','audit_log','infrastructure','domains','authors','links'].map(t => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── SETTINGS TAB ── */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-6" style={{fontFamily:'Georgia,serif'}}>Settings</h2>
            <div className="grid gap-6">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#111827] mb-1">Two-Factor Authentication</h3>
                <p className="text-sm text-[#475569] mb-4">SMS-based 2FA via Twilio. Requires TWILIO_AUTH_TOKEN in .env.</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-not-allowed opacity-60">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 shadow"></div>
                  </div>
                  <span className="text-sm text-[#475569]">Disabled — configure Twilio env vars to enable</span>
                </div>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#111827] mb-4">Admin Users</h3>
                <p className="text-sm text-[#475569]">Manage user access in the Supabase Dashboard &rarr; admin_users table. Add users via Supabase Auth, then insert their user_id and role.</p>
                <a href="https://supabase.com/dashboard/project/nyrarsaigsetyvinlpay/editor" target="_blank" rel="noopener noreferrer"
                   className="mt-3 inline-block text-sm text-[#0a1628] font-semibold hover:underline">Manage Users in Supabase &rarr;</a>
              </div>
            </div>
          </div>
        )}

        {/* ── AUDIT LOG TAB ── */}
        {activeTab === 'audit' && (
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2" style={{fontFamily:'Georgia,serif'}}>Audit Log</h2>
            <p className="text-sm text-[#475569] mb-6">HIPAA-required log of all access events. Every login, case view, and PDF download is recorded.</p>
            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-[#F8F9FA] border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Timestamp</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">User</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Resource</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-[#475569] uppercase tracking-wider">Record ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {auditLog.length === 0 ? (
                    <tr><td colSpan={5} className="px-4 py-12 text-center text-[#475569]">No audit events yet.</td></tr>
                  ) : auditLog.map(log => (
                    <tr key={log.id} className="hover:bg-[#F8F9FA]">
                      <td className="px-4 py-3 text-[#475569] whitespace-nowrap text-xs">{new Date(log.created_at).toLocaleString()}</td>
                      <td className="px-4 py-3 text-[#111827] text-xs">{log.user_email}</td>
                      <td className="px-4 py-3"><span className="bg-[#0a1628] text-[#d4a843] text-xs px-2 py-1 rounded font-mono">{log.action}</span></td>
                      <td className="px-4 py-3 text-[#475569] text-xs">{log.resource}</td>
                      <td className="px-4 py-3 text-[#475569] font-mono text-xs">{log.resource_id?.slice(0,8) || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

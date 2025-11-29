'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Shield, LayoutDashboard, FileText, Settings, Users, TrendingUp, Clock, CheckCircle, AlertCircle, Search, Filter, ChevronRight } from 'lucide-react'

// Demo data - in production this comes from Supabase
const demoCases = [
  { id: 1, caseNumber: 'AJF-2024-000001', clientName: 'Sarah Johnson', childName: 'Michael Johnson', status: 'New', createdAt: '2024-01-15', priority: 'High' },
  { id: 2, caseNumber: 'AJF-2024-000002', clientName: 'Robert Smith', childName: 'Emma Smith', status: 'Under Review', createdAt: '2024-01-14', priority: 'Normal' },
  { id: 3, caseNumber: 'AJF-2024-000003', clientName: 'Jennifer Davis', childName: 'Liam Davis', status: 'Documents Pending', createdAt: '2024-01-13', priority: 'Normal' },
  { id: 4, caseNumber: 'AJF-2024-000004', clientName: 'Michael Brown', childName: 'Olivia Brown', status: 'Assigned', createdAt: '2024-01-12', priority: 'High' },
  { id: 5, caseNumber: 'AJF-2024-000005', clientName: 'Emily Wilson', childName: 'Noah Wilson', status: 'New', createdAt: '2024-01-11', priority: 'Urgent' },
]

const statusColors: Record<string, string> = {
  'New': 'bg-blue-100 text-blue-800',
  'Under Review': 'bg-yellow-100 text-yellow-800',
  'Documents Pending': 'bg-orange-100 text-orange-800',
  'Assigned': 'bg-green-100 text-green-800',
  'Closed': 'bg-gray-100 text-gray-800',
}

const priorityColors: Record<string, string> = {
  'Urgent': 'text-coral-600',
  'High': 'text-orange-600',
  'Normal': 'text-gray-600',
}

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filteredCases = demoCases.filter(c => {
    const matchesSearch = c.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.childName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-navy-900 text-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="w-8 h-8 text-teal-400" />
            <span className="text-xl font-bold">LegalCasePortal</span>
          </div>
          <nav className="space-y-2">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-navy-800 text-white">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/admin/cases" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-navy-800 hover:text-white">
              <FileText className="w-5 h-5" />
              Cases
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-navy-800 hover:text-white">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-sm">Admin User</p>
              <p className="text-xs text-gray-400">admin@ajf.org</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back. Here's an overview of your cases.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +12%
              </span>
            </div>
            <p className="text-3xl font-bold text-navy-900">247</p>
            <p className="text-gray-600">Total Cases</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-navy-900">18</p>
            <p className="text-gray-600">Pending Review</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-navy-900">156</p>
            <p className="text-gray-600">Assigned</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-coral-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-navy-900">5</p>
            <p className="text-gray-600">Urgent</p>
          </div>
        </div>

        {/* Recent Cases Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-navy-900">Recent Cases</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                >
                  <option value="All">All Status</option>
                  <option value="New">New</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Documents Pending">Documents Pending</option>
                  <option value="Assigned">Assigned</option>
                </select>
              </div>
            </div>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Case #</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Child</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCases.map(caseItem => (
                <tr key={caseItem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm text-teal-600">{caseItem.caseNumber}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">{caseItem.clientName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600">{caseItem.childName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[caseItem.status]}`}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium text-sm ${priorityColors[caseItem.priority]}`}>
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 text-sm">{caseItem.createdAt}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-teal-600 hover:text-teal-700">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 border-t border-gray-200 text-center">
            <Link href="/admin/cases" className="text-teal-600 hover:text-teal-700 font-medium">
              View All Cases →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

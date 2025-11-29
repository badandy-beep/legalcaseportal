'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, FileText, X, ArrowRight, CheckCircle } from 'lucide-react'

const DOCUMENT_TYPES = [
  { id: 'birthCertificate', label: 'Birth Certificate', required: true },
  { id: 'vaccinationRecords', label: 'Vaccination Records', required: true },
  { id: 'medicalRecords', label: 'Medical Records', required: false },
  { id: 'diagnosisReports', label: 'Diagnosis/Evaluation Reports', required: true },
  { id: 'iepRecords', label: 'IEP/School Records', required: false },
  { id: 'therapyRecords', label: 'Therapy Records', required: false },
  { id: 'hospitalRecords', label: 'Hospital/Birth Records', required: false },
  { id: 'photos', label: 'Photos/Videos (developmental evidence)', required: false },
  { id: 'other', label: 'Other Supporting Documents', required: false },
]

interface UploadedFile {
  name: string
  size: number
  type: string
  category: string
}

export default function Phase9Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<Record<string, UploadedFile[]>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeCategory, setActiveCategory] = useState('')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const selectedFiles = Array.from(e.target.files || [])
    const newFiles = selectedFiles.map(f => ({
      name: f.name,
      size: f.size,
      type: f.type,
      category
    }))
    setFiles(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), ...newFiles]
    }))
  }

  const removeFile = (category: string, fileName: string) => {
    setFiles(prev => ({
      ...prev,
      [category]: prev[category].filter(f => f.name !== fileName)
    }))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // In production, files would be uploaded to Supabase Storage
    localStorage.setItem('intake_phase9', JSON.stringify(files))
    router.push('/intake/phase-10')
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Document Upload</h1>
        <p className="text-gray-600">Upload supporting documents for your case. You can add more documents later.</p>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-teal-800 mb-2">📋 Documents That Strengthen Your Case</h3>
        <ul className="text-sm text-teal-700 space-y-1">
          <li>• Vaccination records with dates and lot numbers</li>
          <li>• Medical records documenting symptoms after vaccination</li>
          <li>• Autism diagnosis and evaluation reports</li>
          <li>• Any documentation of developmental regression</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {DOCUMENT_TYPES.map(docType => (
          <div key={docType.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-medium text-gray-900">{docType.label}</span>
                {docType.required && <span className="text-coral-600 ml-1">*</span>}
              </div>
              <label className="btn-outline py-2 px-4 text-sm cursor-pointer">
                <Upload className="w-4 h-4 inline mr-1" />
                Add Files
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.mp4,.mov"
                  onChange={(e) => handleFileSelect(e, docType.id)}
                  className="hidden"
                />
              </label>
            </div>
            
            {/* Uploaded files list */}
            {files[docType.id]?.length > 0 && (
              <div className="space-y-2">
                {files[docType.id].map(file => (
                  <div key={file.name} className="flex items-center justify-between bg-gray-50 rounded p-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                      <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                    </div>
                    <button type="button" onClick={() => removeFile(docType.id, file.name)} className="text-gray-400 hover:text-coral-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {files[docType.id]?.length > 0 && (
              <div className="flex items-center gap-1 mt-2 text-teal-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">{files[docType.id].length} file(s) added</span>
              </div>
            )}
          </div>
        ))}

        <p className="text-sm text-gray-500 mt-4">
          Accepted formats: PDF, DOC, DOCX, JPG, PNG, GIF, MP4, MOV. Max 50MB per file.
          You can upload additional documents later through your account dashboard.
        </p>

        <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2 mt-6">
          {loading ? 'Saving...' : <>Continue to Legal Agreements <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  )
}

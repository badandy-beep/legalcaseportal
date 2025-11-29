'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Brain, ArrowRight, AlertCircle } from 'lucide-react'

const MILESTONES = [
  { id: 'socialSmile', label: 'Social smile', typical: '6-8 weeks' },
  { id: 'eyeContact', label: 'Consistent eye contact', typical: '2-3 months' },
  { id: 'respondsName', label: 'Responds to name', typical: '6-9 months' },
  { id: 'babbling', label: 'Babbling', typical: '6-9 months' },
  { id: 'pointsObjects', label: 'Points to objects', typical: '9-12 months' },
  { id: 'firstWords', label: 'First words', typical: '12-18 months' },
  { id: 'twoPhrases', label: 'Two-word phrases', typical: '18-24 months' },
  { id: 'pretendPlay', label: 'Pretend/imaginative play', typical: '18-24 months' },
  { id: 'followsDirections', label: 'Follows simple directions', typical: '12-18 months' },
  { id: 'sharesInterests', label: 'Shows/shares interests', typical: '12-18 months' },
]

const SOCIAL_SYMPTOMS = [
  'Limited or no eye contact',
  'Does not respond to name by 12 months',
  'Does not point at objects to show interest',
  'Does not share enjoyment with others',
  'Difficulty understanding other people\'s feelings',
  'Delayed speech and language skills',
  'Repeats words or phrases (echolalia)',
  'Gives unrelated answers to questions',
  'Difficulty having back-and-forth conversations',
]

const REPETITIVE_BEHAVIORS = [
  'Repetitive movements (hand flapping, rocking, spinning)',
  'Lines up toys or objects',
  'Gets upset by minor changes in routine',
  'Has obsessive interests',
  'Unusual reactions to sensory input',
  'Unusual eating habits or food selectivity',
  'Unusual sleeping patterns',
]

const REGRESSION_INDICATORS = [
  'Lost previously acquired speech',
  'Lost social skills (eye contact, responding to name)',
  'Lost motor skills',
  'Regression occurred after vaccination',
  'Regression occurred after illness/fever',
]

export default function Phase8Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    hasDiagnosis: '',
    diagnosisDate: '',
    ageAtDiagnosis: '',
    diagnosingProvider: '',
    dsmLevel: '',
  })
  const [milestones, setMilestones] = useState<Record<string, { status: string; age: string }>>({})
  const [socialSymptoms, setSocialSymptoms] = useState<string[]>([])
  const [repetitiveBehaviors, setRepetitiveBehaviors] = useState<string[]>([])
  const [regressionIndicators, setRegressionIndicators] = useState<string[]>([])
  const [regressionDetails, setRegressionDetails] = useState({
    experienced: '', regressionAge: '', skillsLost: '', eventsBefore: '',
    vaccinesRole: '', whichVaccines: '', postVaccineSymptoms: '', timeline: '',
    currentTherapies: '', schoolStatus: '', additionalObservations: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleSymptom = (arr: string[], setArr: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setArr(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
  }

  const handleMilestone = (id: string, field: 'status' | 'age', value: string) => {
    setMilestones(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    localStorage.setItem('intake_phase8', JSON.stringify({
      ...formData, milestones, socialSymptoms, repetitiveBehaviors, regressionIndicators, regressionDetails
    }))
    router.push('/intake/phase-9')
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">Autism Assessment</h1>
        <p className="text-gray-600">Detailed information about autism diagnosis, symptoms, and regression.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Diagnosis Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-teal-600" /> Diagnosis Information
          </h2>
          <div><label className="input-label">Has your child received an official ASD diagnosis? <span className="text-coral-600">*</span></label>
            <select name="hasDiagnosis" value={formData.hasDiagnosis} onChange={handleChange} className="input-field" required>
              <option value="">Select...</option>
              <option value="Yes">Yes - Officially diagnosed</option>
              <option value="No - Suspected">No - But ASD is suspected</option>
              <option value="Under evaluation">Currently under evaluation</option>
              <option value="Not evaluated">Not yet evaluated</option>
            </select>
          </div>
          {formData.hasDiagnosis === 'Yes' && (
            <div className="grid grid-cols-2 gap-4">
              <div><label className="input-label">Date of Diagnosis</label><input type="date" name="diagnosisDate" value={formData.diagnosisDate} onChange={handleChange} className="input-field" /></div>
              <div><label className="input-label">Age at Diagnosis</label><input type="text" name="ageAtDiagnosis" value={formData.ageAtDiagnosis} onChange={handleChange} className="input-field" placeholder="e.g., 2 years 3 months" /></div>
              <div><label className="input-label">Diagnosing Provider</label><input type="text" name="diagnosingProvider" value={formData.diagnosingProvider} onChange={handleChange} className="input-field" /></div>
              <div><label className="input-label">DSM-5 Level</label>
                <select name="dsmLevel" value={formData.dsmLevel} onChange={handleChange} className="input-field">
                  <option value="">Select...</option>
                  <option value="Level 1">Level 1 - Requiring Support</option>
                  <option value="Level 2">Level 2 - Requiring Substantial Support</option>
                  <option value="Level 3">Level 3 - Requiring Very Substantial Support</option>
                  <option value="Unspecified">Unspecified</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Developmental Milestones */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900">Developmental Milestones</h2>
          <p className="text-sm text-gray-500">For each milestone, indicate if it was achieved on time, delayed, never achieved, or lost.</p>
          <div className="space-y-3">
            {MILESTONES.map(m => (
              <div key={m.id} className="grid grid-cols-3 gap-2 items-center p-3 bg-gray-50 rounded-lg">
                <div><span className="font-medium text-sm">{m.label}</span><p className="text-xs text-gray-500">Typical: {m.typical}</p></div>
                <select value={milestones[m.id]?.status || ''} onChange={(e) => handleMilestone(m.id, 'status', e.target.value)} className="input-field text-sm py-2">
                  <option value="">Status...</option>
                  <option value="On time">On time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Never achieved">Never achieved</option>
                  <option value="Achieved then lost">Achieved then lost</option>
                </select>
                <input type="text" value={milestones[m.id]?.age || ''} onChange={(e) => handleMilestone(m.id, 'age', e.target.value)} placeholder="Age achieved" className="input-field text-sm py-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Social Communication Symptoms */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900">Social Communication Symptoms</h2>
          <div className="grid gap-2">
            {SOCIAL_SYMPTOMS.map(s => (
              <label key={s} className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer ${socialSymptoms.includes(s) ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`}>
                <input type="checkbox" checked={socialSymptoms.includes(s)} onChange={() => toggleSymptom(socialSymptoms, setSocialSymptoms, s)} className="checkbox-custom" />
                <span className="text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Repetitive Behaviors */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900">Repetitive/Restricted Behaviors</h2>
          <div className="grid gap-2">
            {REPETITIVE_BEHAVIORS.map(b => (
              <label key={b} className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer ${repetitiveBehaviors.includes(b) ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`}>
                <input type="checkbox" checked={repetitiveBehaviors.includes(b)} onChange={() => toggleSymptom(repetitiveBehaviors, setRepetitiveBehaviors, b)} className="checkbox-custom" />
                <span className="text-sm">{b}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Regression */}
        <div className="space-y-4 bg-coral-50 p-4 rounded-lg border border-coral-200">
          <h2 className="text-lg font-semibold text-coral-800 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" /> Regression Indicators
          </h2>
          <p className="text-sm text-coral-700">This section is critical for vaccine injury cases.</p>
          <div className="grid gap-2">
            {REGRESSION_INDICATORS.map(r => (
              <label key={r} className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer ${regressionIndicators.includes(r) ? 'border-coral-500 bg-coral-100' : 'border-coral-200 bg-white'}`}>
                <input type="checkbox" checked={regressionIndicators.includes(r)} onChange={() => toggleSymptom(regressionIndicators, setRegressionIndicators, r)} className="checkbox-custom" />
                <span className="text-sm">{r}</span>
              </label>
            ))}
          </div>
          
          <div className="space-y-4 mt-4">
            <div><label className="input-label">Did your child experience regression? <span className="text-coral-600">*</span></label>
              <select value={regressionDetails.experienced} onChange={(e) => setRegressionDetails(p => ({...p, experienced: e.target.value}))} className="input-field" required>
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Unsure">Unsure</option>
              </select>
            </div>
            {regressionDetails.experienced === 'Yes' && (
              <>
                <div><label className="input-label">Age when regression was noticed</label>
                  <input type="text" value={regressionDetails.regressionAge} onChange={(e) => setRegressionDetails(p => ({...p, regressionAge: e.target.value}))} className="input-field" placeholder="e.g., 15 months" /></div>
                <div><label className="input-label">Skills Lost (describe in detail)</label>
                  <textarea value={regressionDetails.skillsLost} onChange={(e) => setRegressionDetails(p => ({...p, skillsLost: e.target.value}))} className="input-field" rows={3} /></div>
                <div><label className="input-label">Events Before Regression</label>
                  <textarea value={regressionDetails.eventsBefore} onChange={(e) => setRegressionDetails(p => ({...p, eventsBefore: e.target.value}))} className="input-field" rows={3} placeholder="Describe any events before regression (vaccinations, illness, fever, etc.)" /></div>
              </>
            )}
          </div>
        </div>

        {/* Vaccination Connection */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900">Vaccination History & Connection</h2>
          <div><label className="input-label">Do you believe vaccines played a role?</label>
            <select value={regressionDetails.vaccinesRole} onChange={(e) => setRegressionDetails(p => ({...p, vaccinesRole: e.target.value}))} className="input-field">
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Unsure">Unsure</option>
            </select>
          </div>
          {(regressionDetails.vaccinesRole === 'Yes' || regressionDetails.vaccinesRole === 'Unsure') && (
            <>
              <div><label className="input-label">Which vaccines do you suspect?</label>
                <textarea value={regressionDetails.whichVaccines} onChange={(e) => setRegressionDetails(p => ({...p, whichVaccines: e.target.value}))} className="input-field" rows={2} placeholder="e.g., MMR, DTaP, Hepatitis B" /></div>
              <div><label className="input-label">Symptoms observed after vaccination</label>
                <textarea value={regressionDetails.postVaccineSymptoms} onChange={(e) => setRegressionDetails(p => ({...p, postVaccineSymptoms: e.target.value}))} className="input-field" rows={3} placeholder="Describe any symptoms or changes" /></div>
              <div><label className="input-label">Timeline after vaccination</label>
                <input type="text" value={regressionDetails.timeline} onChange={(e) => setRegressionDetails(p => ({...p, timeline: e.target.value}))} className="input-field" placeholder="e.g., Within 24 hours, 1 week, 2 months" /></div>
            </>
          )}
        </div>

        {/* Current Status */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-900">Current Status</h2>
          <div><label className="input-label">Current Therapies</label>
            <input type="text" value={regressionDetails.currentTherapies} onChange={(e) => setRegressionDetails(p => ({...p, currentTherapies: e.target.value}))} className="input-field" placeholder="ABA, OT, Speech, etc." /></div>
          <div><label className="input-label">School/Education Status</label>
            <select value={regressionDetails.schoolStatus} onChange={(e) => setRegressionDetails(p => ({...p, schoolStatus: e.target.value}))} className="input-field">
              <option value="">Select...</option>
              <option value="Not yet school age">Not yet school age</option>
              <option value="Mainstream classroom">Mainstream classroom</option>
              <option value="Mainstream with support">Mainstream with IEP/support</option>
              <option value="Special education classroom">Special education classroom</option>
              <option value="Specialized school">Specialized school</option>
              <option value="Homeschool">Homeschool</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div><label className="input-label">Additional Observations</label>
            <textarea value={regressionDetails.additionalObservations} onChange={(e) => setRegressionDetails(p => ({...p, additionalObservations: e.target.value}))} className="input-field" rows={4} placeholder="Any other information about your child's condition, progress, or concerns" /></div>
        </div>

        <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center gap-2">
          {loading ? 'Saving...' : <>Continue to Document Upload <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  )
}

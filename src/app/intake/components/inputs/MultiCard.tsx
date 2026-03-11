'use client'

interface MultiCardProps {
  label: string
  selected: boolean
  onToggle: () => void
}

export default function MultiCard({ label, selected, onToggle }: MultiCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center gap-3 py-3.5 px-4 rounded-2xl border-2 text-left transition cursor-pointer ${
        selected
          ? 'border-alg-gold bg-yellow-50'
          : 'border-gray-200 bg-white'
      }`}
    >
      <div
        className={`w-[22px] h-[22px] rounded-lg border-2 flex items-center justify-center shrink-0 ${
          selected ? 'border-alg-gold bg-alg-gold' : 'border-gray-300'
        }`}
      >
        {selected && (
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-sm text-alg-navy">{label}</span>
    </button>
  )
}

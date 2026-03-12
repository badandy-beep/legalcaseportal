'use client'

interface OptionCardProps {
  label: string
  selected: boolean
  onSelect: () => void
}

export default function OptionCard({ label, selected, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center gap-3 py-3.5 px-4 rounded-2xl border-2 text-left transition cursor-pointer ${
        selected
          ? 'border-[#0a1628] bg-yellow-50'
          : 'border-gray-200 bg-white'
      }`}
    >
      <div
        className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center shrink-0 ${
          selected ? 'border-[#0a1628]' : 'border-gray-300'
        }`}
      >
        {selected && <div className="w-3 h-3 rounded-full bg-[#d4a843]" />}
      </div>
      <span className="text-sm text-[#111827]">{label}</span>
    </button>
  )
}

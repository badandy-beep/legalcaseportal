'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import QuestionScreen from '../components/QuestionScreen'

export default function Phase11Page() {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const [signedName, setSignedName] = useState('')
  const [loading, setLoading] = useState(false)

  const canSign = hasSignature || signedName.trim().length > 0

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.strokeStyle = '#0a1628'
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
      }
    }
  }, [])

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      }
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { x, y } = getPos(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { x, y } = getPos(e)
    ctx.lineTo(x, y)
    ctx.stroke()
    setHasSignature(true)
  }

  const stopDrawing = () => setIsDrawing(false)

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
  }

  async function handleSubmit() {
    if (!canSign || loading) return
    setLoading(true)

    try {
      const signatureData = canvasRef.current?.toDataURL()
      localStorage.setItem(
        'intake_phase11',
        JSON.stringify({
          signedName,
          signatureData: hasSignature ? signatureData : null,
          signedAt: new Date().toISOString(),
        })
      )

      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Clear all intake data
      for (let i = 1; i <= 11; i++) {
        localStorage.removeItem(`intake_phase${i}`)
      }

      router.push('/intake/complete')
    } catch (error) {
      console.error('Submit error:', error)
      setLoading(false)
    }
  }

  function handleBack() {
    router.push('/intake/phase-10')
  }

  const todayFormatted = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <QuestionScreen
      phase="11 of 11"
      phaseTitle="Final step."
      question="Sign with your finger or type your name."
      tipText="Either method is legally valid. Most people find typing faster on a phone."
      onContinue={handleSubmit}
      onBack={handleBack}
      showBack={true}
      continueLabel={loading ? 'Submitting...' : 'Submit My Case Evaluation 🔒'}
      continueStyle="w-full py-4 bg-gray-900 text-white font-black text-base rounded-2xl cursor-pointer disabled:opacity-50"
    >
      {/* Signature Canvas */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={600}
          height={150}
          className="w-full h-28 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 cursor-crosshair"
          style={{ touchAction: 'none' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        {!hasSignature && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-gray-300 text-base">Sign here</span>
          </div>
        )}
      </div>
      {hasSignature && (
        <button
          type="button"
          onClick={clearSignature}
          className="text-xs text-gray-400 underline mt-1 cursor-pointer"
        >
          Clear
        </button>
      )}

      {/* Divider */}
      <p className="text-xs text-gray-400 text-center my-3">
        — or type your name instead —
      </p>

      {/* Typed Name */}
      <input
        type="text"
        value={signedName}
        onChange={(e) => setSignedName(e.target.value)}
        placeholder="Your full legal name"
        className="w-full text-base p-4 border-2 rounded-2xl outline-none font-sans text-[#111827] placeholder:text-gray-400 focus:border-[#1E40AF] transition"
        style={{ fontSize: '16px' }}
      />

      {/* Date */}
      <p className="text-xs text-gray-500 mt-2 text-center">
        Signing date: {todayFormatted}
      </p>
    </QuestionScreen>
  )
}

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const CONFETTI_COLORS = [
  '#FF3B30', '#FF9500', '#FFCC00', '#34C759',
  '#007AFF', '#AF52DE', '#FF2D55', '#5AC8FA', '#FFD60A',
]

function ConfettiCanvas({ cardRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const rect = cardRef.current?.getBoundingClientRect() ?? {
      left: window.innerWidth * 0.2,
      right: window.innerWidth * 0.8,
      bottom: window.innerHeight * 0.65,
    }

    function makeParticle(originX, originY, angleCenter) {
      const angle = angleCenter + (Math.random() - 0.5) * Math.PI * 0.85
      const speed = 6 + Math.random() * 14
      return {
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        w: 7 + Math.random() * 9,
        h: 3 + Math.random() * 5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.22,
        opacity: 1,
      }
    }

    const particles = [
      ...Array.from({ length: 60 }, () => makeParticle(rect.left + 12, rect.bottom - 4, -Math.PI * 0.62)),
      ...Array.from({ length: 60 }, () => makeParticle(rect.right - 12, rect.bottom - 4, -Math.PI * 0.38)),
    ]

    let raf
    let tick = 0

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++
      let alive = false

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.42
        p.vx *= 0.992
        p.rotation += p.rotSpeed
        if (tick > 38) p.opacity -= 0.013
        if (p.opacity <= 0) continue
        alive = true

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      }

      if (alive) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10002 }}
    />
  )
}

const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())

export default function ContactModal({ onClose }) {
  const [email, setEmail]         = useState('')
  const [message, setMessage]     = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [status, setStatus]       = useState('idle') // idle | sending | filling | sent | error
  const backdropRef = useRef(null)
  const cardRef     = useRef(null)

  const emailError = emailTouched && email && !isValidEmail(email)
  const isSuccess  = status === 'filling' || status === 'sent'

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape' && !isSuccess) onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose, isSuccess])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    if (status !== 'filling') return
    const t1 = setTimeout(() => setStatus('sent'), 1600)
    const t2 = setTimeout(onClose, 3400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [status, onClose])

  const handleSubmit = async e => {
    e.preventDefault()
    setEmailTouched(true)
    if (!isValidEmail(email)) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xqeyvryg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, message }),
      })
      if (res.ok) setStatus('filling')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return createPortal(
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onClick={e => { if (!isSuccess && e.target === backdropRef.current) onClose() }}
    >
      {isSuccess && <ConfettiCanvas cardRef={cardRef} />}

      <div
        className={`modal-card${isSuccess ? ' modal-card--success' : ''}`}
        ref={cardRef}
        role="dialog"
        aria-modal="true"
      >
        {isSuccess ? (
          <>
            <div className="modal-fill-wave" />
            {status === 'sent' && (
              <div className="modal-sent">
                <span className="modal-sent-mark">✓</span>
                <p className="modal-sent-msg">Sent.</p>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

            <div className="modal-header">
              <h2 className="modal-title">Say hello.</h2>
            </div>

            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="modal-field" style={{ animation: 'fieldIn 0.38s cubic-bezier(0.22, 1, 0.36, 1) 0.32s both' }}>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailTouched(false) }}
                  onBlur={() => { if (email) setEmailTouched(true) }}
                  placeholder=" "
                  className={`modal-input${emailError ? ' modal-input--error' : ''}`}
                  autoComplete="email"
                />
                <label htmlFor="modal-email" className="modal-label">your email</label>
                <span className={`modal-line${emailError ? ' modal-line--error' : ''}`} />
                {emailError && <span className="modal-field-error">enter a valid email address</span>}
              </div>

              <div className="modal-field" style={{ animation: 'fieldIn 0.38s cubic-bezier(0.22, 1, 0.36, 1) 0.46s both' }}>
                <textarea
                  id="modal-message"
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder=" "
                  required
                  className="modal-input modal-textarea"
                  rows={4}
                />
                <label htmlFor="modal-message" className="modal-label">what's on your mind?</label>
                <span className="modal-line" />
              </div>

              {status === 'error' && (
                <p className="modal-error">Something went wrong — please try again.</p>
              )}

              <div className="modal-footer" style={{ animation: 'fieldIn 0.38s cubic-bezier(0.22, 1, 0.36, 1) 0.58s both' }}>
                <button
                  type="submit"
                  className="modal-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}

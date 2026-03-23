import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())

export default function ContactModal({ onClose }) {
  const [email, setEmail]         = useState('')
  const [message, setMessage]     = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [status, setStatus]       = useState('idle') // idle | sending | success | error
  const backdropRef = useRef(null)

  const emailError = emailTouched && email && !isValidEmail(email)

  // ESC to close
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

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
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setTimeout(onClose, 2800)
    } catch {
      setStatus('error')
    }
  }

  return createPortal(
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onClick={e => { if (e.target === backdropRef.current) onClose() }}
    >
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div className="modal-success">
            <span className="modal-success-mark">✓</span>
            <p className="modal-success-msg">Got it —<br />I'll be in touch.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Say hello.</h2>
            </div>

            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="modal-field">
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

              <div className="modal-field">
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

              <div className="modal-footer">
                <button
                  type="submit"
                  className="modal-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send →'}
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

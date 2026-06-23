import { useState, useEffect, useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ContactModal from '../components/ContactModal'
import { useNavTo } from '../context/nav'

const FIGMA_URL = 'https://www.figma.com/deck/mmRYZeo7FhgBTpBKA2i2vL/Grace-s-Portfolio?node-id=10-112&t=Ga3wyt3ymAGvnPY6-1'

const VALID_HASHES = new Set([
  'e45af5831daee56711f91701283682cebf54c9e773c35b658026425b8a024523', // hired
  '7a758800a3b077aa45f60908c081831d51ef4368e980094ffbaa092a2e956bae', // yaycake
])
const ERROR_RESET_MS = 3000
const COUNTDOWN_START = 5

async function hashPassword(value) {
  const data = new TextEncoder().encode(value)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

const ReturnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 5.5L6.5 8L9 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Portfolio() {
  const [password, setPassword] = useState('')
  const [phase, setPhase] = useState('idle') // idle | error | success
  const [countdown, setCountdown] = useState(COUNTDOWN_START)
  const [contactOpen, setContactOpen] = useState(false)
  const navTo = useNavTo()
  const timer = useRef(null)

  useEffect(() => {
    clearTimeout(timer.current)

    if (phase === 'error') {
      timer.current = setTimeout(() => {
        setPhase('idle')
        setPassword('')
      }, ERROR_RESET_MS)
    }

    if (phase === 'success') {
      setCountdown(COUNTDOWN_START)
      let count = COUNTDOWN_START
      const id = setInterval(() => {
        count -= 1
        setCountdown(count)
        if (count <= 0) {
          clearInterval(id)
          window.open(FIGMA_URL, '_blank')
          setPhase('idle')
          setPassword('')
          setCountdown(COUNTDOWN_START)
        }
      }, 1000)
      return () => clearInterval(id)
    }
  }, [phase])

  async function handleSubmit(e) {
    e.preventDefault()
    const hash = await hashPassword(password)
    if (VALID_HASHES.has(hash)) {
      setPhase('success')
    } else {
      setPhase('error')
    }
  }

  return (
    <div className="page">
      <SiteHeader onContact={() => setContactOpen(true)} />

      <div className="portfolio-gate">
        <h2 className="portfolio-gate-title">Product Design Portfolio</h2>

        {phase === 'error' && (
          <>
            <div className="portfolio-gate-error-icon" aria-label="Wrong password">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M14 6L6 14M6 6l8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="portfolio-gate-error-msg">Not quite right; try again?</p>
          </>
        )}

        {phase === 'success' && (
          <>
            <div className="portfolio-gate-success-icon" aria-label="Correct password">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 10.5L8.5 14L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="portfolio-gate-error-msg">Nice— let's go!</p>
            <p className="portfolio-gate-redirect-msg">
              Opening the Figma presentation in a new tab in{' '}
              <span className="portfolio-gate-countdown">{countdown}</span>
            </p>
          </>
        )}

        {phase === 'idle' && (
          <>
            <form onSubmit={handleSubmit} className="portfolio-gate-form">
              <input
                className="portfolio-gate-input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
              />
            </form>
            <p className="portfolio-gate-hint">
              No password?{' '}
              <button className="portfolio-gate-contact" onClick={() => setContactOpen(true)}>
                Contact Me.
              </button>
            </p>
            <button className="portfolio-gate-back" onClick={() => navTo('/')}>
              <ReturnIcon />
              Return to Home
            </button>
          </>
        )}
      </div>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      <SiteFooter />
    </div>
  )
}

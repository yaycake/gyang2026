import { useState, useEffect, useRef, useCallback } from 'react'
import SiteHeader from '../components/SiteHeader'
import ContactModal from '../components/ContactModal'
import { useNavTo } from '../context/nav'

const CORRECT_PASSWORD = 'yaycake'
const ERROR_RESET_MS = 3000
const SUCCESS_DELAY_MS = 1500

const slides = [
  {
    id: 0,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 1,
    title: 'Consectetur adipiscing elit',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.',
  },
  {
    id: 2,
    title: 'Sed do eiusmod tempor',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
  },
  {
    id: 3,
    title: 'Incididunt ut labore',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.',
  },
  {
    id: 4,
    title: 'Dolore magna aliqua enim',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
  },
  {
    id: 5,
    title: 'Quis nostrud exercitation',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.',
  },
  {
    id: 6,
    title: 'Ullamco laboris nisi',
    description: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
  {
    id: 7,
    title: 'Aliquip ex ea commodo',
    description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae.',
  },
  {
    id: 8,
    title: 'Reprehenderit in voluptate',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.',
  },
  {
    id: 9,
    title: 'Velit esse cillum dolore',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum.',
  },
  {
    id: 10,
    title: 'Fugiat nulla pariatur sint',
    description: 'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.',
  },
]

const ReturnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 5.5L6.5 8L9 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Carousel() {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const slide = el.querySelector('.portfolio-slide')
    if (!slide) return
    const itemWidth = slide.offsetWidth + 16
    const index = Math.round(el.scrollLeft / itemWidth)
    setActiveSlide(Math.min(Math.max(index, 0), slides.length - 1))
  }, [])

  return (
    <div className="portfolio-carousel-wrap">
      <div className="portfolio-carousel" ref={scrollRef} onScroll={handleScroll}>
        {slides.map((slide) => (
          <div key={slide.id} className="portfolio-slide">
            <div className="portfolio-slide-canvas" />
            <p className="portfolio-slide-title">{slide.title}</p>
            <p className="portfolio-slide-desc">{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="portfolio-progress">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`portfolio-progress-seg${i === activeSlide ? ' active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [password, setPassword] = useState('')
  const [phase, setPhase] = useState('idle') // idle | error | success | unlocked
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
      timer.current = setTimeout(() => setPhase('unlocked'), SUCCESS_DELAY_MS)
    }
    return () => clearTimeout(timer.current)
  }, [phase])

  function handleSubmit(e) {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setPhase('success')
    } else {
      setPhase('error')
    }
  }

  const gateTitle = phase === 'unlocked'
    ? 'View Product Design Case Studies'
    : 'Product Design Case Study'

  return (
    <div className="page">
      <SiteHeader onContact={() => setContactOpen(true)} />

      {phase === 'unlocked' ? (
        <div className="portfolio-unlocked">
          <h2 className="portfolio-gate-title">{gateTitle}</h2>
          <Carousel />
        </div>
      ) : (
        <div className="portfolio-gate">
          <h2 className="portfolio-gate-title">{gateTitle}</h2>

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
      )}

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}

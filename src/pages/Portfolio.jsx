import { useState, useEffect, useRef, useCallback } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ContactModal from '../components/ContactModal'
import { useNavTo } from '../context/nav'

const CORRECT_PASSWORD = 'yaycake'
const ERROR_RESET_MS = 3000
const SUCCESS_DELAY_MS = 1500

const slides = [
  {
    id: 0,
    title: 'Founding Designership',
    description: 'Founding design means making consequential calls before there\'s data to back them up — and owning the outcome. I\'ve done it twice: most recently as the third hire at Patlytics, growing the product through three funding rounds, building a platform now used by 40% of America\'s top law firms. The best part of this work is the proximity to everything: strategy, engineering, customers, and craft.',
    image: '/assets/designership.png',
    imageFit: 'cover',
    thumbnail: '/assets/designership.png',
  },
  {
    id: 1,
    title: 'Skills',
    description: 'I move fast with Figma Make and Claude to prototype, then land in hi-fidelity Figma. For personal projects, I vibe-code with Cursor, pulling from Claude, Gemini, and Codex. Before designing full-time, I wrote production front-end code for real clients — WeChat Mini Programs, web apps, marketing sites — which is what lets me collaborate with engineering at the implementation level, not just the handoff.',
    canvas: 'skills',
    thumbnail: '/assets/js.svg',
  },
  {
    id: 2,
    title: 'B2B Spaces and Enterprise Pain Points',
    description: 'I\'m drawn to dense, unfamiliar spaces — where learning the workflow is half the design problem. At Patlytics, that meant studying IP law from scratch; at Viewabo, mapping customer service workflows that varied dramatically by vertical. What keeps me engaged in B2B is that pain points are rarely siloed — solve them well and the impact compounds across an entire organization. At Patlytics: 40% of America\'s top law firms, 80% reduction in IP counseling time. At Viewabo: measurable gains in CSAT and field dispatch efficiency.',
    canvas: 'b2b',
    thumbnail: '/assets/slide 3 patlyics.png',
  },
  {
    id: 3,
    title: 'Finding Patlytics',
    description: 'As third hire and solo designer for Patlytics, I thrived in building from 0 to 1 and loved the challenge of innovating with AI in a space plagued with arcane, fragmented workflows hampered by real human constraints. I designed their first flagship module for their AI powered patent platform, and have seen the product evolve through our Series B raise of $40M.',
    canvas: 'patlytics',
    thumbnail: '/assets/slide 4-1.png',
  },
  {
    id: 4,
    title: 'Break-Neck Speed, Innovation from 0',
    description: 'Learning about patent and IP workflow from 0 was a challenge, but I used my naiveté as an advantage to innovate. I learned, tested prompts, and reviewed prototypes with in-house counsel, practicing patent attorneys, IP advisors, and potential clients. I also surfaced constraints with our CTO. Experiments turned into a real product.',
    image: '/assets/slide_5.svg',
    canvasPadding: '40px',
    thumbnail: '/assets/slide_5.svg',
  },
  {
    id: 5,
    title: 'Key Design Decision',
    description: 'Patent strategy used to mean waiting — for research to trickle in, for context to accumulate, for the puzzle to slowly assemble across tools, conversations, and documents. The Detection Report collapses all of that into a single living workbench. Profiles on target companies and products are immediately accessible and intuitively organized; users can explore strategy, surface insights, and when a product shows a promising read, lock in and drill down with a detailed claim chart.',
    image: '/assets/slide 6.svg',
    canvasPadding: '40px',
    thumbnail: '/assets/slide 6.svg',
  },
  {
    id: 6,
    title: 'Feedback & Iterations',
    description: 'Feedback from paying clients, power users, and different ICPs validated a core hypothesis: the magic moment every persona looked for was the ability to stress test strategy at scale — from 5,000 patents, down to specific product features, down to a handful showing a clear infringement read. As the models matured, we could reliably craft and deliver it.',
    image: '/assets/slide 7.svg',
    canvasPadding: '40px',
    thumbnail: '/assets/slide 7.svg',
  },
  {
    id: 7,
    title: 'Growth & Success',
    description: 'Three years, three funding rounds, and a platform now embedded in 40% of America\'s top law firms. What started as a single module has expanded beyond legal into software, automotive, digital solutions, and pharmaceuticals — and earned a spot on Business Insider\'s top 30 unicorn candidates.',
    canvas: 'growth',
    canvasPadding: '40px',
    thumbnail: '/assets/logo-badges-patlytics-color.svg',
  },
  {
    id: 8,
    title: 'Examples',
    description: 'Designing enterprise data views that stay readable and functional against a collapsible AI chat panel is a constraint most design tools don\'t account for. The detection report (1) pairs a product catalog with infringement mapping across a dense, layered surface; the claim chart (2) drills into granular evidence. Both have to hold at full width and compressed — without losing hierarchy or usability, and considering the agentic chat panel docked on the right.',
    canvas: 'examples',
    canvasPadding: '40px',
    thumbnail: '/assets/slide_9-1.png',
  },
  {
    id: 9,
    title: 'Mobile Examples',
    description: '3. Technicians needed a tool like Viewabo to consult internal support while in the field. 4. ORM moved to meet patients where they were with a WeChat Mini Program. 5. Sticker Machine routed the Giphy API through the Firewall so WeChat users could find and save stickers; organically, increased to 10,000 users before censorship.',
    canvas: 'mobile',
    thumbnail: '/assets/slide_10-1.png',
  },
  {
    id: 10,
    title: 'Personal Project — Landmesh',
    description: 'Landmesh was hatched during Contra\'s Figma Makethon 2026. I designed and vibe-coded a mobile game for users to sculpt landscapes with a particle engine; users can add trees, turn land to sea, add clouds, stars, and butterflies. My favorite part? Customizing the ambient and sound effects. The project is still live, and uses WebGL, Web Audio API, and React through Figma Make.',
    canvas: 'landmesh',
    canvasPadding: '40px',
    thumbnail: '/assets/landmesh-1.png',
  },
  {
    id: 11,
    title: 'Flock (WIP)',
    description: 'Flock is a mobile scavenger hunt where teams accomplish goals to build a shared photo map — goals are geofenced to real locations, and can be designed as progressive multi-part challenges. On deck: the ability to freeze or stun opposing teams. Built in collaboration with a software engineer; we\'re using React, NestJS, Cloudflare Durable Objects.',
    canvas: 'flock',
    canvasPadding: '40px',
    thumbnail: '/assets/flock1.png',
  },
  {
    id: 12,
    title: 'Thanks!',
    description: 'Feel free to contact me if you have any questions.',
    image: '/assets/me.png',
    imageFit: 'contain',
    imageSize: '200px',
    canvasCenter: true,
    canvasPadding: '40px',
    thumbnail: '/assets/me.png',
  },
]

const ReturnIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 5.5L6.5 8L9 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const skillIcons = [
  {
    src: '/assets/claude.svg', alt: 'Claude',
    title: 'Claude Cowork, Code',
    paras: [
      {
        text: 'I use Claude Cowork for exploration, prototype, stress testing. Also for checking Figma for consistency and typos. I move into Code for focused technical work when the scope is well defined',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/openai.svg', alt: 'OpenAI',
    title: 'OpenAI / ChatGPT / Codex',
    paras: [
      {
        text: 'Worked with ChatGPT via Humanloop to craft and generate prompts for the Patlytics platform. Today, I use an API for my agentic coding assistant.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/cursor.svg', alt: 'Cursor',
    title: 'Cursor',
    paras: [
      {
        text: 'My primary IDE for writing and editing code',
        bullets: ['Tab completion for boilerplate and repetitive patterns', 'Inline edits with natural language', 'Multi-file context for larger refactors'],
      },
    ],
  },
  {
    src: '/assets/gemini.svg', alt: 'Gemini',
    title: 'Google Gemini',
    paras: [
      {
        text: 'My default model for agentic code bot. Gemini is way better at triaging Openclaw than Claude is-- for some reason, Claude often refuses to acknowledge the existence of Openclaw.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/hermes.svg', alt: 'Hermes',
    title: 'Hermes Agent',
    paras: [
      {
        text: 'Replaced my Openclaw setup, "Alphie" helps me draft and publish content, do research, and push code. Part of the fun is learning how to interface with AI through a single Telegram chat, and become a better communicator because of it.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/figma.svg', alt: 'Figma',
    title: 'Figma',
    paras: [
      {
        text: 'Figma Make is an amazing tool for non-technical vibe coders out there. I still use Figma for a lot of content design; it\'s a reliable tool for improvising variants on scope which requires more drag and drop and less self-reflection for communicating with AI.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/js.svg', alt: 'JavaScript',
    title: 'JavaScript',
    paras: [
      {
        text: 'My core language for frontend and full-stack development',
        bullets: ['React and Next.js applications', 'Interactive UI components and animations', 'Node.js scripts and build tooling'],
      },
    ],
  },
  {
    src: '/assets/html.svg', alt: 'HTML',
    title: 'HTML',
    paras: [
      {
        text: 'Semantic markup for accessible, well-structured pages',
        bullets: ['Accessibility-first component structure', 'SEO-friendly document semantics', 'Custom elements and templates'],
      },
    ],
  },
  {
    src: '/assets/css.svg', alt: 'CSS',
    title: 'CSS',
    paras: [
      {
        text: 'Styling and layout without relying on utility frameworks',
        bullets: ['CSS custom properties and design tokens', 'Grid and flexbox for responsive layouts', 'Animations, transitions, and micro-interactions'],
      },
    ],
  },
]

const growthQuotes = [
  {
    quote: '"On average, the AI tools reduced my research time by one to two days," Wang said. This efficiency boost not only improved her ability to familiarize herself with new technologies and products but also helped RJLF deliver faster, more accurate results to clients.',
    caseStudyTitle: '"How RJLF Accelerated Case Reviews with Patlytics"',
    caseStudyUrl: 'https://cdn.prod.website-files.com/6799236636ce53b60c8d8ba8/6890f10b3d9bbca6632a7174_Patlytics%20Customer%20Case%20Study%20-%20Reichman%20Jorgensen%20Lehman%20Feldberg%20LLP.pdf',
  },
  {
    quote: 'By leveraging Patlytics, this practice group head achieved an 80% reduction in project time, allowing attorneys to significantly increase their profitability for fixed-fee patent services.',
    caseStudyTitle: '"How an Am Law 100 Practice Group Head Reduced IP Counseling Time 80% with Patlytics"',
    caseStudyUrl: 'https://cdn.prod.website-files.com/6799236636ce53b60c8d8ba8/6890f10b2156eb06c9f52514_Patlytics%20Customer%20Case%20Study%20-%20Am%20Law%20100%20Practice%20Group%20Head.pdf',
  },
  {
    quote: 'The company\'s earliest product gave patent professionals a dramatically faster, more accurate way to analyze infringement: mapping claim charts against accused products, surfacing relevant prior art, and producing the kind of structured output that used to take days. That initial wedge was deliberate. Infringement and prior-art work are both high-stakes and highly labor-intensive, which meant that early customers across top-tier law firms and major corporate IP teams felt the ROI immediately and deeply.',
    caseStudyTitle: 'How Patlytics is automating the hardest workflows in intellectual property',
    caseStudyUrl: 'https://www.signalfire.com/blog/patlytics-investor',
  },
]

function GrowthCanvas() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    if (growthQuotes.length <= 1) return
    const id = setInterval(() => {
      setQuoteIndex(i => (i + 1) % growthQuotes.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const q = growthQuotes[quoteIndex]

  return (
    <div className="growth-bento">
      <div className="growth-cell">
        <p className="growth-cell-heading">Detection Report is #1 Litigation module, leading on ~60% on most days.</p>
        <p className="growth-cell-body">Patlytics is also generating 500–900+ claim charts a day.</p>
      </div>
      <div className="growth-cell">
        <div key={quoteIndex} className="growth-quote">
          <p className="growth-quote-text">{q.quote}</p>
          <a
            href={q.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            className="growth-quote-link"
          >
            {q.caseStudyTitle}
          </a>
        </div>
      </div>
    </div>
  )
}

function FlockCanvas() {
  return (
    <div className="flock-canvas">
      <img src="/assets/flock1.png" alt="Flock 1" className="flock-img" />
      <img src="/assets/flock2.png" alt="Flock 2" className="flock-img" />
      <img src="/assets/flock3.png" alt="Flock 3" className="flock-img" />
    </div>
  )
}

function LandmeshCanvas() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="landmesh-canvas">
      <div className="landmesh-stack">
        <img src="/assets/landmesh-1.png" alt="Landmesh 1" className="landmesh-stack-img" />
        <img src="/assets/landmesh-2.png" alt="Landmesh 2" className="landmesh-stack-img" />
      </div>
      <video
        ref={videoRef}
        src="/assets/landmesh-vid.mp4"
        className="landmesh-main-img"
        loop
        muted
        playsInline
      />
    </div>
  )
}

function MobileCanvas() {
  return (
    <div className="mobile-canvas">
      <img src="/assets/slide_10-1.png" alt="Viewabo mobile" className="mobile-img" />
      <img src="/assets/slide_10-2.png" alt="ORM WeChat" className="mobile-img" />
      <img src="/assets/slide_10-3.png" alt="Sticker Machine" className="mobile-img" />
    </div>
  )
}

function ExamplesCanvas() {
  return (
    <div className="examples-canvas">
      <img src="/assets/slide_9-1.png" alt="Detection Report" className="examples-img" />
      <img src="/assets/slide_9-2.png" alt="Claim Chart" className="examples-img" />
    </div>
  )
}

function PatlyticsCavas() {
  return (
    <div className="patlytics-canvas">
      <img src="/assets/slide 4-1.png" alt="Patlytics product" className="patlytics-img" />
      <a href="https://cdn.prod.website-files.com/6799236636ce53b60c8d8ba8/6890f10b2156eb06c9f52514_Patlytics%20Customer%20Case%20Study%20-%20Am%20Law%20100%20Practice%20Group%20Head.pdf" target="_blank" rel="noreferrer" style={{ cursor: 'pointer', display: 'contents' }}>
        <img src="/assets/slide 4-2.png" alt="Patlytics case study" className="patlytics-img" style={{ cursor: 'pointer' }} />
      </a>
    </div>
  )
}

function B2BCanvas() {
  return (
    <div className="b2b-canvas">
      <img src="/assets/slide 3 patlyics.png" alt="Patlytics" className="b2b-img" />
      <img src="/assets/slide 3 viewabo.png" alt="Viewabo" className="b2b-img" />
    </div>
  )
}

function SkillsCanvas() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const GROUP = [6, 7, 8]
  const isGroupHover = hoveredIdx !== null && GROUP.includes(hoveredIdx)

  const getOpacity = (i) => {
    if (hoveredIdx === null) return 1
    if (isGroupHover) return GROUP.includes(i) ? 1 : 0.2
    return i === hoveredIdx ? 1 : 0.2
  }

  return (
    <div className="skills-canvas">
      <div className="skills-grid">
        {skillIcons.map((icon, i) => (
          <div
            key={icon.alt}
            className="skills-icon-wrap"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{ opacity: getOpacity(i) }}
          >
            <img src={icon.src} alt={icon.alt} className="skills-icon-img" />
            {hoveredIdx === i && !isGroupHover && (
              <div className="skills-tooltip" style={
                Math.floor(i / 3) === 0 ? { top: 0, transform: 'none' } :
                Math.floor(i / 3) === 2 ? { bottom: 0, top: 'auto', transform: 'none' } :
                {}
              }>
                <p className="skills-tooltip-title">{icon.title}</p>
                {icon.paras.map((para, p) => (
                  <div key={p}>
                    <p className="skills-tooltip-para">{para.text}</p>
                    {para.bullets.length > 0 && (
                      <ul className="skills-tooltip-bullets">
                        {para.bullets.map(b => <li key={b}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {isGroupHover && (
        <div className="skills-group-tooltip">
          <p className="skills-tooltip-title">Classic Hits: JS, HTML, CSS</p>
          <p className="skills-tooltip-para">Understanding the fundamentals of development give me a solid foundation to collaborate with engineering. Designing and developing Mini Programs and websites also empower me with an intuition to debug vibed code.</p>
        </div>
      )}
    </div>
  )
}

function Carousel() {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [opacities, setOpacities] = useState(() => slides.map((_, i) => i === 0 ? 1 : 0.3))

  useEffect(() => {
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20)
    const observer = new IntersectionObserver((entries) => {
      setOpacities(prev => {
        const next = [...prev]
        entries.forEach(entry => {
          const idx = Number(entry.target.dataset.idx)
          next[idx] = 0.3 + entry.intersectionRatio * 0.7
        })
        return next
      })
    }, { root: scrollRef.current, threshold: thresholds })

    const nodes = scrollRef.current?.querySelectorAll('.portfolio-slide')
    nodes?.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const slide = el.querySelector('.portfolio-slide')
    if (!slide) return
    const itemWidth = slide.offsetWidth + 32
    const index = Math.round(el.scrollLeft / itemWidth)
    setActiveSlide(Math.min(Math.max(index, 0), slides.length - 1))
  }, [])

  return (
    <div className="portfolio-carousel-wrap">
      <div className="portfolio-carousel" ref={scrollRef} onScroll={handleScroll}>
        {slides.map((slide, i) => (
          <div key={slide.id} className="portfolio-slide" data-idx={i} style={{ opacity: opacities[i], transition: 'opacity 0.15s ease' }}>
            <div className="portfolio-slide-text">
              <p className="portfolio-slide-title">{slide.title}</p>
              <p className="portfolio-slide-desc">{slide.description}</p>
            </div>
            <div className="portfolio-slide-canvas" style={{
              ...(slide.canvasPadding ? { padding: slide.canvasPadding } : {}),
              ...(slide.canvasCenter ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}),
            }}>
              {slide.canvas === 'flock' && <FlockCanvas />}
              {slide.canvas === 'landmesh' && <LandmeshCanvas />}
              {slide.canvas === 'mobile' && <MobileCanvas />}
              {slide.canvas === 'examples' && <ExamplesCanvas />}
              {slide.canvas === 'growth' && <GrowthCanvas />}
              {slide.canvas === 'patlytics' && <PatlyticsCavas />}
              {slide.canvas === 'b2b' && <B2BCanvas />}
              {slide.canvas === 'skills' && <SkillsCanvas />}
              {slide.image && (
                <img
                  src={slide.image}
                  alt=""
                  className="portfolio-slide-img"
                  style={{
                    ...(slide.imageFit ? { objectFit: slide.imageFit } : {}),
                    ...(slide.imageSize ? { width: slide.imageSize, height: slide.imageSize } : {}),
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-progress-row">
        <button
          className="portfolio-nav-btn"
          onClick={() => {
            const el = scrollRef.current?.querySelectorAll('.portfolio-slide')[0]
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
          }}
        >‹</button>
        <div className="portfolio-progress">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`portfolio-progress-seg${i === activeSlide ? ' active' : ''}`}
              onClick={() => {
                const el = scrollRef.current?.querySelectorAll('.portfolio-slide')[i]
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
              }}
            >
              <div className="portfolio-progress-tooltip">
                <img src={slide.thumbnail} alt={slide.title} className="portfolio-progress-tooltip-thumb" />
                <span className="portfolio-progress-tooltip-label">{i + 1}. {slide.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          className="portfolio-nav-btn"
          onClick={() => {
            const el = scrollRef.current?.querySelectorAll('.portfolio-slide')[slides.length - 1]
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
          }}
        >›</button>
      </div>
      <p className="portfolio-timestamp">last updated: Thursday, May 7</p>
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
    ? 'Portfolio Brief & Case Study'
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
      <SiteFooter />
    </div>
  )
}

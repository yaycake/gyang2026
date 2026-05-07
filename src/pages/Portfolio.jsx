import { useState, useEffect, useRef, useCallback } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ContactModal from '../components/ContactModal'
import { useNavTo } from '../context/nav'

const VALID_HASHES = new Set([
  'e45af5831daee56711f91701283682cebf54c9e773c35b658026425b8a024523', // hired
  '7a758800a3b077aa45f60908c081831d51ef4368e980094ffbaa092a2e956bae', // yaycake
])
const ERROR_RESET_MS = 3000
const SUCCESS_DELAY_MS = 1500

async function hashPassword(value) {
  const data = new TextEncoder().encode(value)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

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
    thumbnail: '/assets/js.png',
  },
  {
    id: 2,
    title: 'B2B Spaces and Enterprise Pain Points',
    description: 'I\'m drawn to dense, unfamiliar spaces — where learning the workflow is half the design problem. At Patlytics, that meant studying IP law from scratch; At Viewabo: measurable gains in CSAT and field dispatch efficiency.',
    canvas: 'b2b',
    canvasPadding: '40px',
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
    description: 'Patent strategy used to mean waiting for research, for context to accumulate, for the puzzle to slowly assemble across tools, conversations, and documents. Detection Report collapses that into a single living workbench. Profiles on target companies and products are immediately accessible and intuitively organized; users can explore strategy, surface insights, and when a product shows a promising read, drill down with a detailed claim chart.',
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
    description: 'Designing enterprise data views that stay legible and functional with a collapsible AI chat panel is a ubiquitous challenge. The detection report (1) pairs a product catalog with infringement mapping across a dense, layered surface; the claim chart (2) drills into granular evidence. ',
    canvas: 'examples',
    canvasPadding: '40px',
    thumbnail: '/assets/slide_9-1.png',
  },
  {
    id: 9,
    title: 'Mobile Examples',
    description: 'Viewabo for mobile agents in the field (3). ORM WeChat Mini Program front end design (4). Sticker Machine, one of my first projects out of bootcamp. We routed the Giphy API through the Great Firewall so WeChat users could find and save stickers-- before this, you\'d only find new stickers when friends shared them. Organically increased to 10,000 users before it censored (5)',
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
    src: '/assets/claude.png', alt: 'Claude',
    title: 'Claude Cowork, Code',
    paras: [
      {
        text: 'I use Claude Cowork for exploration, prototype, stress testing. Also for checking Figma for consistency and typos. I move into Code for focused technical work when the scope is well defined',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/openai.png', alt: 'OpenAI',
    title: 'OpenAI / ChatGPT / Codex',
    paras: [
      {
        text: 'Worked with ChatGPT via Humanloop to craft and generate prompts for the Patlytics platform. Today, I use an API for my agentic coding assistant.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/cursor.png', alt: 'Cursor',
    title: 'Cursor',
    paras: [
      {
        text: 'My primary IDE for writing and editing code',
        bullets: ['Tab completion for boilerplate and repetitive patterns', 'Inline edits with natural language', 'Multi-file context for larger refactors'],
      },
    ],
  },
  {
    src: '/assets/gemini.png', alt: 'Gemini',
    title: 'Google Gemini',
    paras: [
      {
        text: 'My default model for agentic code bot. Gemini is way better at triaging Openclaw than Claude is-- for some reason, Claude often refuses to acknowledge the existence of Openclaw.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/hermes.png', alt: 'Hermes',
    title: 'Hermes Agent',
    paras: [
      {
        text: 'Replaced my Openclaw setup, "Alphie" helps me draft and publish content, do research, and push code. Part of the fun is learning how to interface with AI through a single Telegram chat, and become a better communicator because of it.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/figma.png', alt: 'Figma',
    title: 'Figma',
    paras: [
      {
        text: 'Figma Make is an amazing tool for non-technical vibe coders out there. I still use Figma for a lot of content design; it\'s a reliable tool for improvising variants on scope which requires more drag and drop and less self-reflection for communicating with AI.',
        bullets: [],
      },
    ],
  },
  {
    src: '/assets/js.png', alt: 'JavaScript',
    title: 'JavaScript',
    paras: [
      {
        text: 'My core language for frontend and full-stack development',
        bullets: ['React and Next.js applications', 'Interactive UI components and animations', 'Node.js scripts and build tooling'],
      },
    ],
  },
  {
    src: '/assets/html.png', alt: 'HTML',
    title: 'HTML',
    paras: [
      {
        text: 'Semantic markup for accessible, well-structured pages',
        bullets: ['Accessibility-first component structure', 'SEO-friendly document semantics', 'Custom elements and templates'],
      },
    ],
  },
  {
    src: '/assets/css.png', alt: 'CSS',
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
    quote: 'Detection Report is #1 Litigation module, leading on ~60% on most days. Patlytics is also generating 500–900+ claim charts a day.',
  },
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
    quote: 'The company\'s earliest product gave patent professionals a dramatically faster, more accurate way to analyze infringement: mapping claim charts against accused products, surfacing relevant prior art, and producing the kind of structured output that used to take days… early customers across top-tier law firms and major corporate IP teams felt the ROI immediately and deeply.',
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
    <div className="growth-cell" style={{ width: '100%', height: '100%', borderRadius: '12px' }}>
      <div key={quoteIndex} className="growth-quote">
        <p className="growth-quote-text">{q.quote}</p>
        {q.caseStudyUrl && (
          <a
            href={q.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            className="growth-quote-link"
          >
            {q.caseStudyTitle}
          </a>
        )}
      </div>
    </div>
  )
}

function FlockCanvas({ onExpand }) {
  return (
    <div className="flock-canvas">
      <img src="/assets/flock1.png" alt="Flock 1" className="flock-img expandable" onClick={() => onExpand('/assets/flock1.png')} />
      <img src="/assets/flock2.png" alt="Flock 2" className="flock-img expandable" onClick={() => onExpand('/assets/flock2.png')} />
      <img src="/assets/flock3.png" alt="Flock 3" className="flock-img expandable" onClick={() => onExpand('/assets/flock3.png')} />
    </div>
  )
}

function LandmeshCanvas({ onExpand }) {
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
        <img src="/assets/landmesh-1.png" alt="Landmesh 1" className="landmesh-stack-img expandable" onClick={() => onExpand('/assets/landmesh-1.png')} />
        <img src="/assets/landmesh-2.png" alt="Landmesh 2" className="landmesh-stack-img expandable" onClick={() => onExpand('/assets/landmesh-2.png')} />
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

function MobileCanvas({ onExpand }) {
  return (
    <div className="mobile-canvas">
      <img src="/assets/slide_10-1.png" alt="Viewabo mobile" className="mobile-img expandable" onClick={() => onExpand('/assets/slide_10-1.png')} />
      <img src="/assets/slide_10-2.png" alt="ORM WeChat" className="mobile-img expandable" onClick={() => onExpand('/assets/slide_10-2.png')} />
      <img src="/assets/slide_10-3.png" alt="Sticker Machine" className="mobile-img expandable" onClick={() => onExpand('/assets/slide_10-3.png')} />
    </div>
  )
}

function ExamplesCanvas({ onExpand }) {
  return (
    <div className="examples-canvas">
      <img src="/assets/slide_9-1.png" alt="Detection Report" className="examples-img expandable" onClick={() => onExpand('/assets/slide_9-1.png')} />
      <img src="/assets/slide_9-2.png" alt="Claim Chart" className="examples-img expandable" onClick={() => onExpand('/assets/slide_9-2.png')} />
    </div>
  )
}

function PatlyticsCavas() {
  return (
    <div className="patlytics-canvas">
      <a href="https://cdn.prod.website-files.com/6799236636ce53b60c8d8ba8/6890f10b2156eb06c9f52514_Patlytics%20Customer%20Case%20Study%20-%20Am%20Law%20100%20Practice%20Group%20Head.pdf" target="_blank" rel="noreferrer" style={{ cursor: 'pointer', display: 'contents' }}>
        <img src="/assets/slide 4-2.png" alt="Patlytics case study" className="patlytics-img" />
      </a>
    </div>
  )
}

function B2BCanvas({ onExpand }) {
  return (
    <div className="b2b-canvas">
      <img src="/assets/slide 3 patlyics.png" alt="Patlytics" className="b2b-img expandable" onClick={() => onExpand('/assets/slide 3 patlyics.png')} />
      <img src="/assets/slide 3 viewabo.png" alt="Viewabo" className="b2b-img b2b-img--desktop expandable" onClick={() => onExpand('/assets/slide 3 viewabo.png')} />
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

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={e => { e.stopPropagation(); onClose() }} aria-label="Close">✕</button>
      <img src={src} alt="" className="lightbox-img" onClick={e => e.stopPropagation()} />
    </div>
  )
}

function Carousel() {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [opacities, setOpacities] = useState(() => slides.map((_, i) => i === 0 ? 1 : 0.3))
  const [lightboxSrc, setLightboxSrc] = useState(null)

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

  const scrollToSlide = useCallback((index) => {
    const clamped = Math.min(Math.max(index, 0), slides.length - 1)
    const el = scrollRef.current?.querySelectorAll('.portfolio-slide')[clamped]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
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
            <div className={`portfolio-slide-canvas${slide.canvasPadding ? ' portfolio-slide-canvas--padded' : ''}`} style={{
              ...(slide.canvasPadding ? { padding: slide.canvasPadding } : {}),
              ...(slide.canvasCenter ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}),
            }}>
              {slide.canvas === 'flock' && <FlockCanvas onExpand={setLightboxSrc} />}
              {slide.canvas === 'landmesh' && <LandmeshCanvas onExpand={setLightboxSrc} />}
              {slide.canvas === 'mobile' && <MobileCanvas onExpand={setLightboxSrc} />}
              {slide.canvas === 'examples' && <ExamplesCanvas onExpand={setLightboxSrc} />}
              {slide.canvas === 'growth' && <GrowthCanvas />}
              {slide.canvas === 'patlytics' && <PatlyticsCavas />}
              {slide.canvas === 'b2b' && <B2BCanvas onExpand={setLightboxSrc} />}
              {slide.canvas === 'skills' && <SkillsCanvas />}
              {slide.image && (
                <img
                  src={slide.image}
                  alt=""
                  className={`portfolio-slide-img${[4, 5, 6].includes(slide.id) ? ' expandable' : ''}`}
                  onClick={[4, 5, 6].includes(slide.id) ? () => setLightboxSrc(slide.image) : undefined}
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
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
        >‹</button>
        <div className="portfolio-progress">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`portfolio-progress-seg${i === activeSlide ? ' active' : ''}`}
              onClick={() => scrollToSlide(i)}
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
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === slides.length - 1}
        >›</button>
      </div>
      <p className="portfolio-timestamp">last updated: Thursday, May 7</p>
      <div className="portfolio-mobile-nav">
        <button
          className="portfolio-mobile-nav-btn"
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          aria-label="Previous slide"
        >‹</button>
        <span className="portfolio-mobile-nav-indicator">{activeSlide + 1} / {slides.length}</span>
        <button
          className="portfolio-mobile-nav-btn"
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === slides.length - 1}
          aria-label="Next slide"
        >›</button>
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
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

  async function handleSubmit(e) {
    e.preventDefault()
    const hash = await hashPassword(password)
    if (VALID_HASHES.has(hash)) {
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

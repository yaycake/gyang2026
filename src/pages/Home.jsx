import { useState, useEffect, useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import InlineWidget from '../components/InlineWidget'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'
import CirclePreview from '../components/CirclePreview'
import ContactModal from '../components/ContactModal'

const personalImages = {
  hikes: [
    '/assets/images/hikes/IMG_0215.jpeg',
    '/assets/images/hikes/IMG_0227.jpeg',
    '/assets/images/hikes/IMG_0229.jpeg',
    '/assets/images/hikes/IMG_0242.jpeg',
    '/assets/images/hikes/IMG_0246.jpeg',
    '/assets/images/hikes/IMG_0274.jpeg',
    '/assets/images/hikes/IMG_2842.jpeg',
    '/assets/images/hikes/negative-0-0-4.jpeg',
  ],
  dogs: [
    '/assets/images/dogs/IMG_1223.jpeg',
    '/assets/images/dogs/IMG_2056.jpeg',
    '/assets/images/dogs/IMG_2177.jpeg',
    '/assets/images/dogs/IMG_2200.jpeg',
    '/assets/images/dogs/IMG_2861.jpeg',
    '/assets/images/dogs/IMG_3086.jpeg',
    '/assets/images/dogs/negative-0-0-6.jpeg',
  ],
  arts: [
    '/assets/images/arts/Untitled_Artwork (1).jpeg',
    '/assets/images/arts/Untitled_Artwork (2).jpeg',
    '/assets/images/arts/Untitled_Artwork (3).jpeg',
    '/assets/images/arts/Untitled_Artwork.jpeg',
  ],
}

const testimonials = [
  {
    quote: "Her skill set, across research, design, and communication make her one of the most complete product folks I've ever worked with and her ability to collaborate, think innovatively and speak her mind make her an invaluable asset to any team.",
    attribution: 'Drew, GTM @Patlytics',
  },
  {
    quote: "Grace navigates cross-functional interactions with ease, showcasing her adeptness in collaborating with various departments.",
    attribution: 'George, CEO @Viewabo',
  },
  {
    quote: "Grace is a true creative spirit with strong ties to her community, friends and colleagues. Her dynamic personality and strong passion for her work have made her a strong asset.",
    attribution: 'Kim, Marketing Director @Brooklyn Boulders',
  },
]

const workExperiences = [
  { role: 'Founding Designer',    company: 'Patlytics', period: '2024–Present', logo: '/assets/logo-badges-patlytics-color.svg', roleColor: '#34C759', url: 'https://patlytics.ai', detailPath: '/patlytics', description: '0-1 product and system design for AI powered IP workflows for law firms and in-house R&D + counsel.' },
  { role: 'Founding Designer',    company: 'Viewabo',   period: '2021–2023',   logo: '/assets/viewabo-color.svg',                roleColor: '#749CFC', url: 'https://viewabo.com',            detailPath: '/viewabo',  description: 'Solo UX/UI designer for next-gen b2b customer service across agent desktop, plugin, and end user mobile experiences.' },
  { role: 'Digital Director',     company: 'Skyrock',   period: '2020–2021',   logo: '/assets/logo-badges-skyrock-color.svg',    roleColor: '#34A7FF', url: null,                             detailPath: '/skyrock',  description: 'From service design to brand UX and digital ops, working cross functionally to pivot online and offline STEAM programs during COVID.' },
  { role: 'Design',               company: 'Ubisoft',   period: '2018',        logo: '/assets/logo-badges-ubisoft-white.svg',    roleColor: '#7042EF', url: 'https://ubisoft.com',            detailPath: '/ubisoft',  description: "Technical consultant & mobile app design Rally Ubisoft's global community around ChinaJoy through WeChat Mini Program design." },
  { role: 'Design & Development', company: 'ORM',       period: '2018–2019',   logo: '/assets/logo-badges-orm-color.svg',        roleColor: '#6C9988', url: 'https://ormgenomics.com/',       detailPath: '/orm',      description: "Design and development for ORM's China presence via their WeChat Mini Program." },
  { role: 'Product Design',       company: 'Le Wagon',  period: '2016–2018',   logo: '/assets/logo-badges-lewagon-color.svg',    roleColor: '#E60F05', url: 'https://www.lewagon.com/',       detailPath: '/lewagon', description: 'Taught product design across five bootcamp batches and taught high school students in Chengdu product design and front-end development (HTML, CSS, JS).' },
]

const projects = [
  { role: 'Claude Cowork',        name: 'KanBanKit',       year: '2026', roleColor: '#7272F5', url: 'https://github.com/yaycake/kanbankit/tree/main', description: 'A free and simple project tracker built for convenient natural language inputs.' },
  { role: 'AI Builder',           name: 'Landmesh',        year: '2026', roleColor: '#7272F5', url: 'https://read-jog-40919901.figma.site', description: 'a Figma Makethon particle project to landscape your inner world' },
  { role: 'Design & Development', name: 'APurePerson.com', year: '2019', roleColor: '#7272F5', url: 'https://apureperson.com/',               description: 'Digital listening room for collaborations with Taiwan new wave pop artist Lim Giong.' },
  { role: 'WeChat Mini Program',  name: 'Sticker Machine', year: '2018', roleColor: '#7272F5', url: 'https://www.youtube.com/watch?v=LnJNU5GrPpQ&pp=ygUVc3RpY2tlcm1hY2hpbmUgd2VjaGF0', description: 'WeChat Mini Program which gained up to 10,000 unique users.' },
]

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 1h3m0 0v3m0-3L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [fading, setFading] = useState(false)
  const [expandedTile, setExpandedTile] = useState(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [hoveredWord, setHoveredWord] = useState(null)
  const [tappedWord, setTappedWord] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const timerRef = useRef(null)
  const navTo = useNavTo()

  const isMobile = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches
  const tappedImageRef = useRef(null)
  const personallySectionRef = useRef(null)
  const [tapCirclePos, setTapCirclePos] = useState({ top: 0, left: 0 })
  const tapKeyRef = useRef(0)
  const lastZone = useRef({ side: 'right', vert: 'bottom' })

  const CIRCLE_SIZE = 80
  const OVERFLOW = CIRCLE_SIZE * 0.6 // how much the circle can hang off section edges

  const handleWordTap = (e, word) => {
    e.stopPropagation()
    const imgs = personalImages[word]
    tappedImageRef.current = imgs[Math.floor(Math.random() * imgs.length)]
    if (personallySectionRef.current) {
      const rect = personallySectionRef.current.getBoundingClientRect()
      const touchX = e.touches[0].clientX
      const touchY = e.touches[0].clientY

      // Alternate sides; vary vertical with 75% chance to flip
      const side = lastZone.current.side === 'left' ? 'right' : 'left'
      const vert = Math.random() < 0.75
        ? (lastZone.current.vert === 'top' ? 'bottom' : 'top')
        : lastZone.current.vert
      lastZone.current = { side, vert }

      // Build a range for each zone, allowing circle to hang off edges
      const xRange = side === 'left'
        ? [rect.left - OVERFLOW, rect.left + rect.width * 0.5 - CIRCLE_SIZE]
        : [rect.right - rect.width * 0.5, rect.right + OVERFLOW - CIRCLE_SIZE]

      const yRange = vert === 'top'
        ? [rect.top - OVERFLOW, rect.top + rect.height * 0.5 - CIRCLE_SIZE]
        : [rect.bottom - rect.height * 0.5, rect.bottom + OVERFLOW - CIRCLE_SIZE]

      const rand = (min, max) => min + Math.random() * (max - min)

      // Generate candidates in the zone, pick farthest from touch
      const candidates = Array.from({ length: 8 }, () => ({
        top:  rand(yRange[0], yRange[1]),
        left: rand(xRange[0], xRange[1]),
      }))
      const best = candidates.reduce((a, b) =>
        Math.hypot(b.left - touchX, b.top - touchY) >
        Math.hypot(a.left - touchX, a.top - touchY) ? b : a
      )
      setTapCirclePos(best)
    }
    tapKeyRef.current += 1
    setTappedWord(word)
  }

  const goTo = (index) => {
    setFading(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setFading(false)
    }, 500)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActiveTestimonial(i => (i + 1) % testimonials.length)
        setFading(false)
      }, 500)
    }, 4500)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="page">

      {/* ── Hero ── stagger 0 */}
      <FadeIn delay={0}>
        <SiteHeader onContact={() => setContactOpen(true)} />
      </FadeIn>

      <main>

        {/* ── Currently ── stagger 1 */}
        <FadeIn delay={120}>
          <section className="section">
            <h2 className="section-heading">Currently:</h2>
            <p className="body-text">
              Founding designer for{' '}
              <InlineWidget
                text="Patlytics"
                url="https://patlytics.ai"
                domain="patlytics.ai"
                title="Patlytics • Premier AI-Powered Patent Intelligence"
                description="AI-powered patent intelligence platform for law firms and in-house R&D teams."
              />
              , an AI-powered B2B platform. We raised a{' '}
              <InlineWidget
                placement="bottom"
                text="4.5 million seed"
                url="https://www.av.vc/blog/alumni-ventures-invests-in-patlytics-to-revolutionize-patent-protection-with-ai"
                domain="av.vc"
                title="Alumni Ventures Invests in Patlytics to Revolutionize Patent Protection with AI"
                description="Patlytics is disrupting the patent landscape with cutting-edge AI technology designed to protect, enforce, and maximize the value of intellectual property."
              />{' '}
              , {' '}
              <InlineWidget
                placement="bottom"
                text="a 14 million series A"
                url="https://techcrunch.com/2025/02/24/patlytics-raises-14m-series-a-funding-for-its-patent-analytics-platform/"
                domain="techcrunch.com"
                title="Patlytics raises $14M for its patent analytics platform"
                description="For decades, patents have been a bone of contention in the technology world, seen by some as a way to protect intellectual property, but by critics as a tool for litigation."
              />
              , and a {' '}
              <InlineWidget
                placement="bottom"
                text="40 million series B"
                url="https://www.businesswire.com/news/home/20260408770722/en/Patlytics-Raises-%2440-Million-Series-B-to-Expand-the-AI-Platform-Purpose-Built-for-IP-Work"
                domain="businesswire.com"
                title="Patlytics Raises $40 Million Series B to Expand the AI Platform Purpose-Built for IP Work"
                description="SignalFire leads the round; Patlytics now serves over 40% of Am Law 100 IP practices."
              />. 
            </p>
          </section>
        </FadeIn>

        {/* ── Work Experiences ── stagger 2 */}
        <FadeIn delay={240}>
          <section className="section">
            <h2 className="section-heading">Work Experiences</h2>
            <ul className="entry-list">
              {workExperiences.map((exp, i) => {
                const isExpanded = expandedTile === i
                return (
                  <li
                    key={i}
                    className={`entry-item${(exp.detailPath || exp.url) ? ' entry-item--linked' : ''}${isExpanded ? ' entry-item--expanded' : ''}`}
                    style={{
                      '--role-color': exp.roleColor,
                      ...(isExpanded ? { viewTransitionName: 'active-tile' } : {}),
                    }}
                    onClick={() => {
                      if (isMobile()) {
                        setExpandedTile(isExpanded ? null : i)
                      } else {
                        if (exp.detailPath) navTo(exp.detailPath)
                        else if (exp.url) window.open(exp.url, '_blank', 'noreferrer')
                      }
                    }}
                  >
                    <div className="entry-role">{exp.role}</div>
                    <div className="entry-row">
                      <div className="entry-company">
                        <img src={exp.logo} alt="" className="entry-logo" />
                        <span className="entry-name">{exp.company}</span>
                        {exp.url && (
                          <a href={exp.url} target="_blank" rel="noreferrer" className="entry-link-icon" onClick={e => e.stopPropagation()}>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                      <span className="entry-meta">{exp.period}<span className="entry-arrow"> →</span></span>
                    </div>
                    <div className="entry-description">
                      <p className="entry-description-inner">{exp.description}</p>
                    </div>
                    {(exp.detailPath || exp.url) && (
                      <button
                        className="entry-cta-mobile"
                        onClick={e => {
                          e.stopPropagation()
                          if (exp.detailPath) navTo(exp.detailPath, { useTransition: true })
                          else window.open(exp.url, '_blank', 'noreferrer')
                        }}
                      >
                        {exp.detailPath ? 'View case study →' : 'Visit site →'}
                      </button>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
        </FadeIn>

        {/* ── Projects ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Projects</h2>
            <ul className="entry-list">
              {projects.map((proj, i) => {
                const isProjExpanded = expandedProject === i
                return (
                  <li
                    key={i}
                    className={`entry-item entry-item--linked${isProjExpanded ? ' entry-item--expanded' : ''}`}
                    style={{ '--role-color': proj.roleColor }}
                    onClick={() => {
                      if (isMobile()) {
                        setExpandedProject(isProjExpanded ? null : i)
                      } else {
                        window.open(proj.url, '_blank', 'noreferrer')
                      }
                    }}
                  >
                    <div className="entry-role">{proj.role}</div>
                    <div className="entry-row">
                      <div className="entry-company">
                        <span className="project-name">{proj.name}</span>
                        <a href={proj.url} target="_blank" rel="noreferrer" className="entry-link-icon" onClick={e => e.stopPropagation()}>
                          <ExternalLinkIcon />
                        </a>
                      </div>
                      <span className="entry-meta">{proj.year}<span className="entry-arrow"> →</span></span>
                    </div>
                    <div className="entry-description">
                      <p className="entry-description-inner">{proj.description}</p>
                    </div>
                    <button
                      className="entry-cta-mobile"
                      onClick={e => { e.stopPropagation(); window.open(proj.url, '_blank', 'noreferrer') }}
                    >
                      Visit site →
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        </FadeIn>

        {/* ── Testimonial ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="testimonial-heading">Good Times With Good People</h2>
            <div className="testimonial-body">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="testimonial-slide"
                  style={{
                    opacity: i === activeTestimonial ? (fading ? 0 : 1) : 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: i === activeTestimonial ? 'auto' : 'none',
                  }}
                >
                  <p className="quote">"{t.quote}"</p>
                  <p className="attribution">{t.attribution}</p>
                </div>
              ))}
            </div>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => { clearInterval(timerRef.current); goTo(i) }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Personally ── scroll-triggered */}
        <FadeIn>
          <section className="section" ref={personallySectionRef}>
            <h2 className="section-heading">Personally,</h2>
            <div className="personally-body">
              <p className="body-text">
                My weekends are full of{' '}
                <span className="hover-word"
                  onMouseEnter={() => setHoveredWord('hikes')} onMouseLeave={() => setHoveredWord(null)}
                  onTouchStart={e => handleWordTap(e, 'hikes')}
                >hikes</span>
                ,{' '}
                <span className="hover-word"
                  onMouseEnter={() => setHoveredWord('dogs')} onMouseLeave={() => setHoveredWord(null)}
                  onTouchStart={e => handleWordTap(e, 'dogs')}
                >dogs</span>
                , rock climbing, and various experimental{' '}
                <span className="hover-word"
                  onMouseEnter={() => setHoveredWord('arts')} onMouseLeave={() => setHoveredWord(null)}
                  onTouchStart={e => handleWordTap(e, 'arts')}
                >arts &amp; crafts</span>
                .
              </p>
              <p className="body-text">
                I also enjoy event planning, collecting and shaping soundscapes, reading science-fiction, and making really bad techno.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ── Contact ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Contact Me</h2>
            <p className="body-text">If you think we would have a great time collaborating, send me a message.</p>
            <button className="cta-button" onClick={() => setContactOpen(true)}>Say Hello</button>
          </section>
        </FadeIn>

      </main>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {hoveredWord && <CirclePreview key={hoveredWord} images={personalImages[hoveredWord]} />}
      {tappedWord && (
        <div
          key={tapKeyRef.current}
          className="tap-preview-circle"
          style={{ top: tapCirclePos.top, left: tapCirclePos.left }}
          onAnimationEnd={() => setTappedWord(null)}
        >
          <img src={tappedImageRef.current} alt="" />
        </div>
      )}
      <SiteFooter />
    </div>
  )
}

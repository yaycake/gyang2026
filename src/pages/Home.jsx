import { useState, useEffect, useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import InlineWidget from '../components/InlineWidget'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

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
  { role: 'Founding Designer',    company: 'Patlytics', period: '2024–Present', logo: '/assets/logo-badges-patlytics-color.svg', roleColor: '#34C759', url: 'https://patlytics.ai', detailPath: '/patlytics', description: 'Innovation at scale: AI powered IP workflows for law firms and in-house R&D + counsel.' },
  { role: 'Founding Designer',    company: 'Viewabo',   period: '2021–2023',   logo: '/assets/viewabo-color.svg',                roleColor: '#749CFC', url: 'https://viewabo.com',            detailPath: '/viewabo',  description: 'Next-gen b2b customer service live stream and async video tool.' },
  { role: 'Digital Director',     company: 'Skyrock',   period: '2020–2021',   logo: '/assets/logo-badges-skyrock-color.svg',    roleColor: '#34A7FF', url: null,                             detailPath: '/skyrock',  description: 'From service design to brand UX and digital ops, working cross functionally to pivot online and offline STEAM programs during COVID.' },
  { role: 'Design',               company: 'Ubisoft',   period: '2018',        logo: '/assets/logo-badges-ubisoft-white.svg',    roleColor: '#7042EF', url: 'https://ubisoft.com',            detailPath: '/ubisoft',  description: "Rally Ubisoft's global community around ChinaJoy through WeChat Mini Program design." },
  { role: 'Design & Development', company: 'ORM',       period: '2018–2019',   logo: '/assets/logo-badges-orm-color.svg',        roleColor: '#6C9988', url: 'https://ormgenomics.com/',       detailPath: '/orm',      description: "Design and development for ORM's China presence via their WeChat Mini Program." },
  { role: 'Product Design',       company: 'Le Wagon',  period: '2016–2018',   logo: '/assets/logo-badges-lewagon-color.svg',    roleColor: '#E60F05', url: 'https://www.lewagon.com/',       description: 'Lead several batches in product design and helped teach high school students front-end design & development.' },
]

const projects = [
  { role: 'AI Builder',           name: 'Landmesh',        year: '2026', roleColor: '#7272F5', url: 'https://read-jog-40919901.figma.site', description: 'Innovation at scale: AI powered IP workflows for law firms and in-house R&D + counsel.' },
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
  const timerRef = useRef(null)
  const navTo = useNavTo()

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
        <SiteHeader />
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
              and{' '}
              <InlineWidget
                placement="bottom"
                text="14 million series A"
                url="https://techcrunch.com/2025/02/24/patlytics-raises-14m-series-a-funding-for-its-patent-analytics-platform/"
                domain="techcrunch.com"
                title="Patlytics raises $14M for its patent analytics platform"
                description="For decades, patents have been a bone of contention in the technology world, seen by some as a way to protect intellectual property, but by critics as a tool for litigation."
              />
              .
            </p>
          </section>
        </FadeIn>

        {/* ── Work Experiences ── stagger 2 */}
        <FadeIn delay={240}>
          <section className="section">
            <h2 className="section-heading">Work Experiences</h2>
            <ul className="entry-list">
              {workExperiences.map((exp, i) => (
                <li
                  key={i}
                  className={`entry-item${exp.detailPath ? ' entry-item--linked' : ''}`}
                  style={{ '--role-color': exp.roleColor }}
                  onClick={exp.detailPath ? () => navTo(exp.detailPath) : undefined}
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
                    <span className="entry-meta">{exp.period} →</span>
                  </div>
                  <div className="entry-description">
                    <p className="entry-description-inner">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* ── Projects ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Projects</h2>
            <ul className="entry-list">
              {projects.map((proj, i) => (
                <li key={i} className="entry-item entry-item--linked" style={{ '--role-color': proj.roleColor }} onClick={() => window.open(proj.url, '_blank', 'noreferrer')}>
                  <div className="entry-role">{proj.role}</div>
                  <div className="entry-row">
                    <div className="entry-company">
                      <span className="project-name">{proj.name}</span>
                      <a href={proj.url} target="_blank" rel="noreferrer" className="entry-link-icon" onClick={e => e.stopPropagation()}>
                        <ExternalLinkIcon />
                      </a>
                    </div>
                    <span className="entry-meta">{proj.year} →</span>
                  </div>
                  <div className="entry-description">
                    <p className="entry-description-inner">{proj.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* ── Testimonial ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="testimonial-heading">Good Times With Good People</h2>
            <div style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
              <p className="quote">"{testimonials[activeTestimonial].quote}"</p>
              <p className="attribution">{testimonials[activeTestimonial].attribution}</p>
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
          <section className="section">
            <h2 className="section-heading">Personally,</h2>
            <div className="personally-body">
              <p className="body-text">
                My weekends are full of hikes, dogs, rock climbing, and various experimental arts &amp; crafts.
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
            <button className="cta-button">Say Hello</button>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

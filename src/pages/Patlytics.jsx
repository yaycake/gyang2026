import { useState } from 'react'
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
]

const painPoints = [
  { heading: 'Fragmented Workflows', body: 'In-house or law firms contract outside search firms, which takes weeks of management and variable returns.' },
  { heading: 'Context Friction', body: 'Separating the search + strategy uses up time and loses context for potential discovery & strategy exploration.' },
]

const experimentation = [
  { heading: 'Find Everything', body: 'Users spend so much time discovering products, patents, and overlap— we can do it for them.' },
  { heading: 'Streamline to the Extreme', body: 'Get the user as quickly to the magic analysis moment as possible.' },
]

const lessons = [
  { heading: 'Everything is A Lot', body: 'While our reports surfaced many overlapping contexts with in-depth analysis, it was overwhelming for users to get it all at once.' },
  { heading: 'One-shot is two steps backwards', body: "Users don't mind spending a little more time during set up to better understand what each report surfaces— and to feel in control." },
]

const iteration = [
  { heading: 'Empower Users With Strategic Decisions', body: 'Show why and how they can override auto-populated parameters to find and discover evidence. This also teaches them the tool.' },
  { heading: 'Allow users to "opt in" to more detail', body: "Assume a high-level strategic approach and anticipate when and where users want more information so they don't feel overwhelmed." },
]

function CaseItems({ items }) {
  return (
    <div className="case-items">
      {items.map((item, i) => (
        <div key={i} className="case-item">
          <h3>{item.heading}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="11" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="11" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="3" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M4.3 6.2L9.7 3.3M4.3 7.8L9.7 10.7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  )
}

export default function Patlytics() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const navTo = useNavTo()

  return (
    <div className="page">

      {/* ── Header ── stagger 0 */}
      <FadeIn delay={0}>
        <SiteHeader />
      </FadeIn>

      <main>

        {/* ── Back nav ── stagger 1 */}
        <FadeIn delay={100}>
          <div className="case-back-nav">
            <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
            <span className="case-company">At Patlytics</span>
            <span className="case-period">2024 – 2026</span>
          </div>
        </FadeIn>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              As founding designer, I helped build and design new workflows for a highly technical and complex b2b industry.
            </p>
            <p className="body-text">
              I also helped grow a company from a scrappy troupe of 4 to a (still scrappy) power-house EPD team spanning many time-zones.
            </p>
          </section>
        </FadeIn>

        {/* ── Pull quote ── stagger 3 */}
        <FadeIn delay={300}>
          <div className="pull-quote-card">
            <div className="pull-quote-text">
              <p className="pull-quote-body">
                "What the IP industry needs is a shorter path to our most valuable assets. Many assets, fewer resources, and more pressure on patents make developing and qualifying those most valuable patents more important—and more challenging—than ever. Patlytics finds that shorter path."
              </p>
              <p className="pull-quote-attr">— Seth Fiermontes, Head of IP Strategy</p>
            </div>
            <div className="pull-quote-headshot" aria-hidden="true" />
          </div>
        </FadeIn>

        {/* ── Product UI ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-dr.png" alt="Patlytics document review interface" className="case-image" />
        </FadeIn>

        {/* ── Innovating on IP ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Innovating on IP</h2>
            <p className="body-text">
              In two years, we built an idea into a leading disrupter in the IP space. By the end of the MVP design &amp; development, we raised 4.5 million; at the end of the first year, a 14 million Series A. Now into our second year, Patlytics closes the Series B at 40 million in funding, and featured on{' '}
              <InlineWidget
                text="Business Insider's top 30 early stage startups most likely to become unicorns"
                url="https://www.businessinsider.com/startups-most-likely-become-unicorns-2024"
                domain="businessinsider.com"
                title="30 startups most likely to become unicorns"
                description="Business Insider identified 30 early-stage startups that investors think have what it takes to reach a $1 billion valuation."
                placement="top"
              />
              .
            </p>
          </section>
        </FadeIn>

        {/* ── Landscaping graphic ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-dr-graphic.png" alt="Patlytics landscaping and analysis feature" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 1 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"In two years, we built an idea into a leading disrupter in the IP space."</p>
          </blockquote>
        </FadeIn>

        {/* ── Pain Points ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Pain Points</h2>
            <CaseItems items={painPoints} />
          </section>
        </FadeIn>

        {/* ── Experimentation ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Experimentation</h2>
            <CaseItems items={experimentation} />
          </section>
        </FadeIn>

        {/* ── Design process ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-ai-process.png" alt="Patlytics AI design process: Identify, Experiment, Iterate, Design Polish, Track" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 2 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Get the user as quickly to the magic analysis moment as possible."</p>
          </blockquote>
        </FadeIn>

        {/* ── Lessons ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Lessons</h2>
            <CaseItems items={lessons} />
          </section>
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Users don't mind spending a little more time during set up — to better understand what surfaces and to feel in control."</p>
          </blockquote>
        </FadeIn>

        {/* ── Iteration ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Iteration</h2>
            <CaseItems items={iteration} />
          </section>
        </FadeIn>

        {/* ── IDF drafting feature ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-draft.png" alt="Patlytics IDF drafting feature — never start from scratch" className="case-image" />
        </FadeIn>

        {/* ── Reviews ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="testimonial-heading">Reviews</h2>
            <p className="quote">"{testimonials[activeTestimonial].quote}"</p>
            <p className="attribution">{testimonials[activeTestimonial].attribution}</p>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── Product banner ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-banner.png" alt="Patlytics — The Premier AI-Powered Patent Platform" className="case-image" />
        </FadeIn>

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">More Info</h2>
            <p className="body-text">
              "Lorem ipsum dolor sit amet consectetur. Laoreet nulla lacus sed faucibus ultrices. Egestas leo enim lacus viverra mauris leo nullam id. Scelerisque ac volutpat dui leo dolor at faucibus. Molestie lectus pellentesque commodo et arcu tristique aliquet et tincidunt."
            </p>
            <button className="cta-button" style={{ marginTop: '20px' }}>Contact Me for a Case Study</button>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const testimonials = [
  {
    quote: "Viewabo is a great product to interact with customers. I am able to directly see what the customer is seeing and help better navigate through troubleshooting steps. Sometimes it is very hard to explain something clearly just using words, so having a way to view the eyes through the customer has been very helpful.",
    attribution: 'George, CEO @Viewabo',
  },
]

const videoRequestFlow = [
  {
    heading: 'Video Request',
    body: "I designed Viewabo's Video Request workflow so support agents could trigger visual troubleshooting directly from Zendesk without breaking ticket context. Customers receive a secure link, share their rear-facing camera with no app download, and agents can diagnose issues in real time.\n\nThe design priority was operational speed: eliminate multi-message clarification loops and move agents from guesswork to evidence-based troubleshooting as quickly as possible.",
  },
]

const streamAndAnnotation = [
  {
    heading: 'Stream, Pause, and Annotation',
    body: 'I designed the live support controls that made remote guidance practical under pressure: pause frames, on-screen annotation, and orientation handling so agents could direct customers with precision in complex hardware scenarios.\n\nThis transformed video from a passive viewing tool into an active diagnostic interface teams could trust during high-friction cases.',
  },
]

const recordingsAndKnowledge = [
  {
    heading: 'Recordings and Team Reuse',
    body: 'I designed post-session recordings and evidence continuity so resolved sessions could become reusable operational assets. Support teams review interactions for QA, training, and cross-functional handoffs with manufacturing and packaging teams.\n\nThe result was compounding value: each solved case improved how the next case was handled.',
  },
]

const privacyAndAdoption = [
  {
    heading: 'Privacy and Adoption by Design',
    body: 'I designed for trust from the first interaction: explicit access prompts, minimal customer steps, and visible controls throughout the session. This was critical for adoption across less technical or time-constrained customers.\n\nThe no-download experience was a deliberate product decision that reduced friction at the exact moment support teams needed cooperation fastest.',
  },
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

export default function Viewabo() {
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
        <div className="case-back-nav" style={{ viewTransitionName: 'active-tile' }}>
          <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
          <span className="case-company">At Viewabo</span>
          <span className="case-period">2023–2024</span>
        </div>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              I led end-to-end design for Viewabo's visual support experience and Zendesk integration, building the workflow that lets support teams see what customers see instantly, without app downloads or account setup.
            </p>
            <p className="body-text">
              I worked directly with the product lead and CEO to determine product strategy, interaction design, and service design across support operations. I partnered with engineering on WebRTC constraints and with customer-facing teams to ensure UX decisions translated into faster diagnosis, fewer unnecessary escalations, and higher-confidence resolutions.
            </p>
          </section>
        </FadeIn>

        {/* ── The Problem ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">Problem / Context</h2>
            <p className="body-text">
              Most support workflows start blind: text tickets, ambiguous screenshots, and repeated clarification loops before agents can even identify the root issue. In hardware-heavy support environments, that delay increases handle time, drives avoidable returns, and creates poor customer experiences.
            </p>
            <p className="body-text">
              I designed Viewabo's core workflows to close that context gap quickly — turning live visual input into structured, actionable evidence support teams can use immediately. I worked with the founding CEO to shape our asynchrounous "Video Request" offering, which increased adoption of our tool by agents and end users. 
            </p>
          </section>
        </FadeIn>

        {/* ── Brand banner ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/viewabo-banner.png" alt="Viewabo — See problem. Solve Problem." className="case-image" />
        </FadeIn>

        {/* ── Block Quote 1 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"The most valuable thing about Viewabo is how quick it is to connect with a customer. Since the customer doesn't need to download an app, they're more willing to use it."</p>
            <p className="block-quote-text" style={{ marginTop: '12px', fontSize: '0.95em' }}>
              — Lauren K., Director of Customer Service, NZXT
            </p>
          </blockquote>
        </FadeIn>

        {/* ── Outcomes ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <p className="body-text">Customer-reported results from public Viewabo testimonials and the NZXT case study:</p>
            <ul className="body-text" style={{ marginTop: '12px' }}>
              <li>Support interactions that previously took 30 minutes were completed in seconds for cable and setup troubleshooting</li>
              <li>Teams reported handle-time reductions from 40 minutes to 3-5 minutes on complex support cases</li>
              <li>Faster issue visibility reduced back-and-forth communication and improved first-pass diagnosis confidence</li>
              <li>No-download access increased customer willingness to join visual sessions during live support moments</li>
              <li>Recorded sessions created reusable assets for training, QA, and cross-team issue prevention</li>
            </ul>
          </section>
        </FadeIn>

        {/* ── Video Request ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Video Request</h2>
            <CaseItems items={videoRequestFlow} />
          </section>
        </FadeIn>

        {/* ── Stream and Annotation ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Stream, Pause, and Annotation</h2>
            <CaseItems items={streamAndAnnotation} />
          </section>
        </FadeIn>

        {/* ── Desktop/mobile in use ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/viewabo_desktop-mobile.png" alt="Viewabo live session — agent and customer views side by side" className="case-image" />
        </FadeIn>

        {/* ── Mobile app UI ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/viewabo_mobile.png" alt="Viewabo mobile app home screen" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 2 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"We could spend 30 minutes with a customer going over cables one by one to find the right one, but with Viewabo, it can be done in seconds."</p>
            <p className="block-quote-text" style={{ marginTop: '12px', fontSize: '0.95em' }}>
              — Lauren K., Director of Customer Service, NZXT
            </p>
          </blockquote>
        </FadeIn>

        {/* ── Recordings and Knowledge ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Recordings and Knowledge Reuse</h2>
            <CaseItems items={recordingsAndKnowledge} />
          </section>
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Support takes way less time now. Before using Viewabo, sometimes it would take 40 minutes, now it's 3-5 minutes."</p>
            <p className="block-quote-text" style={{ marginTop: '12px', fontSize: '0.95em' }}>
              — Tech Support Rep, Viewabo homepage testimonial
            </p>
          </blockquote>
        </FadeIn>

        {/* ── Customer testimonial ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/viewab-testimonial.png" alt="NZXT: with Viewabo, it can be done in seconds" className="case-image" />
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

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <p className="body-text">
              Designing Viewabo reinforced a core lesson from AI- and automation-adjacent products: speed only matters when users trust the workflow. The most effective decisions were not just interface decisions — they were operational ones that balanced reliability, privacy, and adoption under real support pressure.
            </p>
            <p className="body-text">
              This project sharpened how I design for measurable ownership: define the bottleneck, remove friction at the point of failure, and ensure outcomes are visible to the teams accountable for resolution quality.
            </p>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

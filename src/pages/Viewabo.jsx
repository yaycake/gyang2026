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

const workingWithTeam = [
  { heading: 'Support Agents & Team Leads', body: 'Needed fast, reliable context to resolve tickets and standardize quality across cases.' },
  { heading: 'Field Technicians', body: 'Required clear remote guidance and a traceable record of work done.' },
  { heading: 'End Customers', body: 'Wanted frictionless, private help on mobile — no app download, no friction.' },
  { heading: 'Customer Success & Ops', body: 'Cared about CSAT, cost per ticket, and whether playbooks held up at scale.' },
]

const approach = [
  { heading: 'One-tap video with consent guardrails', body: 'Prototyped invite → join → capture → annotate → summarize flows in Figma, optimised for mobile-first end users.' },
  { heading: 'WebRTC feasibility spikes', body: 'Tested bandwidth adaptation, reconnect strategies, and fallbacks to guided photo capture to ensure reliability in low-signal environments.' },
  { heading: 'Service blueprinting', body: 'Mapped touchpoints across Support, CS, and Ops to align tooling and escalation paths — then measured time-to-diagnosis and error rates.' },
]

const designDecisions = [
  { heading: 'Async over live as the default', body: 'Agents trigger Video Request from the ticket; customers receive a secure link and complete a single guided capture flow. No scheduling, no friction.' },
  { heading: 'Structured evidence', body: 'Clips, device metadata, and annotations auto-attach to the ticket and travel across teams — making handoffs faster and repeat issues easier to resolve.' },
  { heading: 'Privacy visible, not buried', body: 'Explicit consent screens, visible recording status, and scoped data collection maintained customer trust while enabling efficient review.' },
]

const learnings = [
  { heading: 'Scheduling is the real bottleneck', body: 'Async Video Request outperformed live sessions for most cases. Agents and customers rarely align in time and place.' },
  { heading: 'One clean flow beats back-and-forth', body: 'Guided recording with auto-attach to the ticket reduced drop-off and eliminated the "send me a photo" loop.' },
  { heading: 'Service design is product design', body: 'Onboarding and access flows determine perceived quality as much as the core feature.' },
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
              Led end-to-end design for a real-time visual support platform and its Zendesk integration. I shaped product strategy, defined the service blueprint, and built reliable workflows for high-pressure support contexts.
            </p>
            <p className="body-text">
              I partnered closely with engineering on WebRTC constraints and privacy-by-design, and worked with Sales and CS to tie UX decisions directly to resolution time, truck rolls, and CSAT.
            </p>
          </section>
        </FadeIn>

        {/* ── The Problem ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">The Problem</h2>
            <p className="body-text">
              Most support happens blind. Text tickets, screenshots, and long back-and-forths mean agents can't see the issue, and customers can't describe it. The result is slow resolution, unnecessary on-site visits, and frustrated customers — especially in hardware and field operations where context is everything.
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
            <p className="block-quote-text">"Most support happens blind. Agents can't see the issue, and customers can't describe it."</p>
          </blockquote>
        </FadeIn>

        {/* ── Working With the Team ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Working With the Team</h2>
            <CaseItems items={workingWithTeam} />
          </section>
        </FadeIn>

        {/* ── How We Approached It ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">How We Approached It</h2>
            <CaseItems items={approach} />
          </section>
        </FadeIn>

        {/* ── Design Decisions ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Design Decisions</h2>
            <CaseItems items={designDecisions} />
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
            <p className="block-quote-text">"Async Video Request outperformed live sessions for most cases. Agents and customers rarely align in time and place."</p>
          </blockquote>
        </FadeIn>

        {/* ── Learnings ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Learnings</h2>
            <CaseItems items={learnings} />
          </section>
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Service design is product design. Onboarding and access flows determine perceived quality as much as the core feature."</p>
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
              Building Viewabo's visual support layer was a lesson in designing under real constraints — bandwidth, privacy law, field stress, and the very human moment of a customer who just needs help. I'd love to talk through the details.
            </p>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

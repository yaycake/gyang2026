import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const designedFor = [
  { heading: 'Parents & Guardians', body: 'Needed clarity on curriculum, age fit, schedule, and price — plus a simple, confident enrollment flow.' },
  { heading: 'Students', body: 'Needed a repeatable daily path to join class with no link confusion, materials ready at the right time.' },
  { heading: 'Operations & Instructors', body: 'Needed predictable rosters, automated communications, and standardized lesson kits that held up across cohorts.' },
]

const designProcess = [
  { heading: 'Conversion-focused prototyping', body: 'A/B tested value props, program comparison layouts, and CTAs; instrumented the funnel with drop-off analysis to prioritize what to fix.' },
  { heading: 'Service blueprinting', body: 'Mapped every touchpoint from sign-up to attendance — uncovering failure points around time zones, access links, and materials delivery.' },
  { heading: 'Onboarding experiments', body: 'Automated email sequences, pre-class checklists, and calendar invites. Measured open rates, click-through, and actual attendance to iterate.' },
]

const learnings = [
  { heading: 'Clarity converts', body: 'Program comparison and transparent schedules outperformed clever copy. Parents wanted to understand, not be persuaded.' },
  { heading: 'Service design is product', body: 'Onboarding and access flows determined perceived quality as much as the curriculum itself.' },
  { heading: 'Automations need empathy', body: 'Reminders and checklists should reduce anxiety, not add noise. Tone and timing matter as much as content.' },
]

const outcomes = [
  { heading: 'Record early-bird sign-ups', body: 'The most early-bird enrollments in Skyrock history for summer camp.' },
  { heading: 'Reduced support load', body: 'Fewer tickets related to access links, schedules, and materials.' },
  { heading: 'Smooth remote operations', body: 'Automated onboarding and tech-readiness guidance reduced class-day errors across cohorts.' },
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

export default function Skyrock() {
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
            <span className="case-company">At Skyrock Projects</span>
            <span className="case-period">2020–2022</span>
          </div>
        </FadeIn>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              Led website architecture and end-to-end service design for a STEAM education program focused on conversion and smooth delivery. I owned the full funnel — from marketing and sales through onboarding and attendance.
            </p>
            <p className="body-text">
              When COVID hit, I drove the pivot to a fully online summer camp — building cohort scheduling, content packaging, and operational playbooks so families could enroll and attend with confidence.
            </p>
          </section>
        </FadeIn>

        {/* ── The Challenge ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">The Challenge</h2>
            <p className="body-text">
              Families struggled to compare offerings, understand schedules, and complete enrollment across fragmented touchpoints. COVID introduced a second layer of friction: unclear tech setup, access links, and expectations. Without a cohesive funnel and service blueprint, conversion lagged, onboarding was error-prone, and attendance suffered.
            </p>
          </section>
        </FadeIn>

        {/* ── The Hypothesis ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">The Hypothesis</h2>
            <p className="body-text">
              If we simplify decision-making on the site — clear program tiers, age and skill filters, transparent schedules — and design a coherent journey from checkout through class access, we'll increase conversion, reduce pre-class confusion, and improve attendance. Even in a fully remote format.
            </p>
          </section>
        </FadeIn>

        {/* ── Brand photo ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/skyrock-banner.png" alt="Skyrock — kids in STEAM lab" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 1 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"If we simplify decision-making and design a coherent journey from checkout through class access, we'll increase conversion — even in a fully remote format."</p>
          </blockquote>
        </FadeIn>

        {/* ── Who We Designed For ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Who We Designed For</h2>
            <CaseItems items={designedFor} />
          </section>
        </FadeIn>

        {/* ── Design & Process ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Design & Process</h2>
            <CaseItems items={designProcess} />
          </section>
        </FadeIn>

        {/* ── Website flow audit ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/skyrock_flow.webp" alt="Skyrock full website flow and sitemap audit" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 2 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Clarity converts. Parents wanted to understand, not be persuaded."</p>
          </blockquote>
        </FadeIn>

        {/* ── What We Built ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">What We Built</h2>
            <p className="body-text">
              A conversion-first site paired with a robust service blueprint. Post-enrollment, families received a guided onboarding sequence — calendar invites, tech setup, access links, and materials. Cohorts were scheduled for maximum attendance. Instructors got standardized kits. The result: a coherent journey from discovery to attendance, with instrumentation at every step.
            </p>
          </section>
        </FadeIn>

        {/* ── Online camp banner ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/skyrock-camp-banner.webp" alt="Skyrock Online — get ready for an unforgettable summer" className="case-image" />
        </FadeIn>

        {/* ── Learnings ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Learnings</h2>
            <CaseItems items={learnings} />
          </section>
        </FadeIn>

        {/* ── Outcomes ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <CaseItems items={outcomes} />
          </section>
        </FadeIn>

        {/* ── Summer launch ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/skyrock_summer_launch.webp" alt="Skyrock Summer Camps — we're back on campus" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Automations need empathy. Reminders and checklists should reduce anxiety, not add noise. Tone and timing matter as much as content."</p>
          </blockquote>
        </FadeIn>

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <p className="body-text">
              Skyrock was a full-stack service design challenge — from the marketing site to the moment a kid logs into their first class. Happy to walk through the process.
            </p>
            <button className="cta-button" style={{ marginTop: '20px' }}>Contact Me for a Case Study</button>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const designedFor = [
  { heading: 'Parents & Guardians', body: 'Needed clear program differentiation, schedule transparency, and an enrollment flow they could complete confidently without support.' },
  { heading: 'Students', body: 'Needed a consistent daily class-entry flow with predictable links, clear readiness expectations, and materials available at the right moment.' },
  { heading: 'Operations & Instructors', body: 'Needed standardized cohort operations, predictable rosters, and repeatable communication playbooks that worked across large enrollments.' },
]

const designProcess = [
  { heading: 'Enrollment Flow Design', body: 'I designed conversion-focused landing and program comparison flows so families could evaluate options quickly and move from interest to enrollment without ambiguity.' },
  { heading: 'Service Blueprinting', body: 'I mapped the full journey from first visit to first class attendance, identifying failure points around access links, time zones, and pre-class readiness.' },
  { heading: 'Onboarding Automation System', body: 'I designed automated onboarding sequences including reminders, calendar invites, readiness prompts, and materials guidance to reduce support dependency before class day.' },
]

const learnings = [
  { heading: 'Clarity Converts Better Than Persuasion', body: 'Transparent schedule and program framing outperformed marketing-heavy language. Families wanted confidence, not hype.' },
  { heading: 'Service Design Is the Product', body: 'Perceived quality was shaped as much by onboarding and class access reliability as by curriculum content.' },
  { heading: 'Automation Needs Human Tone', body: 'Reminder systems performed best when designed to reduce parent anxiety and decision fatigue, not just push task completion.' },
]

const outcomes = [
  { heading: 'Record Early-Bird Enrollment', body: 'The redesigned enrollment funnel produced the highest early-bird summer camp sign-up volume in Skyrock history.' },
  { heading: 'Lower Support Friction', body: 'Clarified enrollment and onboarding flows reduced recurring parent questions around links, schedules, and readiness.' },
  { heading: 'Higher Operational Reliability', body: 'Standardized onboarding and instructor playbooks reduced class-day setup failures across remote cohorts.' },
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
        <div className="case-back-nav" style={{ viewTransitionName: 'active-tile' }}>
          <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
          <span className="case-company">At Skyrock Projects</span>
          <span className="case-period">2020–2022</span>
        </div>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              I led website architecture and end-to-end service design for Skyrock's STEAM program, owning the full journey from first marketing touchpoint to class attendance.
            </p>
            <p className="body-text">
              During the COVID pivot, I redesigned enrollment and onboarding systems for a fully online summer camp model — so families could register with confidence and operations could deliver consistently at scale.
            </p>
          </section>
        </FadeIn>

        {/* ── The Challenge ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">Problem / Context</h2>
            <p className="body-text">
              Families were navigating fragmented touchpoints to evaluate programs, compare schedules, and complete enrollment. Once COVID forced a remote-first delivery model, friction increased: unclear class access paths, inconsistent readiness communication, and avoidable support load before day one.
            </p>
            <p className="body-text">
              I focused on designing a single coherent system: clearer decision-making at enrollment, then operationally reliable onboarding through first class. The goal was measurable: increase early conversion while reducing pre-class confusion and attendance failures.
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
            <p className="block-quote-text">"Program clarity and operational consistency were the real growth levers — not louder marketing."</p>
          </blockquote>
        </FadeIn>

        {/* ── Outcomes ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <CaseItems items={outcomes} />
          </section>
        </FadeIn>

        {/* ── Stakeholders ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Who I Designed For</h2>
            <CaseItems items={designedFor} />
          </section>
        </FadeIn>

        {/* ── Core Workstreams ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Core Workstreams</h2>
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
            <p className="block-quote-text">"Clarity converts. Families wanted to understand quickly and commit confidently."</p>
          </blockquote>
        </FadeIn>

        {/* ── What We Built ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">What I Built</h2>
            <p className="body-text">
              I built a conversion-first site architecture paired with an operational onboarding system. Post-enrollment, families moved through a guided sequence with calendar invites, tech-readiness prompts, access links, and materials prep. Instructors received standardized cohort kits and communication expectations.
            </p>
            <p className="body-text">
              The outcome was a single end-to-end service flow from discovery to attendance, with fewer breakdown points between marketing, operations, and classroom delivery.
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

        {/* ── Summer launch ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/skyrock_summer_launch.webp" alt="Skyrock Summer Camps — we're back on campus" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Operational systems only work when they feel supportive to families. Tone, timing, and trust are product decisions."</p>
          </blockquote>
        </FadeIn>

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <p className="body-text">
              Skyrock was a full-stack service design challenge spanning growth, operations, and delivery. The project reinforced how much business outcomes depend on designing the handoffs between teams, not just the front-end interface.
            </p>
            <p className="body-text">
              I approached the work with the same principle I use across B2B and operational products: define the core bottleneck, design the system around it, and make ownership of outcomes explicit.
            </p>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

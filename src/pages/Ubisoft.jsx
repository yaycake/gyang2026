import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const stakeholders = [
  { heading: 'Fans & Attendees', body: 'Needed one clear place for demos, prizes, news, and streams inside WeChat without friction.' },
  { heading: 'Ubisoft Shanghai Marketing', body: 'Needed a direct channel for community data capture and post-event engagement within Official Account workflows.' },
  { heading: 'Booth Ops & Team Leads', body: 'Needed reliable booking and content flows that could be updated quickly during a live event.' },
]

const designApproach = [
  { heading: 'Event-Ready Information Architecture', body: 'I designed shallow navigation, large tap targets, and direct paths to booking, sharing, and streams so interactions held up under festival pace.' },
  { heading: 'Flexible Brand System', body: 'I designed game-specific icon sets and visual themes that stayed brand-consistent while remaining readable at a glance on a crowded show floor.' },
  { heading: 'Data Capture with Clarity', body: 'I designed lightweight forms with a clear value exchange so attendees understood what they were sharing and why.' },
]

const learnings = [
  { heading: 'Design for WeChat-Native Behaviors', body: 'Card-based lists, shallow navigation, and native sharing patterns reduced friction more effectively than web-style interaction models.' },
  { heading: 'Feedback Is Operational, Not Cosmetic', body: 'Status and confirmation messages were essential for flow control in a live event environment where ambiguity creates congestion.' },
  { heading: 'Prebuilt Systems Enable Live Agility', body: 'Component kits prepared in advance supported last-minute event changes without breaking the experience.' },
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

export default function Ubisoft() {
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
          <span className="case-company">At Ubisoft Shanghai</span>
          <span className="case-period">2019</span>
        </div>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              I was the product designer for Ubisoft Shanghai's first ChinaJoy WeChat Mini Program. I partnered with creative, marketing, and mobile engineering to map end-to-end UX, design UI components and event graphics, and work within WeChat framework constraints.
            </p>
            <p className="body-text">
              The goal was clear: give 340K+ ChinaJoy attendees a single place to participate, while giving Ubisoft a direct channel to capture and re-engage its China community inside WeChat.
            </p>
          </section>
        </FadeIn>

        {/* ── The Problem ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">Problem / Context</h2>
            <p className="body-text">
              ChinaJoy attendee touchpoints were fragmented across posters, websites, and social posts. Demo sign-ups, booth schedules, promotions, and streams lived in separate places, creating friction for fans and operational overhead for event teams.
            </p>
            <p className="body-text">
              I designed the Mini Program to unify participation in one WeChat-native flow so fans could book, watch, and share more easily, and Ubisoft could run event engagement through a direct owned channel.
            </p>
          </section>
        </FadeIn>

        {/* ── Game lineup ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/ubi_cj.webp" alt="#UBICJ — Ubisoft ChinaJoy game lineup" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 1 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"A single WeChat-native flow aligned attendee experience and event operations in one place."</p>
          </blockquote>
        </FadeIn>

        {/* ── Outcomes ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <p className="body-text">
              The Mini Program gave ChinaJoy attendees one place to participate through WeChat: booking demos, entering lucky draws, following news, and watching streams without leaving the platform.
            </p>
            <p className="body-text">
              For Ubisoft Shanghai, the program created a direct channel for attendee data capture and ongoing community engagement through its Official Account ecosystem.
            </p>
          </section>
        </FadeIn>

        {/* ── Stakeholders & Goals ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Who I Designed For</h2>
            <CaseItems items={stakeholders} />
          </section>
        </FadeIn>

        {/* ── Design Approach ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Core Workstreams</h2>
            <CaseItems items={designApproach} />
          </section>
        </FadeIn>

        {/* ── UX flow map ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/ubi_ui.webp" alt="Ubisoft WeChat Mini Program — full UX flow map" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 2 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Status messages and confirmations aren't polish — ambiguity at a live event creates real congestion."</p>
          </blockquote>
        </FadeIn>

        {/* ── What We Shipped ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">What I Shipped</h2>
            <p className="body-text">
              I shipped a WeChat Mini Program that unified ChinaJoy participation: fans could book demos, enter lucky draws, read and share news posts, and follow live streams without leaving WeChat.
            </p>
            <p className="body-text">
              Deliverables included a full UX map, UI component set, and event graphics, designed to support both attendee usability and live event operations.
            </p>
          </section>
        </FadeIn>

        {/* ── Lucky draw feature ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/ubi_lucky.webp" alt="Ubisoft WeChat lucky draw feature (幸运刮刮乐)" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Component kits built in advance allowed last-minute changes during the live event without breaking anything."</p>
          </blockquote>
        </FadeIn>

        {/* ── Learnings ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Learnings</h2>
            <CaseItems items={learnings} />
          </section>
        </FadeIn>

        {/* ── Game icon set ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/ubi_icons.webp" alt="Ubisoft game-specific map pin icon set" className="case-image" />
        </FadeIn>

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <p className="body-text">
              Designing for a live event inside a constrained platform reinforced a principle I use across projects: clarity is an operational requirement, not a visual preference.
            </p>
            <p className="body-text">
              This work sharpened my approach to cross-functional product delivery: define the real bottleneck, design for platform-native behavior, and build systems that stay reliable when stakes and pace are high.
            </p>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const stakeholders = [
  { heading: 'Fans & Attendees', body: 'Wanted clear access to demos, prizes, news, and streams in one place — without friction or app downloads.' },
  { heading: 'Ubisoft Shanghai Marketing', body: 'Needed data capture, engagement tools, and brand-safe assets they could control during and after the event.' },
  { heading: 'Booth Ops & Team Leads', body: 'Required reliable booking flows and the ability to update content quickly during a live event.' },
]

const designApproach = [
  { heading: 'Festival-proof clarity', body: 'Shallow navigation, large tap targets, and fast paths to book/share/watch. Event pace demands obvious status and confirmations.' },
  { heading: 'Brand-consistent but flexible', body: 'Game-specific icon sets and visual themes that read at a glance across a fast-moving floor.' },
  { heading: 'Data with consent', body: 'Lightweight forms with clear value exchange — fans understood what they were sharing and why.' },
]

const learnings = [
  { heading: 'Build for WeChat idioms', body: 'Card-based lists, shallow nav, and native sharing reduce friction far more than web-style patterns.' },
  { heading: 'Event pace demands obvious feedback', body: 'Status messages and confirmations aren\'t polish — ambiguity at a live event creates real congestion.' },
  { heading: 'Prebuilt components pay off', body: 'Component kits built in advance allowed last-minute changes during the live event without breaking anything.' },
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
        <FadeIn delay={100}>
          <div className="case-back-nav">
            <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
            <span className="case-company">At Ubisoft Shanghai</span>
            <span className="case-period">2019</span>
          </div>
        </FadeIn>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              Product designer for Ubisoft Shanghai's first ChinaJoy WeChat Mini Program. I collaborated with creative, marketing, and mobile dev teams to map end-to-end UX, design UI components and event graphics, and consult on WeChat framework constraints.
            </p>
            <p className="body-text">
              The goal: give 340K+ ChinaJoy attendees a single place to participate — while giving Ubisoft a direct channel to capture community data inside WeChat.
            </p>
          </section>
        </FadeIn>

        {/* ── The Problem ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">The Problem</h2>
            <p className="body-text">
              ChinaJoy attendee touchpoints were fragmented — booth schedules, demo sign-ups, promotions, and streams spread across posters, websites, and social posts. Fans lacked a single place to book, watch, and share. Ubisoft lacked a direct channel to capture and re-engage the China community.
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
            <p className="block-quote-text">"Give 340K+ ChinaJoy attendees a single place to participate — while giving Ubisoft a direct channel to capture community data inside WeChat."</p>
          </blockquote>
        </FadeIn>

        {/* ── Stakeholders & Goals ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Stakeholders & Goals</h2>
            <CaseItems items={stakeholders} />
          </section>
        </FadeIn>

        {/* ── Design Approach ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Design Approach</h2>
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
            <h2 className="section-heading">What We Shipped</h2>
            <p className="body-text">
              A WeChat Mini Program unifying ChinaJoy participation: fans book demos, enter lucky draws, read and share news posts, and follow live streams — without leaving WeChat. Ubisoft captures attendee data and connects the community to its Official Account for ongoing engagement. Deliverables included a full UX map, UI component set, and event graphics.
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
              Designing for a live event inside a platform with strict constraints was a sharp lesson in speed, clarity, and cross-functional trust. I'd be happy to share more.
            </p>
            <button className="cta-button" style={{ marginTop: '20px' }}>Contact Me for a Case Study</button>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

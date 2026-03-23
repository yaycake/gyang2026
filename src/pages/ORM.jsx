import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const discovery = [
  { heading: 'The Hypothesis', body: 'If we meet users inside WeChat — where they already operate — and design information-dense, shareable flows, we\'ll lower friction to learn about ORM services, increase organic sharing, and give marketing actionable data.' },
  { heading: 'Who We Designed For', body: 'Prospective patients and families researching IVF, surrogacy, LGBTQ fertility care, and egg freezing — and ORM\'s Shanghai marketing team managing campaigns and engagement.' },
  { heading: 'How We Explored', body: 'Audited Official Account workflows, produced examples of information-heavy Mini Programs to clarify framework strengths, and ran three rounds of UX and UI iterations across service discovery, city guides, and contact flows.' },
]

const designDecisions = [
  { heading: 'Sensitive information, handled clearly', body: 'Structured service tiles — IVF, Surrogacy, LGBTQ Fertility Care, Egg Freezing, Genomics — with short, plain-language descriptions patients could read and share with confidence.' },
  { heading: 'Trust signals built in', body: 'Success rates, physician profiles, and accreditations (CAP) were surfaced as first-class content, not buried in footers.' },
  { heading: 'Shallow navigation, native sharing', body: 'WeChat idioms over web patterns: tiles, minimal nav depth, and native share affordances that fit how people actually use the platform.' },
  { heading: 'Componentized front end', body: 'Implemented in the WeChat IDE (WXML/WXSS/JS) with functional and higher-order components for maintainability and alignment with framework constraints.' },
]

const outcomes = [
  { heading: 'Reduced discovery friction', body: 'ORM services became findable and shareable within WeChat — without relying on external sites or partner channels.' },
  { heading: 'Direct marketing channel', body: 'Provided actionable analytics on engagement and content performance for the first time.' },
  { heading: 'China deployment readiness', body: 'Componentized front end aligned to WeChat framework constraints, ready for production deployment.' },
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

export default function ORM() {
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
            <span className="case-company">At ORM Fertility</span>
            <span className="case-period">2018–2019</span>
          </div>
        </FadeIn>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              Design engineer owning both product design and front-end development for a WeChat Mini Program supporting ORM Fertility's Shanghai market entry.
            </p>
            <p className="body-text">
              I worked across discovery, UX/UI, and implementation in the WeChat IDE — integrating with their Official Account to give the marketing team a direct, measurable channel inside the WeChat ecosystem.
            </p>
          </section>
        </FadeIn>

        {/* ── The Challenge ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">The Challenge</h2>
            <p className="body-text">
              ORM needed to build its own community presence in China without relying on local partners. Information lived across sites and campaigns, making it hard to share and harder to measure. Friction around discovering services limited reach, and analytics were fragmented across channels.
            </p>
          </section>
        </FadeIn>

        {/* ── Family photo ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/orm_banner.jpg" alt="ORM Fertility — family" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 1 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"ORM needed to build its own community presence in China without relying on local partners."</p>
          </blockquote>
        </FadeIn>

        {/* ── Discovery ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Discovery</h2>
            <CaseItems items={discovery} />
          </section>
        </FadeIn>

        {/* ── Mobile app screens ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/orm-mobile.webp" alt="ORM Fertility WeChat Mini Program — services and city guide screens" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 2 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Meet users inside WeChat — where they already operate — and design information-dense, shareable flows that lower friction."</p>
          </blockquote>
        </FadeIn>

        {/* ── Design Decisions ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Design Decisions</h2>
            <CaseItems items={designDecisions} />
          </section>
        </FadeIn>

        {/* ── Detailed mockups ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/orm-mockups.webp" alt="ORM Fertility — IVF, physician profiles, success rates, Portland guide" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Success rates, physician profiles, and accreditations were surfaced as first-class content — not buried in footers."</p>
          </blockquote>
        </FadeIn>

        {/* ── Outcomes ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <CaseItems items={outcomes} />
          </section>
        </FadeIn>

        {/* ── Web CMS ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/orm-webapp.webp" alt="ORM Fertility web CMS — bilingual content management system" className="case-image" />
        </FadeIn>

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <p className="body-text">
              ORM was a genuinely cross-functional project — healthcare content, cross-cultural UX, and platform-specific engineering all in one. I'd love to tell you more about it.
            </p>
            <button className="cta-button" style={{ marginTop: '20px' }}>Contact Me for a Case Study</button>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

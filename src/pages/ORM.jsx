import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const discovery = [
  { heading: 'Product Hypothesis', body: 'If we meet users inside WeChat and design information-dense, shareable flows, we can reduce friction around service discovery, increase organic sharing, and give marketing a measurable engagement channel.' },
  { heading: 'Primary Users', body: 'Prospective patients and families researching IVF, surrogacy, LGBTQ fertility care, and egg freezing, alongside ORM\'s Shanghai marketing team managing campaigns and engagement.' },
  { heading: 'Validation Approach', body: 'I audited Official Account workflows, reviewed information-heavy Mini Program patterns, and led three rounds of UX/UI iterations across service discovery, city guides, and contact flows.' },
]

const designDecisions = [
  { heading: 'Sensitive Information, Structured Clearly', body: 'I designed service tiles for IVF, Surrogacy, LGBTQ Fertility Care, Egg Freezing, and Genomics with plain-language summaries patients could understand and share confidently.' },
  { heading: 'Trust Signals as Primary Content', body: 'I surfaced success rates, physician profiles, and accreditations (CAP) as first-class content, rather than burying them in secondary navigation.' },
  { heading: 'WeChat-Native Navigation and Sharing', body: 'I used WeChat-native patterns: tile-based entry points, shallow navigation depth, and built-in share affordances aligned with platform behavior.' },
  { heading: 'Componentized Implementation', body: 'I implemented the front end in the WeChat IDE (WXML/WXSS/JS) using functional and higher-order components for maintainability and framework alignment.' },
]

const outcomes = [
  { heading: 'Reduced Discovery Friction', body: 'ORM services became findable and shareable within WeChat, reducing dependence on external sites and partner channels.' },
  { heading: 'Direct Marketing Channel', body: 'The team gained actionable analytics on engagement and content performance through a direct owned channel.' },
  { heading: 'Deployment Readiness', body: 'The componentized front end aligned with WeChat framework constraints and was ready for production deployment.' },
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
        <div className="case-back-nav" style={{ viewTransitionName: 'active-tile' }}>
          <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
          <span className="case-company">At ORM Fertility</span>
          <span className="case-period">2018–2019</span>
        </div>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              I was the design engineer for ORM Fertility's WeChat Mini Program, owning both product design and front-end implementation for the Shanghai market entry effort.
            </p>
            <p className="body-text">
              I worked across discovery, UX/UI, and implementation in the WeChat IDE, integrating with ORM's Official Account to create a direct and measurable engagement channel inside the WeChat ecosystem.
            </p>
          </section>
        </FadeIn>

        {/* ── The Challenge ── stagger 3 */}
        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">Problem / Context</h2>
            <p className="body-text">
              ORM needed to build a direct community presence in China without relying on local partners. Service information was distributed across multiple sites and campaigns, making it difficult to discover, share, and measure consistently.
            </p>
            <p className="body-text">
              I designed the Mini Program to unify service discovery and engagement inside WeChat, where the target audience already spent time and where the marketing team could operate through a single owned channel.
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
            <p className="block-quote-text">"The core opportunity was to make fertility service discovery clear, shareable, and measurable inside WeChat."</p>
          </blockquote>
        </FadeIn>

        {/* ── Outcomes ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <CaseItems items={outcomes} />
          </section>
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
            <h2 className="section-heading">Core Workstreams</h2>
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
            <p className="block-quote-text">"Trust-critical content belongs in primary flows, not buried in secondary pages."</p>
          </blockquote>
        </FadeIn>

        {/* ── Web CMS ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/orm-webapp.webp" alt="ORM Fertility web CMS — bilingual content management system" className="case-image" />
        </FadeIn>

        {/* ── More Info ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <p className="body-text">
              ORM was a cross-functional build across healthcare content, cross-cultural UX, and platform-specific engineering. It reinforced how strongly adoption depends on designing for local platform behaviors rather than porting generic web patterns.
            </p>
            <p className="body-text">
              This project also shaped how I work end-to-end: align product strategy with implementation constraints early, then design systems that teams can maintain and scale.
            </p>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

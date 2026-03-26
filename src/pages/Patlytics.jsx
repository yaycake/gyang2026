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

const detectionReport = [
  {
    heading: 'Detection Report',
    body: "I designed the Detection Report — Patlytics' flagship infringement output. The feature automatically surfaces potentially infringing products, generates element-by-element claim mappings, and presents visual evidence paths attorneys can act on immediately.\n\nA key design decision I drove was Flexible Evidence Paths: rather than forcing a single AI-generated evidence trail, I designed the interface to let attorneys layer in their own independently-obtained product information alongside Patlytics' search results. This gave legal teams multiple investigative paths toward the same infringement theory.\n\nThe result: what previously took days or months now takes hours. Enterprise clients report saving $1,000–$5,000 per detection report in research costs — and in large-scale portfolio reviews, attorneys cut billable time from 100 hours to 20, generating $38,000 in margin improvement on a single engagement.",
  },
]

const infringementCheck = [
  {
    heading: 'Infringement Check',
    body: 'I designed the Infringement Check workflow to bridge patent language and real-world product terminology — the core translation problem in infringement analysis. The output is a color-coded, claim-by-claim mapping that helps attorneys quickly assess the strength of a read and prioritize where to focus.\n\nIP litigation firms use this as their first step in case preparation. At firms handling district court, PTAB, and ITC matters across software, electronics, and chemical engineering, the workflow reduced case review time by 1–2 days per matter.',
  },
]

const priorArtInvalidity = [
  {
    heading: 'Prior Art Search & Invalidity Analysis',
    body: 'I designed the prior art search and invalidity workflows to surface results that traditional patent database tools miss — a meaningful bar to clear, since those tools are deeply embedded in attorney workflows.\n\nFor IP-intensive companies running 15–30 patent applications per year, the time savings compound quickly: each prior art search saves 10–15 hours of attorney time, translating to $5,000–$7,500 in avoided outside counsel costs per application at standard billing rates. Invalidity reports have eliminated over 120 hours of search and analysis time on single-matter engagements at Am Law 100 firms.',
  },
]

const patentDraftingIdf = [
  {
    heading: 'Patent Drafting & Invention Disclosure',
    body: "I designed the drafting and invention disclosure workflows used by Rivian's in-house IP team — an automotive and EV company managing a fast-growing patent portfolio across mechanical and software innovations.\n\nThe challenge wasn't just speed — it was structured consistency. Comparative reviews required locating sources, placing citations, and assembling structured tables before any attorney could apply judgment. I designed workflows that turn raw inputs into organized, review-ready drafts, infer the core inventive concept from limited inventor descriptions, and propose legally structured outlines attorneys can refine rather than rebuild from scratch.\n\nThe outcome shifted Rivian's IP team from mechanical document assembly to higher-value judgment calls — a deliberate design goal, not a side effect.",
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
        <div className="case-back-nav" style={{ viewTransitionName: 'active-tile' }}>
          <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
          <span className="case-company">At Patlytics</span>
          <span className="case-period">2024 – 2026</span>
        </div>

        {/* ── Intro ── stagger 2 */}
        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              I led design for the litigation intelligence suite at Patlytics — an AI-powered patent platform that grew from $0 to $4.4M ARR in its first two years, backed by $14M Series A funding. My work spanned infringement detection, invalidity analysis, prior art search, and Freedom to Operate — building the workflows that enterprise IP teams now use to compress months of attorney research into hours.
            </p>
            <p className="body-text">
              Patent litigation work is extraordinarily time-intensive. Before tools like Patlytics, IP attorneys spent days or months manually cross-referencing patents, products, and technical disclosures to build an infringement case. Invalidity searches required combing through prior art databases that returned incomplete results. Drafting structured legal documents meant hours of mechanical assembly before any strategic judgment could happen.
            </p>
          </section>
        </FadeIn>

        {/* ── Product UI ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-dr.png" alt="Patlytics document review interface" className="case-image" />
        </FadeIn>

        {/* ── Innovating on IP ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <p className="body-text">
              Across the litigation suite I designed:
            </p>
            <ul className="body-text" style={{ marginTop: '12px' }}>
              <li>
                Enterprise clients save <strong>$1,000–$5,000</strong> per infringement detection report (
                <InlineWidget
                  text="Asahi Kasei"
                  url="https://www.patlytics.ai/customer-stories/asahi-kasei"
                  domain="patlytics.ai"
                  title="Asahi Kasei customer story"
                  description="Public Patlytics customer story."
                  placement="top"
                />
                )
              </li>
              <li>Large-scale portfolio reviews cut from <strong>100 hours → 20 hours</strong>, generating <strong>$38K margin improvement</strong> on a single project (Am Law 100)</li>
              <li>
                IP litigation firms save <strong>1–2 days per case review</strong> on infringement matters (
                <InlineWidget
                  text="RJLF"
                  url="https://www.patlytics.ai/customer-stories/rjlf"
                  domain="patlytics.ai"
                  title="RJLF customer story"
                  description="Public Patlytics customer story."
                  placement="top"
                />
                )
              </li>
              <li>Prior art workflows save <strong>$5,000–$7,500 per patent application</strong> in outside counsel costs</li>
              <li>
                IP law firms report <strong>15–20% overall workload reduction</strong> (
                <InlineWidget
                  text="Young Basile"
                  url="https://www.patlytics.ai/customer-stories/young-basile"
                  domain="patlytics.ai"
                  title="Young Basile customer story"
                  description="Public Patlytics customer story."
                  placement="top"
                />
                )
              </li>
              <li>Patlytics grew from <strong>$0 → $4.4M ARR</strong> during my tenure, with <strong>$14M Series A</strong> raised in 2026</li>
            </ul>
          </section>
        </FadeIn>

        {/* ── Landscaping graphic ── scroll-triggered */}
        <FadeIn>
          <img src="/assets/images/patlytics-dr-graphic.png" alt="Patlytics landscaping and analysis feature" className="case-image" />
        </FadeIn>

        {/* ── Block Quote 1 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">
              "It's not only one way to reach the target — sometimes from our additional information, other times from website information only."
            </p>
            <p className="block-quote-text" style={{ marginTop: '12px', fontSize: '0.95em' }}>
              — Naoto Hori, General Manager of Strategic Licensing, Asahi Kasei ·{' '}
              <a href="https://www.patlytics.ai/customer-stories/asahi-kasei" target="_blank" rel="noreferrer">
                Customer story
              </a>
            </p>
          </blockquote>
        </FadeIn>

        {/* ── Detection Report ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Detection Report</h2>
            <CaseItems items={detectionReport} />
          </section>
        </FadeIn>

        {/* ── Infringement Check ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Infringement Check</h2>
            <CaseItems items={infringementCheck} />
          </section>
        </FadeIn>

        {/* ── Block Quote 2 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"It gives me a roadmap for research."</p>
            <p className="block-quote-text" style={{ marginTop: '12px', fontSize: '0.95em' }}>
              — Joy Wang, IP Litigation Associate, RJLF ·{' '}
              <a href="https://www.patlytics.ai/customer-stories/rjlf" target="_blank" rel="noreferrer">
                Customer story
              </a>
            </p>
          </blockquote>
        </FadeIn>

        {/* ── Prior Art & Invalidity ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Prior Art Search &amp; Invalidity Analysis</h2>
            <CaseItems items={priorArtInvalidity} />
          </section>
        </FadeIn>

        {/* ── Block Quote 3 ── scroll-triggered */}
        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">
              "What surprised us most was how quickly the system grasped the core idea and gave us a solid legal structure to refine."
            </p>
            <p className="block-quote-text" style={{ marginTop: '12px', fontSize: '0.95em' }}>
              — Rivian Legal ·{' '}
              <a href="https://www.patlytics.ai/customer-stories/rivian" target="_blank" rel="noreferrer">
                Customer story
              </a>
            </p>
          </blockquote>
        </FadeIn>

        {/* ── Patent Drafting & IDF ── scroll-triggered */}
        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Patent Drafting &amp; Invention Disclosure</h2>
            <CaseItems items={patentDraftingIdf} />
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
            <h2 className="section-heading">Reflection</h2>
            <p className="body-text">
              Designing for AI-assisted legal workflows taught me how much "being AI-first" depends on understanding the human workflow it's replacing. Patent attorneys don't just want faster results — they want to maintain oversight, attribution, and professional accountability. Every design decision I made had to preserve that: the AI does the search, the attorney makes the call.
            </p>
          </section>
        </FadeIn>

      </main>
      <SiteFooter />
    </div>
  )
}

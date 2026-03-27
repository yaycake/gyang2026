import SiteHeader from '../components/SiteHeader'
import FadeIn from '../components/FadeIn'
import { useNavTo } from '../context/nav'
import SiteFooter from '../components/SiteFooter'

const outcomes = [
  {
    heading: 'Five Product Design Batches',
    body: 'I taught product design across five Le Wagon bootcamp batches, guiding students through end-to-end product thinking, UX/UI fundamentals, and hands-on project execution.',
  },
  {
    heading: 'Curriculum-to-Portfolio Translation',
    body: 'I helped students move from abstract frameworks into practical case-study outcomes they could present clearly in portfolios and interviews.',
  },
  {
    heading: 'Cross-Audience Teaching',
    body: 'Beyond bootcamp cohorts, I also taught high school students in Chengdu product design and front-end development, adapting material for earlier-stage learners.',
  },
  {
    heading: 'Technical Collaboration Foundation',
    body: 'A critical outcome from attending a Le Wagon batch myself was learning how to work closely with technical teammates and collaborate effectively from product decisions through implementation.',
  },
]

const workstreams = [
  {
    heading: 'Product Design Instruction',
    body: 'I taught core product design modules covering problem framing, user flows, wireframing, interface hierarchy, and design critique practices.',
  },
  {
    heading: 'Applied Mentorship',
    body: 'I mentored students through project work, helping them make design decisions, strengthen rationale, and improve communication of process and outcomes.',
  },
  {
    heading: 'Front-End Foundations in Chengdu',
    body: 'I taught HTML, CSS, and JavaScript fundamentals to high school students, connecting front-end concepts to product design thinking and interactive prototyping.',
  },
]

const projects = [
  {
    heading: 'Yaochima WeChat Mini Program',
    body: "A shake-to-find-your-lunch-spot mini program. Our team scraped Dianping (China's equivalent of Yelp) to create a restaurant database based on walking distance from the user.",
  },
  {
    heading: 'Journey into Chengdu (Hackathon)',
    body: 'After the bootcamp, I joined a hackathon project that gamified city exploration: users could lift a fog-of-war map and track how much of Chengdu they had explored.',
  },
]

const learnings = [
  {
    heading: 'Clarity Scales Better Than Complexity',
    body: 'Students learn faster when frameworks are practical, concise, and tied to real project decisions.',
  },
  {
    heading: 'Teaching Is Product Design',
    body: 'Strong instruction mirrors strong product work: reduce cognitive load, sequence information clearly, and design for confidence.',
  },
  {
    heading: 'Context-Aware Facilitation Matters',
    body: 'Bootcamp learners and high school students need different pacing, examples, and feedback loops to achieve meaningful outcomes.',
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

export default function LeWagon() {
  const navTo = useNavTo()

  return (
    <div className="page">
      <FadeIn delay={0}>
        <SiteHeader />
      </FadeIn>

      <main>
        <div className="case-back-nav" style={{ viewTransitionName: 'active-tile' }}>
          <button className="back-btn" onClick={() => navTo('/')} aria-label="Back">←</button>
          <span className="case-company">At Le Wagon</span>
          <span className="case-period">2016–2018</span>
        </div>

        <FadeIn delay={200}>
          <section className="section case-intro">
            <p className="body-text">
              I taught product design across five Le Wagon bootcamp batches, mentoring students through end-to-end product thinking and practical execution.
            </p>
            <p className="body-text">
              I also completed a Le Wagon batch myself to learn full-stack web development with Ruby on Rails, which became a major turning point in how I collaborate with engineering teams.
            </p>
            <p className="body-text">
              Beyond the bootcamp, I taught high school students in Chengdu product design and front-end development (HTML, CSS, JavaScript), adapting instruction for a different learning context and pace.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <section className="section">
            <h2 className="section-heading">Problem / Context</h2>
            <p className="body-text">
              Product design education often breaks down when students can describe process but struggle to apply it in real project decisions. The teaching challenge was to turn design principles into repeatable, practical skills students could use immediately.
            </p>
            <p className="body-text">
              I focused on structuring coursework around hands-on outcomes: clearer decision-making, stronger critique literacy, and portfolio-ready project communication.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"Strong product design teaching is applied systems thinking: clarity in, confidence out."</p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Outcomes</h2>
            <CaseItems items={outcomes} />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Core Workstreams</h2>
            <CaseItems items={workstreams} />
          </section>
        </FadeIn>

        <FadeIn>
          <blockquote className="block-quote">
            <p className="block-quote-text">"The goal was never just teaching tools; it was teaching judgment."</p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Projects</h2>
            <CaseItems items={projects} />
            <p className="body-text" style={{ marginTop: '12px' }}>
              Yaochima demo:{' '}
              <a href="https://www.youtube.com/shorts/eYaEUeVMWH0" target="_blank" rel="noreferrer">
                YouTube short
              </a>
            </p>
            <p className="body-text" style={{ marginTop: '8px' }}>
              Journey into Chengdu demo:{' '}
              <a href="https://youtu.be/jNQcDpv_7ao?si=B_3rJU54uEN8ubMS" target="_blank" rel="noreferrer">
                YouTube video
              </a>
            </p>
            <div style={{ marginTop: '16px' }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jNQcDpv_7ao?si=B_3rJU54uEN8ubMS"
                title="Journey into Chengdu video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="section">
            <h2 className="section-heading">Learnings</h2>
            <CaseItems items={learnings} />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="section">
            <p className="body-text">
              Teaching at Le Wagon and in Chengdu sharpened how I think about product work itself: good systems reduce ambiguity, increase confidence, and help people move from theory to action.
            </p>
          </section>
        </FadeIn>
      </main>
      <SiteFooter />
    </div>
  )
}

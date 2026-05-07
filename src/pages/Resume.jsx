function ShareIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <circle cx="11" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="11" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="3" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4.3 6.2L9.7 3.3M4.3 7.8L9.7 10.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

export default function Resume() {
  const shareUrl = window.location.href
  const mailtoHref = `mailto:?subject=Resume%20%E2%80%94%20Grace%20Yang&body=Hi%2C%0A%0AHere%27s%20a%20link%20to%20my%20resume%3A%20${encodeURIComponent(shareUrl)}`

  return (
    <div className="resume-page">

      <div className="resume-actions">
        <a href="/" className="resume-back-btn" aria-label="Back to home">← Back</a>
        <div className="resume-actions-right">
          <a href={mailtoHref} className="resume-share-btn" aria-label="Share via email">
            <ShareIcon />
            Share
          </a>
          <button className="resume-print-btn" onClick={() => window.print()}>Print / Save PDF</button>
        </div>
      </div>

      <div className="resume-doc">

        {/* ── Header ── */}
        <header className="resume-header">
          <div className="resume-header-left">
            <h1 className="resume-name">Grace Yang</h1>
            <p className="resume-title">Founding Product Designer · AI-Native Builder</p>
          </div>
          <div className="resume-header-right">
            <a href="mailto:im@thegraceyang.com" className="resume-contact-link">im@thegraceyang.com</a>
            <a href="https://linkedin.com/in/ygrace/" target="_blank" rel="noreferrer" className="resume-contact-link">linkedin.com/in/ygrace</a>
            <a href="https://thegraceyang.com" target="_blank" rel="noreferrer" className="resume-contact-link">thegraceyang.com</a>
          </div>
        </header>

        <div className="resume-rule" />

        {/* ── Summary ── */}
        <p className="resume-summary">
          Twice a founding designer at venture-backed startups — most recently sole designer from seed to $40M+ Series B. I work upstream in product strategy and downstream in hi-fidelity craft, with the technical literacy to collaborate directly with engineering on implementation. I've shipped production prompts via Humanloop, prototyped in Figma Make and Claude, and built and deployed my own agentic workflows across Claude, OpenAI, and Gemini.
</p>

        <div className="resume-rule-light" />

        {/* ── Experience ── */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Experience</h2>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div><span className="resume-company">Founding Designer</span><span className="resume-role"> at Patlytics</span></div>
              <span className="resume-period">2023 – Present</span>
            </div>
            <ul className="resume-bullets">
              <li>Founding designer across three funding rounds — seed to <strong>$40M+ Series B</strong>, Business Insider top 30 unicorn candidate.</li>
              <li>Shipped AI workflows that <strong>cut time-to-analysis by 50%</strong> and <strong>reduced IP counseling time by 80%</strong> for Am Law 100 firms.</li>
              <li>Worked directly with engineers on prompt design via Humanloop/ChatGPT, translating unpredictable model output into structured, trustworthy enterprise UX.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div><span className="resume-company">Founding Designer</span><span className="resume-role"> at Viewabo</span></div>
              <span className="resume-period">2021 – 2023</span>
            </div>
            <ul className="resume-bullets">
              <li>Led design for a B2B visual support platform (live video, async capture, Zendesk integration) — shipped a full design system, mapped the end-to-end service blueprint, and <strong>tied UX decisions directly to CSAT and field dispatch efficiency.</strong></li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div><span className="resume-company">Digital Director</span><span className="resume-role"> at Skyrock Projects</span></div>
              <span className="resume-period">2020 – 2021</span>
            </div>
            <ul className="resume-bullets">
              <li>Owned full funnel — marketing site through live class attendance; led COVID pivot to online camp in weeks. Drove <strong>record early-bird enrollments</strong> and reduced support load through automated, instrumented onboarding.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div><span className="resume-company">Design & Development</span><span className="resume-role"> at ORM Fertility</span></div>
              <span className="resume-period">2018 – 2019</span>
            </div>
            <ul className="resume-bullets">
              <li>Designed and built a WeChat Mini Program for ORM's China market entry (WXML/WXSS/JS) — <strong>first direct analytics channel,</strong> replacing fragmented partner-dependent distribution.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div><span className="resume-company">Product Designer</span><span className="resume-role"> at Ubisoft Shanghai</span></div>
              <span className="resume-period">2018</span>
            </div>
            <ul className="resume-bullets">
              <li>Designed Ubisoft's first ChinaJoy WeChat Mini Program for <strong>340K+ attendees</strong> — full UX map, component system, and game-specific icon sets delivered under live-event conditions.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div><span className="resume-company">Product Design Lead</span><span className="resume-role"> at Le Wagon</span></div>
              <span className="resume-period">2016 – 2018</span>
            </div>
            <ul className="resume-bullets">
              <li>Led product design curriculum across bootcamp cohorts; taught front-end design and development from zero to shipping.</li>
            </ul>
          </div>

        </section>

        <div className="resume-rule-light" />

        {/* ── Skills ── */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Skills</h2>
          <div className="resume-skill-lines">
            <p className="resume-skill-line"><span className="resume-skill-cat">AI & Tools</span>Claude · Claude Code · ChatGPT + Codex · Google Gemini · Cursor · Humanloop · Figma/Make · agentic workflows</p>
            <p className="resume-skill-line"><span className="resume-skill-cat">Design</span>Product design · Design systems · Service blueprinting · UX research · Prototyping · Conversion optimization</p>
            <p className="resume-skill-line"><span className="resume-skill-cat">Engineering</span>React · HTML/CSS/JS · WeChat Mini Programs (WXML/WXSS/JS) · Front-end implementation</p>
          </div>
        </section>

        <div className="resume-rule-light" />

        {/* ── Projects ── */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Personal Projects</h2>
          <div className="resume-skill-lines">
            <p className="resume-skill-line"><span className="resume-skill-cat">Alphie</span>Personal agentic coding assistant — <a href="https://hermes-agent.nousresearch.com/" target="_blank" rel="noreferrer" className="resume-link">Hermes agent</a> to research, draft content, and build product. 2026 <span className="resume-stack">Telegram · OpenAI API · Gemini</span></p>
            <p className="resume-skill-line"><span className="resume-skill-cat"><a href="https://read-jog-40919901.figma.site" target="_blank" rel="noreferrer" className="resume-link">Landmesh</a></span>Meditative land-sculpting game for a vibe-code hackathon. Mobile friendly. 2026 <span className="resume-stack">Figma Make · Web Audio API · WebGL · React</span></p>
            <p className="resume-skill-line"><span className="resume-skill-cat"><a href="https://apureperson.com/" target="_blank" rel="noreferrer" className="resume-link">APurePerson.com</a></span>Digital listening room for Taiwan artist Lim Giong — Design & Dev, 2019 <span className="resume-stack">React</span></p>
            <p className="resume-skill-line"><span className="resume-skill-cat"><a href="https://youtu.be/LnJNU5GrPpQ" target="_blank" rel="noreferrer" className="resume-link">Sticker Machine</a></span>WeChat Mini Program — organic growth up to 10,000 unique users in 2018 before censorship <span className="resume-stack">WXML · WXSS · JS</span></p>
          </div>
        </section>

      </div>
    </div>
  )
}

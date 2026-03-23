export default function SiteHeader() {
  return (
    <header className="hero">
      <h1>Hey! I'm Grace</h1>
      <p className="hero-subtitle">
        An AI-native builder in a{' '}
        <a href="#" className="hero-link">new agentic world.</a>
      </p>
      <nav className="hero-nav">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-nav-link">
          <img src="/assets/linkedin-app-icon.webp" alt="" className="hero-nav-img" />
          LinkedIn
        </a>
        <span className="hero-nav-pipe">|</span>
        <a href="/resume" target="_blank" rel="noreferrer" className="hero-nav-link">
          <span className="hero-nav-icon-swap">
            <img src="/assets/resumeicon.png" alt="" className="hero-nav-img default" />
            <img src="/assets/resume-purple.png" alt="" className="hero-nav-img hover" />
          </span>
          Resume
        </a>
        <span className="hero-nav-pipe">|</span>
        <a href="mailto:grace@example.com" className="hero-nav-link">
          <span className="hero-nav-icon-swap">
            <img src="/assets/email icon.png" alt="" className="hero-nav-img default" />
            <img src="/assets/email icon-purple.png" alt="" className="hero-nav-img hover" />
          </span>
          Email
        </a>
        <span className="hero-nav-pipe">|</span>
      </nav>
    </header>
  )
}

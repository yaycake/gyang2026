export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-name">Grace Yang</span>
        <nav className="footer-nav">
          <a href="https://linkedin.com/in/ygrace/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <span className="footer-dot">·</span>
          <a href="/resume" target="_blank" rel="noreferrer" className="footer-link">Resume</a>
          <span className="footer-dot">·</span>
          <a href="mailto:grace@example.com" className="footer-link">Email</a>
        </nav>
      </div>
      <p className="footer-copy">© 2026</p>
    </footer>
  )
}

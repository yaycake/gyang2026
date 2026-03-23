import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function InlineWidget({ text, url, title, description, domain, placement = 'top' }) {
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const triggerRef = useRef(null)
  const hideTimer = useRef(null)

  const show = () => {
    clearTimeout(hideTimer.current)
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setCoords({
        top: placement === 'bottom' ? rect.bottom + window.scrollY + 10 : rect.top + window.scrollY - 10,
        left: rect.left + window.scrollX,
        placement,
      })
    }
    setVisible(true)
  }
  const hide = () => { hideTimer.current = setTimeout(() => setVisible(false), 120) }

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  const cardStyle = {
    position: 'absolute',
    top: coords.placement === 'bottom' ? coords.top : undefined,
    bottom: coords.placement !== 'bottom' ? `calc(100vh - ${coords.top}px + 10px)` : undefined,
    left: coords.left,
    width: 288,
    zIndex: 9999,
  }

  // For 'top' placement we want card above the trigger — use fixed-like approach with scroll offset
  const fixedStyle = {
    position: 'fixed',
    left: coords.left,
    top: coords.placement === 'bottom'
      ? coords.top - window.scrollY
      : undefined,
    bottom: coords.placement !== 'bottom'
      ? window.innerHeight - (coords.top - window.scrollY)
      : undefined,
    width: 288,
    zIndex: 9999,
  }

  return (
    <span className="inline-widget" onMouseEnter={show} onMouseLeave={hide}>
      <a ref={triggerRef} href={url} target="_blank" rel="noreferrer" className="inline-widget-trigger">{text}</a>
      {visible && createPortal(
        <span
          className={`inline-widget-card ${placement}`}
          style={fixedStyle}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <span className="preview-meta">
            <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`} alt="" className="preview-favicon" />
            <span className="preview-domain">{domain}</span>
          </span>
          <span className="preview-title">{title}</span>
          <span className="preview-desc">{description}</span>
        </span>,
        document.body
      )}
    </span>
  )
}

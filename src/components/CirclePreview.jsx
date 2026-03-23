import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const SIZE = 112

export default function CirclePreview({ images }) {
  const [pos, setPos] = useState({ x: -999, y: -999 })
  const [opacity, setOpacity] = useState(0)
  const cursorRef = useRef({ x: -999, y: -999 })
  const smoothRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef(null)
  const image = useRef(images[Math.floor(Math.random() * images.length)])

  useEffect(() => {
    const onMove = e => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      // Initialise smooth position on first move so it doesn't fly in from (0,0)
      if (smoothRef.current.x === -999) {
        smoothRef.current = { x: e.clientX, y: e.clientY }
      }
    }
    window.addEventListener('mousemove', onMove)

    const fadeTimer = setTimeout(() => setOpacity(1), 20)

    const animate = () => {
      smoothRef.current.x += (cursorRef.current.x - smoothRef.current.x) * 0.1
      smoothRef.current.y += (cursorRef.current.y - smoothRef.current.y) * 0.1
      setPos({ x: smoothRef.current.x, y: smoothRef.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      clearTimeout(fadeTimer)
    }
  }, [])

  return createPortal(
    <div
      style={{
        position: 'fixed',
        left: pos.x + 18,
        top: pos.y - SIZE - 10,
        width: SIZE,
        height: SIZE,
        borderRadius: '50%',
        overflow: 'hidden',
        opacity,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <img
        src={image.current}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>,
    document.body
  )
}

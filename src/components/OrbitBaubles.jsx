import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const BAUBLES = [
  { radius: 108, speed: 0.004, phase: 0,               size: 74 },
  { radius: 140, speed: 0.003, phase: Math.PI * 0.45,  size: 62 },
  { radius: 95,  speed: 0.005, phase: Math.PI * 0.85,  size: 80 },
  { radius: 125, speed: 0.0035,phase: Math.PI * 1.25,  size: 66 },
  { radius: 112, speed: 0.0045,phase: Math.PI * 1.65,  size: 70 },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function OrbitBaubles({ images }) {
  const [positions, setPositions] = useState(BAUBLES.map(() => ({ x: -999, y: -999 })))
  const [opacity, setOpacity] = useState(0)
  const cursorRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const smoothRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const anglesRef = useRef(BAUBLES.map(b => b.phase))
  const rafRef = useRef(null)
  const pickedImages = useRef(shuffle(images).slice(0, BAUBLES.length))

  useEffect(() => {
    const onMove = e => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    // Fade in after first paint
    const fadeTimer = setTimeout(() => setOpacity(1), 30)

    const animate = () => {
      // Smoothly chase the cursor
      smoothRef.current.x += (cursorRef.current.x - smoothRef.current.x) * 0.08
      smoothRef.current.y += (cursorRef.current.y - smoothRef.current.y) * 0.08

      anglesRef.current = anglesRef.current.map((angle, i) => angle + BAUBLES[i].speed)

      setPositions(
        BAUBLES.map((b, i) => ({
          x: smoothRef.current.x + b.radius * Math.cos(anglesRef.current[i]),
          y: smoothRef.current.y + b.radius * Math.sin(anglesRef.current[i]),
        }))
      )
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
    <>
      {BAUBLES.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            left: positions[i].x - b.size / 2,
            top: positions[i].y - b.size / 2,
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            overflow: 'hidden',
            opacity,
            transition: 'opacity 0.6s ease',
            pointerEvents: 'none',
            zIndex: 9999,
            boxShadow: '0 3px 16px rgba(0,0,0,0.35)',
            willChange: 'transform',
          }}
        >
          <img
            src={pickedImages.current[i % pickedImages.current.length]}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      ))}
    </>,
    document.body
  )
}

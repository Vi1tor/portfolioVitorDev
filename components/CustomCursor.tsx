'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number>(0)
  const rawPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const onMove = (e: MouseEvent) => {
      rawPos.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }

    const loop = () => {
      setPos({ ...rawPos.current })
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    const attach = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    attach()

    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  if (!visible) return null

  const size = hovered ? 48 : 28

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{ mixBlendMode: 'difference' }}
        animate={{
          x: pos.x - size / 2,
          y: pos.y - size / 2,
          width: size,
          height: size,
          backgroundColor: hovered ? '#ffffff' : 'transparent',
          borderWidth: hovered ? 0 : 1.5,
          borderColor: 'rgba(255,255,255,0.7)',
          borderStyle: 'solid',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.3 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white"
        style={{ mixBlendMode: 'difference' }}
        animate={{ x: pos.x - 3, y: pos.y - 3, opacity: hovered ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
    </>
  )
}

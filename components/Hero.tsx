"use client"

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'

const videos = ['/videoport.mp4', '/hero.mp4']

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const advance = useCallback(() => {
    setVisible(false)
    timerRef.current = setTimeout(() => {
      setCurrent(i => (i + 1) % videos.length)
      setVisible(true)
    }, 600)
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.video
            key={videos[current]}
            src={videos[current]}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onEnded={advance}
            initial={{ opacity: 0 }}
            animate={{ opacity: prefersReducedMotion ? 0.72 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: 'brightness(0.52) saturate(1.08) contrast(1.15)' }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <motion.div
        style={prefersReducedMotion ? {} : { y: textY, opacity: textOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display text-[clamp(2rem,5vw,4.5rem)] tracking-[0.22em] uppercase text-center px-6"
          style={{
            color: '#f0c97a',
            textShadow: [
              '1px 1px 0 #c49030',
              '2px 2px 0 #b07820',
              '3px 3px 0 #9c6516',
              '4px 4px 0 #88520c',
              '5px 5px 0 #743f02',
              '6px 6px 14px rgba(0,0,0,0.6)',
            ].join(', '),
          }}
        >
          Desenvolvedor Full Stack
        </motion.p>
      </motion.div>
    </section>
  )
}

import { useEffect, useState } from 'react'

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = () => setPrefersReducedMotion(mq.matches)
    try {
      mq.addEventListener('change', handler)
    } catch (e) {
      // safari
      // @ts-ignore
      mq.addListener(handler)
    }
    return () => {
      try {
        mq.removeEventListener('change', handler)
      } catch (e) {
        // @ts-ignore
        mq.removeListener(handler)
      }
    }
  }, [])

  return prefersReducedMotion
}

'use client'

import { motion } from 'framer-motion'
import { reveal } from '@/lib/motion'

type Props = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'article'
}

/** Sobe e aparece quando entra na tela. */
export default function Reveal({ children, delay = 0, y, className, as = 'div' }: Props) {
  const Tag = motion[as]
  return (
    <Tag {...reveal(delay, { y })} className={className}>
      {children}
    </Tag>
  )
}

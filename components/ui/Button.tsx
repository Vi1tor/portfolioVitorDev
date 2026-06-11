"use client"
import React from 'react'
import { motion } from 'framer-motion'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}

export default Button

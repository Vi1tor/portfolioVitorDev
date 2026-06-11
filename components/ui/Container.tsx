import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-container relative z-10">
      {children}
    </div>
  )
}

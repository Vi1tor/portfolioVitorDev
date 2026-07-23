import type { ReactNode } from 'react'

export default function Window({
  path,
  meta,
  children,
  className = '',
}: {
  path: string
  meta?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`win ${className}`}>
      <div className="win-bar">
        <span className="win-dot bg-[#ff5f57]" />
        <span className="win-dot bg-[#ffbd2e]" />
        <span className="win-dot bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-white/40">{path}</span>
        {meta && <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">{meta}</span>}
      </div>
      <div>{children}</div>
    </div>
  )
}

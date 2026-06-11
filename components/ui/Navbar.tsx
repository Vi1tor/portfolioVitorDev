"use client"
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 glass-strong backdrop-blur-md rounded-2xl border border-white/[0.04] py-3 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-wide text-slate-100">
          Vitor Oliveira
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#projects" className="text-sm text-slate-300 hover:text-white">Projects</Link>
          <Link href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

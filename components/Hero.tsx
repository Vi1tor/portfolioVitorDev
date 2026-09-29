import { ArrowDown, ArrowUpRight, Code2, Github } from 'lucide-react'
import { personal } from '@/lib/data'

function OrbitalGraphic() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 510 510" fill="none" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="sphere-fill" cx="35%" cy="30%" r="80%">
            <stop stopColor="#273421" stopOpacity=".7" />
            <stop offset="1" stopColor="#080b0d" />
          </radialGradient>
          <linearGradient id="orbit-stroke" x1="80" y1="80" x2="450" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c3f85c" stopOpacity=".8" />
            <stop offset=".5" stopColor="#c3f85c" stopOpacity=".15" />
            <stop offset="1" stopColor="#c3f85c" stopOpacity=".5" />
          </linearGradient>
        </defs>
        <path d="M255 20V490M20 255H490" stroke="#253034" strokeDasharray="3 7" />
        <circle cx="255" cy="255" r="225" stroke="#253034" strokeDasharray="2 8" />
        <circle cx="255" cy="255" r="185" stroke="#253034" />
        <circle cx="255" cy="255" r="144" fill="url(#sphere-fill)" stroke="url(#orbit-stroke)" />
        <g stroke="url(#orbit-stroke)" strokeWidth=".7">
          {[34, 72, 111].map(radius => <ellipse key={radius} cx="255" cy="255" rx={radius} ry="144" transform="rotate(-25 255 255)" />)}
          {[35, 75, 115].map(radius => <ellipse key={radius} cx="255" cy="255" rx="144" ry={radius} transform="rotate(-25 255 255)" />)}
        </g>
        <ellipse cx="255" cy="255" rx="232" ry="87" transform="rotate(-32 255 255)" stroke="#c3f85c" strokeOpacity=".55" />
        <ellipse cx="255" cy="255" rx="208" ry="105" transform="rotate(48 255 255)" stroke="#547337" strokeOpacity=".5" />
        <circle cx="75" cy="370" r="5" fill="#c3f85c" />
        <circle cx="441" cy="144" r="4" fill="#c3f85c" />
        <circle cx="327" cy="460" r="3" fill="#a2ada9" />
        <path d="M30 57V30H57M453 30H480V57M480 453V480H453M57 480H30V453" stroke="#52614b" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-[104px] w-[142px] flex-col items-center justify-center rounded-xl border border-[#658240] bg-[#101910f2] shadow-[0_0_60px_#c3f85c12] sm:h-[120px] sm:w-[164px]">
          <span className="font-mono text-[34px] font-medium tracking-[-0.1em] text-accent sm:text-[42px]">&lt;VO /&gt;</span>
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.25em] text-[var(--ink-muted)]">Ideia → código → produto</span>
        </div>
      </div>
      <div className="orbit-tag left-[8%] top-[15%]"><Code2 size={15} className="text-accent" /> React / Next.js</div>
      <div className="orbit-tag right-[0%] top-[53%]"><span className="font-semibold text-accent">TS</span> TypeScript</div>
      <div className="orbit-tag bottom-[10%] left-[15%]"><span className="orbit-dot" /> Node.js / Java</div>
      <span className="absolute right-[8%] top-[7%] font-mono text-[9px] tracking-widest text-[var(--ink-faint)]">FULL STACK / BR</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero-section">
      <div className="section-container relative">
        <div className="grid items-center gap-6 pb-12 pt-14 sm:pt-20 lg:min-h-[650px] lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pb-16 lg:pt-16">
          <div className="relative z-10">
            <p className="kicker mb-7"><span className="h-px w-6 bg-[var(--accent)]" /> Olá, eu sou {personal.name}</p>
            <h1 id="hero-title" className="font-display font-semibold leading-[1.04] tracking-[-0.06em]">
              <span className="block text-[clamp(2rem,5vw,4.35rem)]">Desenvolvedor</span>
              <span className="block text-[clamp(3.7rem,7.8vw,6.9rem)]">full stack<span className="text-accent">.</span></span>
            </h1>
            <p className="mt-7 text-[19px] font-medium leading-relaxed tracking-[-0.025em] sm:text-[21px]">Tecnologia com propósito.<br /><span className="text-accent">Design com visão de futuro.</span></p>
            <p className="mt-4 max-w-[420px] text-sm leading-7 text-[var(--ink-muted)]">Crio sites, sistemas e experiências digitais com React, Next.js e Node.js — do primeiro conceito ao deploy.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-primary">Explorar projetos <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a href="#contato" className="btn-secondary">Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <span className="hero-status">Disponível para novos projetos</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-[11px] text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
            </div>
          </div>
          <OrbitalGraphic />
        </div>
        <div className="relative flex flex-col gap-7 border-t border-[var(--border)] py-7 sm:flex-row sm:items-center sm:justify-between">
          <dl className="grid grid-cols-3 gap-5 sm:gap-12 lg:gap-16">
            {personal.stats.map(stat => (
              <div key={stat.label} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                <dt className="order-2 max-w-[100px] text-[10px] leading-4 text-[var(--ink-muted)]">{stat.label}</dt>
                <dd className="order-1 font-display text-[27px] font-medium tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <a href="#projetos" className="hidden min-h-10 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink-faint)] hover:text-[var(--accent)] md:inline-flex">Conheça meu trabalho <ArrowDown size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

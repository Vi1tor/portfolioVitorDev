import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '@/lib/data'

type Project = (typeof projects)[number]

const categories: Record<string, string> = {
  GuiaDigital: 'Hotelaria · Aplicação web',
  'Guia Gran Reserva': 'Hotelaria · Guia interativo',
  'Villa Monte Verde': 'Hotelaria · Experiência do hóspede',
  AuditSystem: 'Ferramenta · Auditoria web',
  'Siqueira Passeios': 'Turismo · Site institucional',
  'Sistema Hoteleiro': 'Hotelaria · Análise de mercado',
}

function ProjectCover({ variant }: { variant: 'guide' | 'audit' }) {
  const guide = variant === 'guide'

  return (
    <div
      aria-hidden="true"
      className="relative h-56 overflow-hidden border-b border-[color:var(--border)] sm:h-64"
      style={{ background: guide ? '#13211b' : '#141d24' }}
    >
      <svg viewBox="0 0 640 300" fill="none" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`${variant}-grid`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" stroke={guide ? '#31503c' : '#294050'} strokeWidth="0.7" />
          </pattern>
          <linearGradient id={`${variant}-fade`} x1="0" y1="0" x2="640" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor={guide ? '#13211b' : '#141d24'} />
            <stop offset="1" stopColor={guide ? '#13211b' : '#141d24'} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill={`url(#${variant}-grid)`} d="M0 0h640v300H0z" />
        {guide ? (
          <>
            <path d="m292-20 91 77-42 67 100 60-37 142M478-20l-18 94 92 50-41 93 115 50M236 249l85-54 97 13 92-70 123 13" stroke="#35573e" strokeWidth="1.5" />
            <path d="m368 232 67-39-27-61 75-61" stroke="#c3f85c" strokeWidth="2" strokeDasharray="5 7" />
            <circle cx="368" cy="232" r="7" fill="#13211b" stroke="#c3f85c" strokeWidth="2" />
            <circle cx="483" cy="71" r="23" fill="#c3f85c" fillOpacity="0.08" stroke="#c3f85c" strokeOpacity="0.3" />
            <circle cx="483" cy="71" r="7" fill="#c3f85c" />
            <circle cx="551" cy="224" r="5" fill="#4d6c4a" />
            <path d="M419 102v-8m-4 4h8M557 57v-8m-4 4h8M312 173v-8m-4 4h8" stroke="#8fae87" />
          </>
        ) : (
          <>
            <circle cx="468" cy="148" r="107" stroke="#304754" />
            <circle cx="468" cy="148" r="76" stroke="#466875" strokeDasharray="2 8" />
            <circle cx="468" cy="148" r="44" fill="#1a3037" stroke="#6aadb0" />
            <path d="m452 148 11 11 23-25" stroke="#c3f85c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M468 25v29m0 188v29M345 148h29m188 0h29" stroke="#87b2ba" />
            <path d="M264 74h98l29 29M280 236h74l37-37M548 73l27-27h65M550 219l26 27h64" stroke="#42626f" />
            <circle cx="362" cy="74" r="3" fill="#c3f85c" />
            <circle cx="354" cy="236" r="3" fill="#87b2ba" />
          </>
        )}
        <path fill={`url(#${variant}-fade)`} d="M0 0h640v300H0z" />
      </svg>
      <div className="relative flex h-full flex-col justify-between p-7 sm:p-8">
        <span className="w-fit rounded border border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/65">
          {guide ? 'Explore. Descubra. Conecte.' : 'Analise. Entenda. Melhore.'}
        </span>
        <div>
          <p className="font-display text-4xl font-bold tracking-[-0.055em] text-[#edf2f0] sm:text-5xl">
            {guide ? 'Guia' : 'Audit'}<span className={guide ? 'text-[#c3f85c]' : 'text-[#93c5ce]'}>{guide ? 'Digital' : 'System'}</span>
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.19em] text-white/55">
            {guide ? 'O destino começa aqui' : 'Um olhar além da interface'}
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[color:var(--border)] pt-5 text-xs font-medium">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar ${project.name} (abre em nova aba)`}
          className="inline-flex items-center gap-2 text-accent transition-colors hover:text-[color:var(--ink)]"
        >
          Ver projeto <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Código de ${project.name} no GitHub (abre em nova aba)`}
        className="inline-flex items-center gap-2 text-[color:var(--ink-muted)] transition-colors hover:text-[color:var(--ink)]"
      >
        <Github size={14} aria-hidden="true" /> Código
      </a>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter(project => ['GuiaDigital', 'AuditSystem'].includes(project.name))
  const remaining = projects.filter(project => !featured.includes(project))

  return (
    <section id="projetos" aria-labelledby="projects-heading" className="section-spacing scroll-mt-24 border-t border-[color:var(--border)]">
      <div className="section-container">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="kicker mb-4">// 01 — Projetos</p>
            <h2 id="projects-heading" className="section-heading">Projetos digitais.<br /><span className="text-[color:var(--ink-muted)]">Código em ação.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[color:var(--ink-muted)]">
            Aplicações, sites e ferramentas que desenvolvi para hotelaria, turismo e serviços.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map(project => (
            <article key={project.name} className="surface flex flex-col overflow-hidden">
              <ProjectCover variant={project.name === 'GuiaDigital' ? 'guide' : 'audit'} />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--ink-faint)]">{categories[project.name]}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[color:var(--ink)]">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--ink-muted)]">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.name}`}>
                  {project.tech.map(tech => <li key={tech} className="tag-pill">{tech}</li>)}
                </ul>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {remaining.map((project, index) => (
            <article key={project.name} className="surface flex flex-col p-6">
              <div className="mb-8 flex items-center justify-between text-[color:var(--ink-faint)]" aria-hidden="true">
                <span className="font-mono text-xs">/{String(index + 3).padStart(2, '0')}</span>
                <ArrowUpRight size={19} strokeWidth={1.4} />
              </div>
              <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.08em] text-[color:var(--ink-faint)]">{categories[project.name]}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--ink)]">{project.name}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-6 text-[color:var(--ink-muted)]">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Tecnologias de ${project.name}`}>
                {project.tech.map(tech => <li key={tech} className="tag-pill">{tech}</li>)}
              </ul>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

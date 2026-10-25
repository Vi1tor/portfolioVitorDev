import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'
import PhoneFrame from '@/components/PhoneFrame'
import Reveal from '@/components/Reveal'
import { caseStudies, guides, labProjects, type CaseStudy } from '@/lib/data'

function host(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function BrowserFrame({ project, priority }: { project: CaseStudy; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[0_40px_80px_-40px_rgba(23,21,15,0.35)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="mx-auto truncate rounded-full bg-paper-sunk px-4 py-1 font-mono text-[11px] text-ink-muted">
          {project.live ? host(project.live) : host(project.github)}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <div className="relative aspect-[1440/900] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          placeholder="blur"
          priority={priority}
          sizes="(min-width: 1024px) 680px, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
}

function CaseRow({ project, flip }: { project: CaseStudy; flip: boolean }) {
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir ${project.name} (nova aba)`}
            className="block rounded-2xl"
          >
            <BrowserFrame project={project} />
          </a>
        ) : (
          <BrowserFrame project={project} />
        )}
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-5">
        <div className="flex items-center gap-3 font-mono text-[12px] text-ink-muted">
          <span className="text-accent">{project.index}</span>
          <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
          <span>{project.kind}</span>
          <span className="ml-auto">{project.year}</span>
        </div>
        <h3 className="display mt-5 text-[2.1rem] leading-[1.05] sm:text-[2.6rem]">{project.name}</h3>
        <p className="mt-5 text-pretty text-[16px] leading-[1.7] text-ink-muted">{project.summary}</p>
        <ul className="mt-6 space-y-2.5">
          {project.points.map(point => (
            <li key={point} className="flex gap-3 text-[15px] leading-6">
              <span className="mt-[11px] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.name}`}>
          {project.tech.map(t => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-[15px]">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Ver ao vivo <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow text-ink-muted">
            <Github size={15} aria-hidden="true" /> Código
            <span className="sr-only">de {project.name} no GitHub (abre em nova aba)</span>
          </a>
        </div>
      </Reveal>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="py-24 lg:py-36">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2 id="projetos-title" className="display mt-5 text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1]">
              Trabalho <em>selecionado</em>
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-[16px] leading-7 text-ink-muted">
            Produtos no ar, usados por hóspedes e clientes de verdade. A maioria nasceu na Serra da
            Mantiqueira, em Monte Verde (MG).
          </p>
        </Reveal>

        <div className="mt-20 space-y-28 lg:space-y-40">
          {caseStudies.map((project, i) => (
            <CaseRow key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>

      {/* Guias do hóspede */}
      <div className="container-x mt-28 lg:mt-40">
        <div className="relative overflow-hidden rounded-[2rem] bg-paper-sunk px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Série · Guias do hóspede</p>
              <h3 className="display mt-5 text-[clamp(2rem,3.6vw,3rem)] leading-[1.05]">
                Um guia digital para <em>cada</em> pousada.
              </h3>
              <p className="mt-6 max-w-md text-pretty text-[16px] leading-7 text-ink-muted">
                Check-in, Wi-Fi, café da manhã, regras e passeios num link só. Cada guia segue a identidade
                da hospedagem e funciona bem no celular, que é onde o hóspede está.
              </p>
            </Reveal>

            <ul className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
              {guides.map((guide, i) => (
                <Reveal as="li" key={guide.name} delay={i * 0.08} className="w-[46vw] max-w-[200px] shrink-0 snap-start lg:w-auto lg:max-w-none">
                  <a
                    href={guide.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-[2.1rem]"
                  >
                    {guide.image && (
                      <div className={`transition-transform duration-500 group-hover:-translate-y-2 ${i % 2 ? 'lg:translate-y-8' : ''}`}>
                        <PhoneFrame src={guide.image} alt="" sizes="(min-width: 1024px) 180px, 46vw" />
                      </div>
                    )}
                    <p className={`mt-4 text-[15px] font-medium leading-tight ${i % 2 ? 'lg:mt-12' : ''}`}>
                      {guide.name}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      {guide.place}
                      <ArrowUpRight size={13} className="transition-colors group-hover:text-accent" aria-hidden="true" />
                    </p>
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Laboratório */}
      <div className="container-x mt-28 lg:mt-36">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Laboratório</p>
            <h3 className="display mt-4 text-3xl sm:text-4xl">Outros projetos</h3>
          </div>
          <a href="https://github.com/Vi1tor?tab=repositories" target="_blank" rel="noopener noreferrer" className="link-arrow text-[15px]">
            Todos no GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <ul className="mt-10 border-t border-line">
          {labProjects.map((project, i) => (
            <Reveal as="li" key={project.name} delay={i * 0.04} className="border-b border-line">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-6 transition-colors sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-6 lg:grid-cols-[64px_220px_1fr_auto_24px]"
              >
                <span className="font-mono text-[12px] text-ink-muted">{project.year}</span>
                <span className="font-serif text-xl leading-tight transition-colors group-hover:text-accent">
                  {project.name}
                </span>
                <span className="text-[15px] leading-6 text-ink-muted sm:col-start-2 lg:col-start-auto">
                  {project.description}
                </span>
                <span className="hidden gap-1.5 lg:flex">
                  {project.tech.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </span>
                <ArrowUpRight
                  size={18}
                  className="hidden text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent lg:block"
                  aria-hidden="true"
                />
                <span className="sr-only">(código no GitHub, abre em nova aba)</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

import type { StaticImageData } from 'next/image'
import guiaDigitalShot from '@/public/projects/guiadigital.jpeg'
import encantusShot from '@/public/projects/encantus.jpeg'
import siqueiraShot from '@/public/projects/siqueira.jpeg'
import charmeShot from '@/public/projects/m-charme.jpeg'
import mandevilleShot from '@/public/projects/m-mandeville.jpeg'
import descansoShot from '@/public/projects/m-descanso.jpeg'
import granReservaShot from '@/public/projects/m-granreserva.jpeg'

export const personal = {
  name: 'Vitor Oliveira',
  firstName: 'Vitor',
  role: 'Desenvolvedor Full Stack',
  email: 'vitor7pb@gmail.com',
  github: 'https://github.com/Vi1tor',
  linkedin: 'https://www.linkedin.com/in/vi1tor/',
  website: 'https://www.vitorprogramador.com.br',
  avatar: 'https://avatars.githubusercontent.com/u/161656799?v=4',
  location: 'Brasil · Remoto',
}

export const stats = [
  { value: '7', label: 'negócios de turismo atendidos' },
  { value: '16', label: 'repositórios públicos no GitHub' },
  { value: '2024', label: 'ano da primeira linha de código' },
]

/** Clientes reais com projeto entregue — usados na faixa do hero. */
export const clients = [
  'Pousada Encantus',
  'Charme da Montanha',
  'Estalagem Mande Ville',
  'Descanso na Serra',
  'Chalé Gran Reserva',
  'Villa Monte Verde',
  'Siqueira Passeios',
]

export type CaseStudy = {
  slug: string
  index: string
  name: string
  kind: string
  year: string
  summary: string
  points: string[]
  tech: string[]
  live?: string
  github: string
  image: StaticImageData
  imageAlt: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'guia-digital',
    index: '01',
    name: 'Guia Digital',
    kind: 'Produto · SaaS para pousadas',
    year: '2026',
    summary:
      'Um link personalizado que a pousada envia junto com a reserva. O hóspede abre no celular e encontra Wi-Fi, horários, regras da casa e dicas da região antes mesmo de chegar.',
    points: [
      'Menos perguntas repetidas no WhatsApp da recepção',
      'Montado em 48h para cada pousada, sem trabalho do dono',
      'Base para todos os guias do hóspede que entreguei',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    live: 'https://guia-digital-eight.vercel.app',
    github: 'https://github.com/Vi1tor/GuiaDigital',
    image: guiaDigitalShot,
    imageAlt: 'Página do Guia Digital com o título "Seu hóspede nunca mais vai te perguntar qual é a senha do Wi-Fi" e um celular mostrando o guia de uma pousada',
  },
  {
    slug: 'encantus',
    index: '02',
    name: 'Pousada Encantus',
    kind: 'Site institucional · Monte Verde, MG',
    year: '2026',
    summary:
      'Site da pousada com acomodações, galeria, comodidades, localização e avaliações. Toda chamada para ação leva direto para a reserva pelo WhatsApp.',
    points: [
      'Reserva direta, sem depender só de OTAs',
      'Nota do TripAdvisor em destaque logo na primeira dobra',
    ],
    tech: ['React', 'TypeScript', 'Vite'],
    live: 'https://pousadaencantus.vercel.app',
    github: 'https://github.com/Vi1tor/pousadaencantus',
    image: encantusShot,
    imageAlt: 'Página inicial do site da Pousada Encantus com foto de um quarto e botões de reserva',
  },
  {
    slug: 'siqueira',
    index: '03',
    name: 'Siqueira Passeios',
    kind: 'Landing page · Turismo de aventura',
    year: '2025',
    summary:
      'Landing page da agência de passeios de jeep 4x4 do meu pai, em Monte Verde. Pensada para conversão: prova social no topo, catálogo de passeios e reserva em um toque.',
    points: [
      'Foco em celular, de onde vem a maior parte das reservas',
      'Botão de WhatsApp sempre visível',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://siqueirapasseios.vercel.app',
    github: 'https://github.com/Vi1tor/Siqueirapasseios',
    image: siqueiraShot,
    imageAlt: 'Página inicial da Siqueira Passeios com o título "Explore Monte Verde com a Siqueira Passeios" sobre uma foto da serra',
  },
]

export type Guide = {
  name: string
  place: string
  live?: string
  github: string
  image?: StaticImageData
}

export const guides: Guide[] = [
  {
    name: 'Charme da Montanha',
    place: 'Pousada',
    live: 'https://check-in-charme-da-montanha.vercel.app',
    github: 'https://github.com/Vi1tor/check-in-charme-da-montanha',
    image: charmeShot,
  },
  {
    name: 'Estalagem Mande Ville',
    place: 'Estalagem',
    live: 'https://guia-digital-estalagem-mande-ville.vercel.app',
    github: 'https://github.com/Vi1tor/guia-digital-estalagem-mande-ville',
    image: mandevilleShot,
  },
  {
    name: 'Descanso na Serra',
    place: 'Pousada',
    live: 'https://guia-do-hospede-descanso-na-serra.vercel.app',
    github: 'https://github.com/Vi1tor/guia_do_hospede_descanso_na_serra',
    image: descansoShot,
  },
  {
    name: 'Chalé Gran Reserva',
    place: 'Chalé',
    live: 'https://guia-gran-reserva.vercel.app',
    github: 'https://github.com/Vi1tor/Guia-Gran-Reserva',
    image: granReservaShot,
  },
]

export const labProjects = [
  {
    name: 'Villa Monte Verde',
    description: 'Guia do hóspede criado para tirar do WhatsApp as dúvidas que se repetiam todo dia.',
    tech: ['TypeScript', 'React'],
    year: '2026',
    github: 'https://github.com/Vi1tor/villamonteverde',
  },
  {
    name: 'AuditSystem',
    description: 'Auditoria de sites: aponta problemas de performance e boas práticas, com dicas de correção.',
    tech: ['JavaScript', 'Node.js'],
    year: '2025',
    github: 'https://github.com/Vi1tor/auditSytem',
  },
  {
    name: 'Mercado Hoteleiro',
    description: 'Sistema de análise do mercado hoteleiro, com leitura consolidada para gestão.',
    tech: ['JavaScript', 'APIs'],
    year: '2025',
    github: 'https://github.com/Vi1tor/sistema-mercado-hotelerio',
  },
  {
    name: 'GuiaMV',
    description: 'Guia de Monte Verde mostrando quais lugares estão abertos ou fechados.',
    tech: ['JavaScript'],
    year: '2025',
    github: 'https://github.com/Vi1tor/GuiaMV',
  },
  {
    name: 'Projeto Java',
    description: 'Sistema em Java com foco em orientação a objetos e organização do código.',
    tech: ['Java', 'Spring'],
    year: '2026',
    github: 'https://github.com/Vi1tor/projetcJAVA',
  },
]

export const services = [
  {
    title: 'Guias digitais para hospedagem',
    text: 'Um guia do hóspede com a cara da sua pousada: check-in, Wi-Fi, regras e passeios num link só.',
  },
  {
    title: 'Sites e landing pages',
    text: 'Sites institucionais rápidos, bonitos no celular e feitos para levar o visitante até a reserva.',
  },
  {
    title: 'Sistemas e integrações',
    text: 'Painéis, APIs e automações sob medida com Node.js, Java e banco de dados.',
  },
  {
    title: 'Tráfego pago',
    text: 'Campanhas no Meta Ads e Google Ads para quem já tem o site e precisa de cliente, não só de visita.',
  },
]

export const timeline = [
  {
    period: '2026 — hoje',
    title: 'Desenvolvedor full stack freelance',
    text: 'Guias digitais, sites e sistemas para pousadas, chalés e negócios de turismo. Transformei o guia do hóspede em produto: o Guia Digital.',
  },
  {
    period: '2025',
    title: 'Primeiros projetos em produção',
    text: 'Siqueira Passeios, AuditSystem e o sistema de análise do mercado hoteleiro. Deploy, manutenção e cliente real do outro lado.',
  },
  {
    period: '2024',
    title: 'Análise e Desenvolvimento de Sistemas',
    text: 'Início da graduação e dos estudos em React, TypeScript, Java e APIs REST, sempre com projeto prático junto.',
  },
  {
    period: 'Antes',
    title: 'Atendimento e operações em pousada',
    text: 'Recepção, hóspedes e processo do dia a dia. Foi ali que vi os problemas que hoje resolvo com código.',
  },
]

export const techStack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'] },
  { group: 'Backend', items: ['Node.js', 'Java', 'Spring', 'Python', 'PHP', 'REST APIs'] },
  { group: 'Dados', items: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Prisma'] },
  { group: 'Deploy', items: ['Vercel', 'Railway', 'Docker', 'GitHub Actions'] },
  { group: 'IA & Ads', items: ['IA generativa', 'Gemini API', 'Meta Ads', 'Google Ads', 'Analytics'] },
]

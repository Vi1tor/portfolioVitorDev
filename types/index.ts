export type Project = {
  id: string
  title: string
  summary: string
  tags?: string[]
  github?: string
  live?: string
}

export type Experience = {
  company: string
  role: string
  start: string
  end?: string
  summary?: string
}

export {}

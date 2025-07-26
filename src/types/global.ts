export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    linkedin: string
    email: string
  }
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
  videoUrl?: string
  featured: boolean
  completedAt: string
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface Locale {
  code: string
  name: string
  flag: string
}

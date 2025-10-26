export interface Reply {
  id: string
  content: string
  author: string
  authorType: 'patient' | 'dentist'
  createdAt: string
  updatedAt: string
  helpfulVotes: number
  parentId?: string // For nested replies
  status: 'published' | 'pending' | 'moderated'
}

export interface Question {
  id: string
  title: string
  slug: string
  question: string
  answer: string
  author: string
  createdAt: string
  updatedAt: string
  status: 'published' | 'draft' | 'pending'
  tags: string[]
  relatedServices: string[]
  helpfulVotes: number
  views: number
  replies: Reply[]
  conversationCount: number
  lastActivity: string
}

export interface QuestionFormData {
  title: string
  question: string
  email: string
  name: string
  phone?: string
}

export interface SearchFilters {
  query: string
  tags: string[]
  dateRange: 'all' | 'week' | 'month' | 'year'
}

export interface PaginationData {
  page: number
  limit: number
  total: number
  totalPages: number
}

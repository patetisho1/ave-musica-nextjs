export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
  image_url?: string
  created_at: string
}

export interface EventCreate {
  title: string
  date: string
  location: string
  description: string
  image_url?: string
}

export interface EventUpdate {
  title?: string
  date?: string
  location?: string
  description?: string
  image_url?: string
}


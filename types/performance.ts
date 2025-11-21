export interface Performance {
  id: string
  title: string
  composer: string
  audio_url?: string
  image_url?: string
  description: string
  category: string
  created_at: string
}

export interface PerformanceCreate {
  title: string
  composer: string
  audio_url?: string
  image_url?: string
  description: string
  category: string
}

export interface PerformanceUpdate {
  title?: string
  composer?: string
  audio_url?: string
  image_url?: string
  description?: string
  category?: string
}


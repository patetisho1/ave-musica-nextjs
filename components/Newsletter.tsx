'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: null, text: '' })

    // TODO: Integrate with API
    setTimeout(() => {
      setMessage({
        type: 'success',
        text: 'Успешно се абонирахте за новини!',
      })
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex items-center justify-between gap-8">
            {/* Text */}
            <div className="mb-8 md:mb-0 md:flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Абонирайте се за новини
              </h3>
              <p className="text-lg text-white/90">
                Получете информация за предстоящи концерти, нови записи и специални събития
              </p>
            </div>

            {/* Form */}
            <div className="md:flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Вашият имейл адрес"
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  <Mail className="w-5 h-5" />
                  {isSubmitting ? 'Изпращане...' : 'Абонирай се'}
                </button>
              </form>

              {message.type && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center ${
                    message.type === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


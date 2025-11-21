'use client'

export default function Events() {
  return (
    <section id="events" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                UPCOMING EVENTS
              </h2>
              <button className="px-6 py-3 bg-[#d946ef] hover:bg-[#c026d3] text-white font-semibold rounded-lg transition-colors">
                VIEW EVENTS
              </button>
            </div>

            {/* Dicacia Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                  DICACIA
                </h2>
                <span className="text-white text-xl">♪</span>
              </div>
              <p className="text-text-gray text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Discography */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                DISCOGRAPHY
              </h2>
              <p className="text-text-gray text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam angumuy nibh.
              </p>
            </div>

            {/* Calendar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                  EVENTS
                </h2>
                <div className="flex items-center gap-2 text-white text-sm">
                  <span>April 2024</span>
                  <span>→</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-text-gray text-xs">
                {/* Days of week */}
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                  <div key={day} className="font-semibold py-2">
                    {day}
                  </div>
                ))}
                {/* Calendar dates */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <div
                    key={date}
                    className="py-2 hover:bg-white/10 rounded cursor-pointer transition-colors"
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


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
              <p className="text-gray-400 text-sm leading-relaxed">
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
              <p className="text-gray-400 text-sm leading-relaxed">
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
              <div className="space-y-2">
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-2 text-center text-white text-xs font-semibold mb-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                    <div key={day} className="py-2">
                      {day}
                    </div>
                  ))}
                </div>
                {/* Calendar dates - vertical layout per day */}
                <div className="grid grid-cols-7 gap-2 text-white text-xs">
                  {[
                    [1, 8, 15, 22, 29],
                    [2, 9, 16, 23, 30],
                    [3, 10, 17, 24, 31],
                    [4, 11, 18, 25],
                    [5, 12, 19, 26],
                    [6, 13, 20, 27],
                    [7, 14, 21, 28],
                  ].map((dates, dayIndex) => (
                    <div key={dayIndex} className="flex flex-col gap-1">
                      {dates.map((date) => (
                        <div
                          key={date}
                          className="py-1 hover:bg-white/10 rounded cursor-pointer transition-colors text-center"
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


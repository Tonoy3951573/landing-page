import { motion } from "framer-motion"

export function DashboardShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Deep Insights into <span className="text-primary">Team Performance</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI models break down interactions into measurable components like facial expressions, verbal tone, and policy compliance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#111623] text-left"
        >
          {/* Dashboard Header */}
          <div className="flex items-center px-4 h-12 border-b border-white/5 bg-[#0B0E17] gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto bg-white/5 rounded-md px-32 py-1 border border-white/5 text-xs text-muted-foreground">app.shinkadynamics.com</div>
          </div>
          
          {/* Dashboard Grid */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Col - Scoring Model */}
            <div className="bg-[#151B2B] rounded-2xl border border-white/5 p-6 relative">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Evaluation Criteria</div>
                  <h3 className="text-xl font-bold text-white">Performance support model</h3>
                </div>
                <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-muted-foreground font-semibold">
                  WEIGHTED AI RUBRIC
                </div>
              </div>

              <div className="space-y-4">
                {/* Facial Expression Card */}
                <div className="p-5 rounded-xl border border-white/5 bg-[#1A2033]">
                  <div className="flex justify-between mb-4">
                    <div className="pr-12">
                      <h4 className="font-semibold text-white mb-1">Facial expression</h4>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">Measures smiling frequency and positive customer-facing presence.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">97</div>
                      <div className="text-[10px] text-muted-foreground font-semibold mt-1">WEIGHT 35%</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#202940] border border-white/5 text-xs font-medium text-primary">Smile consistency 97%</span>
                    <span className="px-3 py-1 rounded-full bg-[#202940] border border-white/5 text-xs font-medium text-primary">Negative expression events 0</span>
                  </div>
                </div>

                {/* Verbal Expression Card */}
                <div className="p-5 rounded-xl border border-white/5 bg-[#1A2033]">
                  <div className="flex justify-between mb-4">
                    <div className="pr-12">
                      <h4 className="font-semibold text-white mb-1">Verbal expression</h4>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">Evaluates politeness, calm tone, and respectfulness.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">91</div>
                      <div className="text-[10px] text-muted-foreground font-semibold mt-1">WEIGHT 40%</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#202940] border border-white/5 text-xs font-medium text-primary">Politeness phrases 91%</span>
                    <span className="px-3 py-1 rounded-full bg-[#202940] border border-white/5 text-xs font-medium text-primary">Raised tone incidents 0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col - Score Trend */}
            <div className="bg-[#151B2B] rounded-2xl border border-white/5 p-6 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Score Trend</div>
                  <h3 className="text-xl font-bold text-white">Weekly interaction quality</h3>
                </div>
                <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-muted-foreground font-semibold">
                  7-DAY PULSE
                </div>
              </div>

              {/* Chart Area Mockup */}
              <div className="h-48 rounded-xl bg-[#1A2033] border border-white/5 mb-6 relative overflow-hidden flex items-end px-4 pb-4">
                {/* Fake SVG Line Chart */}
                <svg className="w-full h-full absolute inset-0 preserve-aspect-ratio-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,80 L40,80 L60,80 L80,30 L100,70" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>

              {/* Days Row */}
              <div className="flex justify-between gap-2 mb-6">
                {[
                  { d: "MON", v: "92" }, { d: "TUE", v: "95" }, { d: "WED", v: "94" },
                  { d: "THU", v: "91" }, { d: "FRI", v: "96" }, { d: "SAT", v: "95" }
                ].map(day => (
                  <div key={day.d} className="flex-1 rounded-xl border border-white/5 bg-[#1A2033] py-2 flex flex-col items-center">
                    <div className="text-[10px] text-muted-foreground font-semibold mb-1">{day.d}</div>
                    <div className="text-sm font-bold text-white">{day.v}</div>
                  </div>
                ))}
                <div className="flex-1 rounded-xl border border-white/5 bg-primary py-2 flex flex-col items-center shadow-[0_0_15px_rgba(62,198,160,0.3)]">
                  <div className="text-[10px] text-primary-foreground font-semibold mb-1">SUN</div>
                  <div className="text-sm font-bold text-primary-foreground">97</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-auto">
                <div className="p-4 rounded-xl border border-white/5 bg-[#1A2033]">
                  <div className="text-[10px] text-muted-foreground font-bold tracking-wider mb-2">FOCUSED DAY</div>
                  <div className="text-lg font-bold text-white">Sun</div>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-[#1A2033]">
                  <div className="text-[10px] text-muted-foreground font-bold tracking-wider mb-2">INTERACTION SCORE</div>
                  <div className="text-lg font-bold text-white">97</div>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-[#1A2033]">
                  <div className="text-[10px] text-muted-foreground font-bold tracking-wider mb-2">VS WEEKLY AVERAGE</div>
                  <div className="text-lg font-bold text-[#4ADE80]">+2</div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

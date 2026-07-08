import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  onTryItOut?: () => void
}

export function Hero({ onTryItOut }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-50 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50 animate-blob" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="glass" className="gap-2 py-1.5 px-4 text-sm font-medium border-primary/30 text-primary bg-primary/10">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            X-Manager Dashboard is now live
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter mb-6 max-w-5xl mx-auto text-gradient drop-shadow-2xl leading-none pb-2"
        >
          X-Manager
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          <span className="text-foreground font-semibold">X-Manager</span> connects with your existing cameras to assess team performance, support employee growth, and foster a culture of service excellence at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gradient" size="lg" className="relative overflow-hidden group w-full sm:w-auto" onClick={onTryItOut}>
            {/* Shimmer sweep */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-200%] group-hover:translate-x-[400%] transition-all duration-[1500ms] ease-in-out" />
            <span className="relative z-10 flex items-center">
              Client Log In
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>

        {/* Animated Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl group p-[1px] rounded-[17px] overflow-hidden"
        >
          {/* Animated Magic Border */}
          <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary)/0.5)_0%,hsl(var(--secondary)/0.5)_50%,hsl(var(--primary)/0.5)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative rounded-2xl bg-[#111623] border border-white/10 group-hover:border-transparent shadow-2xl overflow-hidden flex flex-col text-left transition-colors duration-500">
            {/* Mockup Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0B0E17]">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-4 sm:px-32 py-1 border border-white/5 text-xs text-muted-foreground truncate w-full max-w-[150px] sm:max-w-md text-center">app.shinkadynamics.com</div>
            </div>
            
            {/* Mockup Content - Real App Sync */}
            <div className="p-4 sm:p-8">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2">Team Performance & Development Platform</div>
              <h2 className="text-3xl font-bold mb-8">Team Performance & Growth<br/>Dashboard</h2>

              <div className="bg-[#151B2B] rounded-2xl border border-white/5 p-4 sm:p-8 mb-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Col */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">X-Manager</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-3">X-Manager</h3>
                  <p className="text-sm text-muted-foreground mb-6">14 team members assessed across 12 cameras. Live processing active.</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/5">Live</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium border border-white/5">12/12 cameras active</span>
                  </div>
                </div>

                {/* Center Col - Circular Progress */}
                <div className="md:col-span-3 flex flex-col items-center justify-center relative">
                  <div className="w-40 h-40 rounded-full border-8 border-white/5 relative flex items-center justify-center">
                    {/* Fake gradient arc for the circle */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="72" cy="72" r="68" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeDasharray="427" strokeDashoffset="34" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--secondary))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full mix-blend-screen" />
                    <div className="text-center z-10">
                      <div className="text-4xl font-bold text-white">97</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Performance score</div>
                    </div>
                  </div>
                  <div className="mt-4 px-2 py-1 rounded bg-[#1A2F2C] text-[#4ADE80] text-[10px] font-semibold flex items-center gap-1">
                    +12% <span className="text-muted-foreground font-normal">vs last week</span>
                  </div>
                </div>

                {/* Right Col - Progress Bars */}
                <div className="md:col-span-4 flex flex-col justify-center space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Positive customer engagement</span>
                      <span className="font-bold">97%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[97%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Supportive communication</span>
                      <span className="font-bold">91%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[91%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Welcoming atmosphere</span>
                      <span className="font-bold">99%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[99%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 4 Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Avg. response time", val: "12s", sub: "Ensuring timely customer support" },
                  { label: "Support requests", val: "2", sub: "Assistance actively provided" },
                  { label: "Welcoming rate", val: "99%", sub: "Top 1% industry average" },
                  { label: "Active alerts", val: "0", sub: "All clear" },
                ].map(stat => (
                  <div key={stat.label} className="bg-[#151B2B] rounded-xl border border-white/5 p-5">
                    <div className="text-xs text-muted-foreground font-medium mb-3">{stat.label}</div>
                    <div className="text-3xl font-bold mb-2 text-white">{stat.val}</div>
                    <div className="text-xs text-muted-foreground/60">{stat.sub}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

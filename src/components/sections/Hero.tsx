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
            Shinka Dynamics Dashboard is now live
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-5xl mx-auto"
        >
          Customer Interaction <br className="hidden md:block" />
          <span className="text-gradient">Intelligence Platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Connect your existing cameras to automatically rate employee behavior, analyze interactions, and ensure consistent customer service quality at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gradient" size="lg" className="group" onClick={onTryItOut}>
            Try It Out
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Animated Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl bg-[#111623] border border-white/10 shadow-2xl overflow-hidden flex flex-col text-left">
            {/* Mockup Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0B0E17]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-32 py-1 border border-white/5 text-xs text-muted-foreground">app.shinkadynamics.com</div>
            </div>
            
            {/* Mockup Content - Real App Sync */}
            <div className="p-8">
              <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2">Employee Behavior Rating Platform</div>
              <h2 className="text-3xl font-bold mb-8">Customer Interaction Intelligence<br/>Dashboard</h2>

              <div className="bg-[#151B2B] rounded-2xl border border-white/5 p-8 mb-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Col */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shinka Dynamics</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-3">Shinka Dynamics</h3>
                  <p className="text-sm text-muted-foreground mb-6">14 employees tracked across 12 cameras. Live processing active.</p>
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
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Overall score</div>
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
                      <span className="text-muted-foreground">Joyful facial expression</span>
                      <span className="font-bold">97%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[97%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Polite verbal tone</span>
                      <span className="font-bold">91%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[91%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Greeting on entry and exit</span>
                      <span className="font-bold">99%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[99%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 4 Cards */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Avg. response time", val: "12s", sub: "Estimated from employee scores" },
                  { label: "Escalation rate", val: "0%", sub: "0 below threshold" },
                  { label: "Greeting compliance", val: "99%", sub: "Top 1% industry average" },
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

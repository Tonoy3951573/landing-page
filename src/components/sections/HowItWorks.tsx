import { motion } from "framer-motion"
import { Video, Cpu, BarChart, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    { title: "Connect Camera", desc: "Link any RTSP or IP camera in seconds.", icon: Video },
    { title: "AI Analysis", desc: "Our models detect faces, expressions, and tone.", icon: Cpu },
    { title: "Rate Behavior", desc: "Interactions are scored against your rubric.", icon: BarChart },
    { title: "Improve Service", desc: "Identify top performers and at-risk staff.", icon: TrendingUp },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground">From camera to business impact in four simple steps.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-glow-secondary relative overflow-hidden group">
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

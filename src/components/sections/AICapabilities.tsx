import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function AICapabilities() {
  const capabilities = [
    "Facial Expressions",
    "Smile Consistency",
    "Politeness Detection",
    "Raised Tone Alerts",
    "Entry/Exit Greetings",
    "Warmth Scoring",
    "Empathy Confidence",
    "Escalation Tracking"
  ]

  return (
    <section className="py-24 bg-black/30 border-y border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Advanced <span className="text-primary">Performance Analysis</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our proprietary computer vision and audio models are trained specifically to evaluate customer service interactions, scoring tone, facial expressions, and compliance automatically.
            </p>
          </motion.div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

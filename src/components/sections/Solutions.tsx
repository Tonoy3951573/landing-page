import { motion } from "framer-motion"
import { Store, Landmark, Utensils } from "lucide-react"

export function Solutions() {
  const solutions = [
    {
      title: "Retail & Boutiques",
      description: "Ensure every shopper receives a warm welcome. Track greeting compliance and measure the impact of positive staff interactions on conversion rates.",
      icon: Store,
      metrics: ["Greeting Compliance", "Staff Engagement", "Shopper Sentiment"]
    },
    {
      title: "Banking & Finance",
      description: "Maintain peak professionalism at teller stations. Monitor tone of voice to de-escalate disputes and ensure high standards of customer respect.",
      icon: Landmark,
      metrics: ["Politeness Scoring", "Escalation Rate", "Tone Analysis"]
    },
    {
      title: "Hospitality & QSR",
      description: "Deliver smiles at scale. Measure smile consistency at checkout counters and drive-thrus to guarantee a positive brand experience for every guest.",
      icon: Utensils,
      metrics: ["Smile Consistency", "Speed of Service", "Greeting on Entry"]
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="solutions">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Intelligence for <span className="text-gradient">Every Industry</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Adapt our AI support models to fit the unique customer service standards of your business sector.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                <solution.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 relative z-10">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                {solution.description}
              </p>
              
              <div className="space-y-2 relative z-10">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Key Metrics Tracked</div>
                {solution.metrics.map(metric => (
                  <div key={metric} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                    <span className="text-white/80">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

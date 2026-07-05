import { motion } from "framer-motion"
import { MonitorPlay, ShieldAlert, BarChart3, Users, Store, Fingerprint } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Facial Expression Analysis",
      description: "Measure smiling frequency and positive customer-facing presence in real-time.",
      icon: MonitorPlay,
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Tone & Politeness",
      description: "Evaluate politeness, calm tone, and respectfulness automatically.",
      icon: ShieldAlert,
      colSpan: "col-span-1",
    },
    {
      title: "Greeting Compliance",
      description: "Track entry greetings and courteous closures for every interaction.",
      icon: BarChart3,
      colSpan: "col-span-1",
    },
    {
      title: "Role-based Access",
      description: "Secure permissions for managers and staff.",
      icon: Fingerprint,
      colSpan: "col-span-1",
    },
    {
      title: "Branch Health",
      description: "Monitor escalation rates and response times across all locations.",
      icon: Store,
      colSpan: "col-span-1 md:col-span-2",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            The only platform that can <br className="hidden md:block" />
            <span className="text-gradient">empower your team</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for enterprise operations to ensure consistent customer service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel p-8 rounded-3xl group hover:border-primary/50 transition-colors ${feature.colSpan}`}
            >
              <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

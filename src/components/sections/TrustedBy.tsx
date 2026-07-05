import { motion } from "framer-motion"

export function TrustedBy() {
  const technologies = ["RTSP", "ONVIF", "AI", "Cloud", "Enterprise"]
  
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Compatible with Industry Standards
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold tracking-tighter"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

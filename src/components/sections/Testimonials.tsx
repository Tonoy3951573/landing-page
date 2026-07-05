import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Shinka Dynamics completely transformed how we monitor our retail stores. The AI insights helped us optimize staffing during peak hours instantly.",
      author: "Sarah Jenkins",
      role: "VP of Operations",
      company: "Nordic Retail",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "We connected our existing 200+ cameras in under an hour. No hardware costs, just immediate value and incredibly accurate behavioral analytics.",
      author: "David Chen",
      role: "Chief Security Officer",
      company: "Metro Logistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "The heatmaps and customer journey tracking provided data we never knew we needed. It's like having a team of analysts working 24/7.",
      author: "Elena Rodriguez",
      role: "Director of Customer Experience",
      company: "Apex Malls",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ]

  return (
    <section className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Trusted by forward-thinking teams
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/40 border-white/5">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.quote}"</p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{t.author}</div>
                      <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

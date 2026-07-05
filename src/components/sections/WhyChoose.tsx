import { motion } from "framer-motion"
import { Zap, Lock, Scaling, Video, Building2, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export function WhyChoose() {
  const reasons = [
    { title: "Fast Setup", desc: "Deploy in minutes, not months. No specialized hardware required.", icon: Zap },
    { title: "Secure", desc: "AES-256 encrypted storage. Secure cloud architecture.", icon: Lock },
    { title: "Scalable", desc: "Handles hundreds of cameras seamlessly without breaking a sweat.", icon: Scaling },
    { title: "Existing Cameras", desc: "Works with your current RTSP/ONVIF/IP cameras.", icon: Video },
    { title: "Enterprise Ready", desc: "RBAC, multi-site management, and dedicated support.", icon: Building2 },
    { title: "Cloud Dashboard", desc: "Access your intelligence anywhere, anytime.", icon: Cloud },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Choose <span className="text-gradient">X-Manager</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/40 border-white/5 hover:border-primary/30 transition-colors group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

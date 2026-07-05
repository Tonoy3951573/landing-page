import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

interface FinalCTAProps {
  onTryItOut?: () => void
}

export function FinalCTA({ onTryItOut }: FinalCTAProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -z-10 mix-blend-screen opacity-50" />
      
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
            Ready to Make Your Cameras <span className="text-gradient">Smarter?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Join hundreds of forward-thinking enterprises using X-Manager to unlock real-time team support insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button variant="gradient" size="lg" className="group w-full sm:w-auto text-lg px-8 h-14" onClick={onTryItOut}>
              Client Log In
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"
import { VideoOff, BrainCircuit } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export function ProblemSolution() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Traditional cameras <span className="text-muted-foreground">only record.</span><br />
            X-Manager <span className="text-gradient">understands.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-muted-foreground/30 to-primary/50" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-muted-foreground/20 bg-black/40">
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                  <VideoOff className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Standard Video Capture</h3>
                  <p className="text-muted-foreground">Hours of unanalyzed footage. Requires constant manual review. Reactive instead of proactive.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-primary/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shadow-glow-primary">
                  <BrainCircuit className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Active Intelligence</h3>
                  <p className="text-muted-foreground">Real-time support, service excellence insights, and operational understanding extracted automatically.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

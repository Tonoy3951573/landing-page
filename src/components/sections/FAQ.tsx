import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      q: "What types of cameras are supported?",
      a: "Shinka Dynamics is fully hardware-agnostic and works seamlessly with your existing infrastructure. We support all standard RTSP, ONVIF, and IP cameras, meaning you can plug our intelligence layer directly into the security system you already have."
    },
    {
      q: "Do I need to buy new hardware?",
      a: "No specialized hardware is required. Our platform operates entirely in the cloud, allowing you to deploy in minutes, not months. As long as your existing cameras can stream video over your network, you are ready to go."
    },
    {
      q: "How accurate is the AI detection?",
      a: "Our advanced AI behavior models are highly accurate and process video feeds in real-time. By leveraging state-of-the-art computer vision and sentiment analysis, the system consistently and accurately tracks facial expressions, verbal tones, and greeting compliance to provide reliable, actionable insights for branch health."
    },
    {
      q: "Is the video data secure?",
      a: "Security and privacy are built into our foundation. All credentials and sensitive data are secured using AES-256 encryption, and we employ Server-Side Encryption for cloud storage. Additionally, our platform includes enterprise-grade security features like Role-Based Access Control (RBAC) to ensure only authorized personnel can view sensitive data."
    }
  ]

  return (
    <section className="py-24 relative border-y border-white/5 bg-black/20" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index }: { faq: { q: string, a: string }, index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-semibold text-lg">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

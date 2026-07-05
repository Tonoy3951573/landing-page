import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, Check, ExternalLink, X } from "lucide-react"
import { Button } from "./Button"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPassword, setCopiedPassword] = useState(false)

  const email = "guest@shinkadynamics.com"
  const password = "DemoUser2026!"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const copyToClipboard = (text: string, type: 'email' | 'password') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPassword(true)
      setTimeout(() => setCopiedPassword(false), 2000)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-panel border border-white/10 rounded-2xl w-full max-w-md overflow-hidden pointer-events-auto relative shadow-2xl"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Guest Access</h3>
                <p className="text-muted-foreground mb-8">
                  Use the following credentials to access the Shinka Dynamics interactive demo environment.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email / Username</label>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-sm">
                      <span className="text-white truncate">{email}</span>
                      <button 
                        onClick={() => copyToClipboard(email, 'email')}
                        className="ml-3 p-2 hover:bg-white/10 rounded-md transition-colors text-muted-foreground hover:text-white flex-shrink-0"
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Password</label>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-sm">
                      <span className="text-white truncate">{password}</span>
                      <button 
                        onClick={() => copyToClipboard(password, 'password')}
                        className="ml-3 p-2 hover:bg-white/10 rounded-md transition-colors text-muted-foreground hover:text-white flex-shrink-0"
                      >
                        {copiedPassword ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://app.shinkadynamics.com" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={onClose}
                  className="block"
                >
                  <Button variant="gradient" className="w-full h-12 text-base">
                    Log in to Dashboard
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

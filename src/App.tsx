import React, { useState } from 'react'
import { Hero } from './components/sections/Hero'
import { TrustedBy } from './components/sections/TrustedBy'
import { ProblemSolution } from './components/sections/ProblemSolution'
import { Solutions } from './components/sections/Solutions'
import { Features } from './components/sections/Features'
import { DashboardShowcase } from './components/sections/DashboardShowcase'
import { HowItWorks } from './components/sections/HowItWorks'
import { AICapabilities } from './components/sections/AICapabilities'
import { WhyChoose } from './components/sections/WhyChoose'
import { Testimonials } from './components/sections/Testimonials'
import { Pricing } from './components/sections/Pricing'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Footer } from './components/sections/Footer'
import { Button } from './components/ui/Button'
import { DemoModal } from './components/ui/DemoModal'

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f141c]/70 backdrop-blur-xl border-b border-white/5 h-16 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-glow-primary">
              <span className="font-bold text-white">SD</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">Shinka Dynamics</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Platform</a>
            <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="glass" size="sm" onClick={() => setIsDemoModalOpen(true)}>
              Try It Out
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero onTryItOut={() => setIsDemoModalOpen(true)} />
        <TrustedBy />
        <ProblemSolution />
        <Solutions />
        <Features />
        <DashboardShowcase />
        <HowItWorks />
        <AICapabilities />
        <WhyChoose />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <FAQ />
        <FinalCTA onTryItOut={() => setIsDemoModalOpen(true)} />
      </main>

      <Footer />
    </div>
  )
}

export default App

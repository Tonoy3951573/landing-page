import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "For small businesses with single locations.",
      price: "$99",
      features: ["Up to 5 cameras", "7-day video retention", "Basic AI analytics", "Email support"],
      popular: false
    },
    {
      name: "Business",
      desc: "For growing teams with multiple locations.",
      price: "$299",
      features: ["Up to 25 cameras", "30-day video retention", "Advanced behavioral AI", "Priority support", "Custom alerts"],
      popular: true
    },
    {
      name: "Enterprise",
      desc: "For large scale operations and custom needs.",
      price: "Custom",
      features: ["Unlimited cameras", "Unlimited retention", "Custom AI model training", "Dedicated success manager", "SSO & RBAC", "API Access"],
      popular: false
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="text-muted-foreground">Start free, scale when you need to.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-secondary to-primary rounded-full text-xs font-bold text-foreground z-10 shadow-glow-primary">
                  Most Popular
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(56,189,248,0.15)] bg-white/10' : 'bg-black/40 border-white/5'}`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground min-h-[40px]">{plan.desc}</p>
                  </div>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "gradient" : "glass"} className="w-full">
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

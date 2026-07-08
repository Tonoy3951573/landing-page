

export function Footer() {
  const links = {
    Company: ["About", "Careers", "Blog", "Contact"],
    Product: ["Features", "Pricing", "Case Studies", "Documentation"],
    Legal: ["Privacy Policy", "Terms of Service", "Security"],
  }

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center">
                <img src="/logo.png" alt="Shinka Dynamics Logo" className="h-10 w-auto object-contain" />
              </div>
              <span className="font-bold text-xl">Shinka Dynamics</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The AI-powered video intelligence platform that transforms existing cameras into smart team support tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.Company.map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.Product.map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.Legal.map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shinka Dynamics Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span>System Status: <span className="text-emerald-400 font-medium">All systems operational</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

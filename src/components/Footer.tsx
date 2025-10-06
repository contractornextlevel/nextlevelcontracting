import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Next Level Contracting" className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70">
              Premium tools and equipment for professionals who demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#featured" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#collections" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#new-arrivals" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#top-sellers" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Email: info@nextlevel.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Hours: Mon-Fri 9am-6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2025 Next Level Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

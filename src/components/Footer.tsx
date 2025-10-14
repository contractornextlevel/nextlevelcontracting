import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Next Level Contracting" 
              className="h-12 w-auto" 
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Your trusted marketplace for quality products at unbeatable prices. From tools to home essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-primary-foreground text-lg">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/products" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">All Products</span>
                </Link>
              </li>
              <li>
                <a href="/#featured" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Featured</span>
                </a>
              </li>
              <li>
                <a href="/#top-sellers" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Top Sellers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-primary-foreground text-lg">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
                </Link>
              </li>
              <li>
                <a href="/#" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Shipping Info</span>
                </a>
              </li>
              <li>
                <a href="/#" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Returns</span>
                </a>
              </li>
              <li>
                <a href="/#" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-primary-foreground text-lg">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Kitchener, Ontario</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contractornextlevel@gmail.com" className="hover:text-accent transition-colors">
                  contractornextlevel@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+15197781439" className="hover:text-accent transition-colors">
                  +1 (519) 778-1439
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mon-Fri 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Next Level Contracting. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

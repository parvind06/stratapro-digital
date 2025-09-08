import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Youtube,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" }
  ];

  const services = [
    { name: "IT Consulting", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Database Management", href: "#services" },
    { name: "Technical Support", href: "#services" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/data-protection" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest technology trends, tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button variant="hero">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold text-primary mb-4">
                Insanger Technologies Pvt.Ltd
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner in digital transformation and technology excellence. 
                We help businesses leverage cutting-edge technology to achieve their goals.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">info@insanger.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">NxOne Commercial, sector-1, Techzone-4</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-fast"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-fast"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect With Us
              </h4>
              <p className="text-muted-foreground mb-4">
                Follow us for the latest tech updates and insights.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-2">
                  Business Hours
                </h5>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Mon - Fri: 8AM - 6PM EST</p>
                  <p>Saturday: 9AM - 3PM EST</p>
                  <p>Sunday: Emergency only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Insanger Technologies Pvt.Ltd. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-fast"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
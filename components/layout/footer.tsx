import Link from "next/link"
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Repair Request", href: "/repair-request" },
    { name: "Find Heroes", href: "/repair-heroes" },
    { name: "DIY Tutorials", href: "/tutorials" },
    { name: "Live Chat", href: "/chat" },
  ],
  community: [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Success Stories", href: "#stories" },
    { name: "Blog", href: "#blog" },
    { name: "Forum", href: "#forum" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Safety Guidelines", href: "#safety" },
    { name: "Become a Hero", href: "#hero-signup" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Careers", href: "#careers" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                RepairNet
              </span>
            </Link>

            <p className="text-white/70 mb-6 leading-relaxed">
              Building a sustainable future through community-driven repair networks. Fix it, don't bin it!
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center text-white/60 hover:text-white/80 transition-colors duration-200">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                hello@repairnet.in
              </div>
              <div className="flex items-center text-white/60 hover:text-white/80 transition-colors duration-200">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                +91 98765 43210
              </div>
              <div className="flex items-center text-white/60 hover:text-white/80 transition-colors duration-200">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                Mumbai, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-blue-300 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-purple-300 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-pink-300 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-green-300 transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0 flex items-center">
              © 2024 RepairNet India. Made with <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
              for a sustainable future.
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

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

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 relative z-10 max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-4 md:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 min-w-0">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent truncate">
                RepairNet
              </span>
            </Link>

            <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              Building a sustainable future through community-driven repair networks. Fix it, don't bin it!
            </p>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center text-white/60 hover:text-white/80 transition-colors duration-200 min-w-0">
                <Mail className="w-4 h-4 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                <span className="truncate text-xs sm:text-sm">hello@repairnet.in</span>
              </div>
              <div className="flex items-center text-white/60 hover:text-white/80 transition-colors duration-200">
                <Phone className="w-4 h-4 mr-2 sm:mr-3 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-white/60 hover:text-white/80 transition-colors duration-200">
                <MapPin className="w-4 h-4 mr-2 sm:mr-3 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base truncate">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-blue-300 transition-all duration-200 hover:translate-x-1 inline-block text-xs sm:text-sm truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="min-w-0">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base truncate">Community</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-purple-300 transition-all duration-200 hover:translate-x-1 inline-block text-xs sm:text-sm truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="min-w-0">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base truncate">Support</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-pink-300 transition-all duration-200 hover:translate-x-1 inline-block text-xs sm:text-sm truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base truncate">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-green-300 transition-all duration-200 hover:translate-x-1 inline-block text-xs sm:text-sm truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left flex items-center justify-center sm:justify-start flex-wrap gap-1">
              <span className="block sm:inline">© 2025 RepairNet India.</span>
              <span className="flex items-center justify-center gap-1">
                Made with
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 animate-pulse flex-shrink-0" />
                for a sustainable future.
              </span>
            </div>

            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 flex-shrink-0"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
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

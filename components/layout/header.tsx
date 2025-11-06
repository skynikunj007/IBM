"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Recycle, Sparkles } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Heroes", href: "/repair-heroes" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-4 right-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "top-2 sm:top-2" : "top-4 sm:top-4"
      }`}
    >
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl shadow-blue-500/20 px-2 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group pl-1 sm:pl-2 min-w-max">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/30">
                <Recycle className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse">
                <Sparkles className="w-2 h-2 text-white p-0.5" />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent hidden sm:inline-block">
              RepairNet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`relative px-3 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm ${
                    pathname === item.href
                      ? "bg-white/20 text-white shadow-lg shadow-blue-500/20 backdrop-blur-sm"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 pr-2">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-105 text-sm px-4 py-2"
              >
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 text-sm shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Sign up</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 sm:w-80 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-xl border-l border-white/20 p-4"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base sm:text-lg font-medium text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-t border-white/20 pt-6 space-y-3">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="w-full rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white transition-all duration-300 text-sm"
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 text-sm">
                      Sign up free
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

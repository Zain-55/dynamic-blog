'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Search, LogIn } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
 
]

const getRandomColor = () => {
  const colors = ['#FF6347', '#3CB371', '#90EE90', '#FFA500', '#483D8B'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-bold text-white">
              <span className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Logo
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="relative text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: getRandomColor() }}
                    initial={false}
                    whileHover={{ opacity: 1 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              onSubmit={handleSearch}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-white" />
              </button>
            </motion.form>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navItems.length + 1) * 0.1 }}
            >
              <button className="flex items-center space-x-2 bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 mr-2"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button className="text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              <LogIn size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}


"use client"
import { Download, Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 py-10 mt-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-3">
                <img src="/logo.png" alt="Islem's Portfolio" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">Islem's Portfolio</h2>
            </div>
            <div className="max-w-[300px] mt-6 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
              <p className="text-white/70 italic text-sm leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works."
                <span className="block mt-2 text-white/50 text-xs">- Steve Jobs</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6 tracking-tight">Contact me</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+213672443287"
                  className="flex items-center text-secondary/90 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3 text-white" />
                  <span>+213 672 44 32 87 / +213 552 94 29 54</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:islemcharafeddine85@gmail.com"
                  className="flex items-center text-secondary/90 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3 text-white" />
                  <span>islemcharafeddine85@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center text-secondary/90">
                  <MapPin className="w-5 h-5 mr-3 text-white" />
                <span>Sidi Bel Abbes, Algeria</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6 tracking-tight">Connect with me</h3>

            <div className="flex flex-wrap gap-4 mb-6">
              <motion.a
                href="https://github.com/Islemourred"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-tertiary hover:text-white transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/islem-ourred-02380327a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-tertiary hover:text-white transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/islem_ord/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-tertiary hover:text-white transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>

            <div className="mt-auto">
              <motion.a
                href="/Islem's_CV.pdf"
                download
                className="group flex items-center justify-center gap-2 bg-tertiary py-3 px-6 rounded-lg text-white font-medium shadow-lg shadow-tertiary/30 hover:bg-secondary transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </motion.a>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/70 text-sm">Open to freelance opportunities and collaborations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-secondary/80 text-sm">
            © {currentYear} <span className="text-white ml-1">Ourred Islem Charaf Eddine</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

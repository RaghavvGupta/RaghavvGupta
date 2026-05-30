"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function FloatingSocial() {
  return (
    <div className="fixed left-4 bottom-10 flex flex-col gap-3 z-50 hidden md:flex">
      <motion.a
        href="https://github.com/RaghavvGupta"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        className="bg-black text-white p-3 rounded-full shadow-md"
      >
        <Github size={20} />
        <span className="sr-only">GitHub</span>
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/raghavgupta30/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        className="bg-blue-600 text-white p-3 rounded-full shadow-md"
      >
        <Linkedin size={20} />
        <span className="sr-only">LinkedIn</span>
      </motion.a>
    </div>
  )
}

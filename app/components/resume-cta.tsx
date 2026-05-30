"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function ResumeCTA() {
  return (
    <motion.a
      href="https://drive.google.com/file/d/11MlfJV2z4oaK9HlbDy5cVMIf6Wk1n-gx/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-purple-600 text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-lg z-50 hidden md:flex"
    >
      <FileText size={18} />
      Check Resume
    </motion.a>
  )
}

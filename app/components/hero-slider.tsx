"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const backgrounds = [
  {
    id: 1,
    src: "/images/bg-product.png",
    alt: "Product Management Background",
  },
  {
    id: 2,
    src: "/images/bg-tech.webp",
    alt: "Technology Background",
  },
  {
    id: 3,
    src: "/images/bg-data.webp",
    alt: "Data Visualization Background",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrent((current) => (current === backgrounds.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? backgrounds.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={backgrounds[current].src || "/placeholder.svg"}
            alt={backgrounds[current].alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Raghav Gupta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mt-2"
          >
            Product Portfolio · Growth Strategy · Real-World PM Decks
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 text-white rounded-full hover:bg-black/40 z-10"
        onClick={() => {
          setAutoplay(false)
          prevSlide()
        }}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white rounded-full hover:bg-black/40 z-10"
        onClick={() => {
          setAutoplay(false)
          nextSlide()
        }}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

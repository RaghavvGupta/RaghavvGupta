"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background/80 -z-10" />

      {/* Decorative tech elements */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20 w-64 h-64 -z-10">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Tech Pattern"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-10 left-5 md:left-20 opacity-10 w-48 h-48 -z-10">
        <Image
          src="/placeholder.svg?height=192&width=192"
          alt="Cloud Computing"
          width={192}
          height={192}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Hi, I&apos;m Raghav Gupta — I turn complex problems into elegant product solutions.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground mb-8">
                Associate Software Engineer @ Tech Mahindra | Ex-Growth & Product Analyst @ Blue Max Industries | B.Tech
                Graduate | Data-driven thinker and builder.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#work">
                <Button size="lg" className="w-full sm:w-auto">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1jASvByV2EIrbzjgzZBkTMBp6ThV-GsyN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Check out my Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Product Management Illustration"
                width={600}
                height={500}
                className="object-contain"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

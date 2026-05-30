"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto md:mx-0"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 -z-10 transform rotate-3" />
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image src="/raghav-profile.jpg" alt="Raghav Gupta" fill className="object-cover rounded-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground mb-4">
            I'm Raghav, an Associate Software Engineer at Tech Mahindra with a background in Product Growth Analysis.
            During my time at Blue Max Industries, I optimized user acquisition and retention strategies, boosting the
            user base by 12%+ in just 6 months and improving retention by 35%.
          </p>
          <p className="text-muted-foreground mb-4">
            My experience spans from conducting market research and competitive analysis to collaborating with
            cross-functional teams to enhance product usability. I've worked on projects ranging from smart traffic
            management systems to data acquisition for ATVs.
          </p>
          <p className="text-muted-foreground mb-6">
            I hold a B.Tech degree from Maharaja Agrasen Institute of Technology with a CGPA of 8.42/10. My approach
            combines analytical rigor with creative problem-solving to build products that drive business growth through
            thoughtful design and strategic implementation.
          </p>
          <a
            href="https://drive.google.com/file/d/11MlfJV2z4oaK9HlbDy5cVMIf6Wk1n-gx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Check out my Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

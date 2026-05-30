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
            I'm Raghav, a Decision Analytics Associate at ZS Associates with expertise in product strategy, growth analysis, and cloud infrastructure. Currently, I help global MedTech and biopharma clients solve complex business challenges through data-driven research and strategic analysis.
          </p>
          <p className="text-muted-foreground mb-4">
            My career spans product management at FairDeal.Market (increased DAU by 15%), cloud architecture at Tech Mahindra (designed AWS EKS solutions), product growth at Blue Max Industries (grew user base 12%+ and improved retention by 35%), and cross-functional engineering at Team Jatayu. I combine quantitative rigor with qualitative insights to build scalable solutions.
          </p>
          <p className="text-muted-foreground mb-4">
            Currently, I'm building an AI-powered intelligent ticket routing and resolution agent using RAG to help enterprises automate support ticket triage and resolution at scale.
          </p>
          <p className="text-muted-foreground mb-6">
            I hold a B.Tech from Maharaja Agrasen Institute of Technology (CGPA 8.42/10). My approach combines deep product thinking with technical implementation—solving high-impact problems at the intersection of AI, product, and growth strategy.
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

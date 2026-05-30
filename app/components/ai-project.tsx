"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, Brain, BarChart3, Clock, Target } from "lucide-react"

const problemPoints = [
  { icon: Clock, text: "Manual ticket triaging takes 3-5 hours per 100 tickets" },
  { icon: BarChart3, text: "Misrouted tickets increase resolution time by 40%" },
  { icon: Target, text: "Inconsistent resolutions lead to customer dissatisfaction" },
]

const solutionFeatures = [
  { title: "Intelligent Classification", desc: "Uses RAG + LLM to understand ticket context and classify with 95%+ accuracy" },
  { title: "Smart Routing", desc: "Routes tickets to the right team/expert based on complexity, domain, and workload" },
  { title: "Priority Assessment", desc: "Dynamically prioritizes tickets based on urgency, impact, and customer value" },
  { title: "Resolution Assistance", desc: "Suggests solutions from knowledge base and past tickets for faster resolution" },
  { title: "Analytics & Insights", desc: "Tracks metrics: resolution time, ticket routing accuracy, cost savings" },
  { title: "Enterprise Ready", desc: "Secure, scalable, and customizable for different support organizations" },
]

const techStack = [
  "LLMs (Claude/GPT-4)",
  "Retrieval-Augmented Generation (RAG)",
  "Vector Embeddings",
  "Python",
  "AWS/Cloud",
  "FastAPI",
]

const metrics = [
  { label: "Reduction in Manual Work", value: "70-80%" },
  { label: "Faster Resolution", value: "2-3x" },
  { label: "Routing Accuracy", value: "95%+" },
  { label: "Cost Savings", value: "40-50%" },
]

export default function AIProject() {
  return (
    <section id="ai-project" className="py-20 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Currently Building
          </Badge>
        </div>
        <h2 className="text-4xl font-bold mb-4">
          AI-Powered Intelligent Ticket Routing & Resolution Agent
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Enterprise-grade agentic AI system that automatically classifies, routes, prioritizes, and helps resolve support
          tickets using advanced Retrieval-Augmented Generation (RAG).
        </p>
      </motion.div>

      {/* Problem Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8">The Problem</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemPoints.map((point, index) => (
            <Card key={index} className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-destructive/10 p-3 mb-4">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-sm font-medium">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Solution Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8">The Solution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionFeatures.map((feature, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Expected Outcomes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-8">Expected Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Architecture & Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-8">Tech Stack & Architecture</h3>
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold mb-6 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Architecture Highlights
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">RAG pipeline for context-aware ticket understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Multi-agent orchestration for routing & resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Real-time feedback loop for continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

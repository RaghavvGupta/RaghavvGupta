"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Users, Cloud, Code, ListTodo, Users2 } from "lucide-react"

const skills = [
  {
    title: "Product Strategy & Market Research",
    icon: LineChart,
    description: "Analyzing market trends and developing product strategies that align with business goals.",
  },
  {
    title: "User Research & Data Analysis",
    icon: Users,
    description:
      "Conducting user interviews and analyzing data to derive actionable insights using tools like Mixpanel and AWS QuickSight.",
  },
  {
    title: "DevOps & Cloud Technologies",
    icon: Cloud,
    description:
      "Working with AWS (EC2, ECR, EKS, IAM, S3), Docker, Kubernetes, and CI/CD pipelines using Jenkins/GitLabs.",
  },
  {
    title: "Programming & Development",
    icon: Code,
    description: "Proficient in Python, C/C++, Shell scripting, and version control with Git/GitHub/GitLabs.",
  },
  {
    title: "Agile & Project Management",
    icon: ListTodo,
    description: "Implementing Agile methodologies, OKRs, and using tools like JIRA for effective project management.",
  },
  {
    title: "Cross-functional Collaboration",
    icon: Users2,
    description:
      "Working effectively with engineering, design, and business teams to define and analyze requirements and dependencies.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills & Capabilities</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My toolkit for building and growing successful products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

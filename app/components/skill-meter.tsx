"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const technicalSkills = [
  { name: "Product Strategy", level: 90 },
  { name: "Data Analysis", level: 85 },
  { name: "DevOps", level: 90 },
  { name: "Python", level: 60 },
  { name: "C/C++", level: 90 },
  { name: "AWS", level: 65 },
  { name: "Docker", level: 90 },
  { name: "Git", level: 85 },
]

export default function SkillMeter() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Proficiency</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A quantitative look at my technical skills and expertise
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

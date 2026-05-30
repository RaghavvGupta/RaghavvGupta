"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between mb-1">
                  <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto mt-1 md:mt-0">
                    <Calendar className="w-3 h-3" />
                    <span>2020 - 2024</span>
                  </div>
                </div>

                <p className="text-primary font-medium">Maharaja Agrasen Institute of Technology</p>
                <p className="text-sm text-muted-foreground mb-4">Delhi, India</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="font-medium">CGPA:</span>
                  <span className="text-muted-foreground">8.42/10.0</span>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Co-curricular Activities:</h4>
                  <ul className="space-y-1 list-disc pl-5">
                    <li className="text-muted-foreground">
                      President, Literary Umbrella (Official literary society of MAIT)
                    </li>
                    <li className="text-muted-foreground">Editor of the Annual Placement brochure of MAIT</li>
                    <li className="text-muted-foreground">USG Delegate Affairs, Secretariat of Columban MUN</li>
                    <li className="text-muted-foreground">Won awards in Quizzing, MUNs, Debates</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

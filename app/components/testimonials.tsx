"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Engineering Manager",
    company: "Tech Mahindra",
    avatar: "/placeholder.svg?height=40&width=40&text=AS",
    content:
      "Raghav has a unique ability to bridge technical and business perspectives. His analytical approach to problem-solving and product development is impressive.",
  },
  {
    name: "Priya Patel",
    role: "Product Lead",
    company: "Blue Max Industries",
    avatar: "/placeholder.svg?height=40&width=40&text=PP",
    content:
      "Working with Raghav was a pleasure. His data-driven approach to growth and product analysis helped us make informed decisions that significantly improved our user metrics.",
  },
  {
    name: "Vikram Singh",
    role: "Technical Director",
    company: "Team Jatayu",
    avatar: "/placeholder.svg?height=40&width=40&text=VS",
    content:
      "Raghav's contributions to our data acquisition systems were invaluable. He has a strong technical foundation combined with excellent communication skills.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Feedback from colleagues and mentors I've worked with</p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="relative h-80">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                x: index === activeIndex ? 0 : 100,
                zIndex: index === activeIndex ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Card className="h-full">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="text-lg italic mb-6">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-primary/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

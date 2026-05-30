"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone } from "lucide-react"
import ContactForm from "./contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects,
                opportunities, or partnerships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:raghavgupta.ai@gmail.com" className="hover:text-primary transition-colors">
                  raghavgupta.ai@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+919654927196" className="hover:text-primary transition-colors">
                  +91-9654927196
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="https://linkedin.com/in/raghavgupta30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/raghavgupta30
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="https://github.com/RaghavvGupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/RaghavvGupta
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

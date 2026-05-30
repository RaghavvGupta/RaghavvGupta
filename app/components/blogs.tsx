"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import Image from "next/image"

const blogs = [
  {
    title: "Role of DevOps in Space Exploration with a Focus on Chandrayaan-3",
    description: "Analyzing the critical role of DevOps methodologies in successful space missions like Chandrayaan-3.",
    link: "https://raghavv.hashnode.dev/role-of-devops-in-space-exploration-with-a-focus-on-chandrayaan-3",
    image: "/images/space-devops.png",
  },
  {
    title: "What is Docker?!",
    description:
      "A comprehensive guide to Docker, containerization, and its importance in modern software development.",
    link: "https://raghavv.hashnode.dev/what-is-docker",
    image: "/images/docker-blog.png",
  },
  {
    title: "Medium Articles",
    description:
      "Collection of articles on various tech topics including AI, product development, and software engineering.",
    link: "https://medium.com/@raghavgupta.ai",
    image: "/images/medium-articles.png",
  },
]

export default function Blogs() {
  return (
    <section id="blogs" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Blogs</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sharing insights and knowledge about technology and product development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={`/placeholder.svg?height=192&width=400&text=${encodeURIComponent(blog.title)}`}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-muted-foreground">{blog.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Read Article
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

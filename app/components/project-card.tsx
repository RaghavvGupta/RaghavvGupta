"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="h-full overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4">
              <Badge variant="outline" className="bg-primary/80 border-primary text-white mb-2">
                {project.type}
              </Badge>
              <h3 className="text-xl font-semibold mt-2 text-white">{project.title}</h3>
            </div>
          </div>
        </div>

        <CardContent className="flex-grow p-6">
          <p className="text-muted-foreground">{project.summary}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 border-t">
          <Button variant="outline" className="w-full" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              View PDF
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

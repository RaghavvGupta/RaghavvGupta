"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./project-card"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Get unique tags from all projects
const allTags = ["All", ...new Set(projects.flatMap((project) => [project.type, ...project.tags]))]

export default function WorkShowcase() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter || project.tags.includes(activeFilter))

  return (
    <section id="work" className="py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">My Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of Product Requirement Documents (PRDs), Case Studies, and Product Strategy Decks that showcase
          my analytical thinking and product development skills.
        </p>
      </motion.div>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className={cn(
              "cursor-pointer text-sm py-1 px-3 hover:bg-primary/10 transition-all",
              activeFilter === tag ? "bg-primary/10 border-primary" : "",
            )}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Hash, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Raghav Gupta. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">Built with ❤️ using Next.js and TailwindCSS</p>
            <div className="flex items-center space-x-2">
              <a
                href="https://linkedin.com/in/raghavgupta30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/RaghavvGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://raghavv.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Hash className="h-5 w-5" />
                <span className="sr-only">Hashnode</span>
              </a>
              <a
                href="https://medium.com/@raghavgupta.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span className="sr-only">Medium</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

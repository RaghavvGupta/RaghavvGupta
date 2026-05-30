import Link from "next/link"
import WorkShowcase from "./components/work-showcase"
import Skills from "./components/skills"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Experience from "./components/experience"
import Education from "./components/education"
import Blogs from "./components/blogs"
import Testimonials from "./components/testimonials"
import SkillMeter from "./components/skill-meter"
import { ThemeToggle } from "@/components/theme-toggle"
import FloatingSocial from "./components/floating-social"
import ResumeCTA from "./components/resume-cta"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import HeroSlider from "./components/hero-slider"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Raghav Gupta</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#work" className="transition-colors hover:text-foreground/80">
                Portfolio
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://drive.google.com/file/d/11MlfJV2z4oaK9HlbDy5cVMIf6Wk1n-gx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Check Resume</Button>
            </a>
          </div>
        </div>
      </header>

      <HeroSlider />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WorkShowcase />
        <Experience />
        <Skills />
        <SkillMeter />
        <Education />
        <Testimonials />
        <Blogs />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingSocial />
      <ResumeCTA />
    </div>
  )
}

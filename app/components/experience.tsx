"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Tech Mahindra",
    period: "Sept 2024 – Present",
    location: "Bangalore",
    logo: "/images/tech-mahindra-logo.png",
    description: [
      "Participated in comprehensive training covering C++, Agile, Cloud Computing, Linux, SQL, etc. enhancing foundational knowledge in DevOps and Product Management.",
    ],
  },
  {
    title: "Growth and Product Analyst Intern",
    company: "Blue Max Industries",
    period: "Jan 2024 - Aug 2024",
    location: "India",
    logo: "/images/blue-max-logo.png",
    description: [
      "Optimized user acquisition, retention, and monetization strategies, boosting user base by 12%+ in 6 months.",
      "Conducted market research competitive analysis to inform product roadmap.",
      "Collaborated with teams to enhance product usability, increasing engagement metrics.",
      "Led projects to streamline onboarding, improving retention by 35% (Data from 2018-2024).",
      "Reported key performance metrics to senior management, guiding strategic decisions.",
    ],
  },
  {
    title: "Data Acquisition Engineer",
    company: "Team Jatayu",
    period: "2022",
    location: "Delhi",
    logo: "/images/team-jatayu-logo.png",
    description: [
      "Collaborated with 40 engineering students to design and develop an ATV focused on data acquisition.",
      "Conducted requirement analysis with stakeholders and cross-functional teams to specify sensor installation and data collection parameters.",
      "Implemented & installed various sensors on the ATV, ensuring accurate data acquisition and analysis.",
      "Engaged with product, engineering, & business teams to define & analyze vehicle requirements & cross-functional dependencies.",
      "Delivered insightful business presentations, effectively conveying technical concepts & project progress to stakeholders.",
    ],
  },
  {
    title: "Technical Writer - Open Source",
    company: "GirlScript Foundation",
    period: "Sept 2021 – Nov 2021",
    location: "Remote",
    logo: "/images/girlscript-logo.png",
    description: [
      "Researched and documented about various IT softwares present in the industry.",
      "Documented various C++ data structures and algorithms.",
      "Emerged as the 'Second-Top contributor' in the open source domain.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 opacity-5 -z-10">
        <Image
          src="/placeholder.svg?height=256&width=256&text=AWS"
          alt="AWS"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 opacity-5 -z-10">
        <Image
          src="/placeholder.svg?height=256&width=256&text=Jenkins"
          alt="Jenkins"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My journey building products and solving complex problems
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start md:justify-center"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 md:order-1 md:ml-4">
              <Briefcase className="w-5 h-5" />
            </div>

            <Card className="w-full max-w-xl md:max-w-2xl md:mr-4 md:order-0">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={`/placeholder.svg?height=64&width=64&text=${encodeURIComponent(experience.company)}`}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <Badge variant="outline" className="flex items-center gap-1 ml-auto mt-1 md:mt-0">
                        <Calendar className="w-3 h-3" />
                        {experience.period}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <p className="text-primary font-medium">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.location}</p>
                    </div>

                    <ul className="space-y-2 list-disc pl-5">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

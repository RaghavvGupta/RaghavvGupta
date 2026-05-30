"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Decision Analytics Associate",
    company: "ZS Associates",
    period: "Jun 2025 - Present",
    location: "Gurgaon",
    logo: "/images/zsassociates-logo.png",
    description: [
      "Defined key business questions and designed quantitative/qualitative research approaches for global MedTech & biopharma clients across US, EU, LATAM, & APAC markets.",
      "Led a 5-country (US, DE, BR, CN, KSA) quantitative Willingness-to-Pay study for an upcoming vaccine at AstraZeneca, building pricing & affordability models.",
      "Built scenario-based Excel analysis workbook for Thermo Fisher Scientific, enabling segmentation, competitive, and pricing evaluation.",
      "Delivered a 6-country Qual+Quant NPD study for Roche Diagnostics, analyzing feature prioritization for next-generation diagnostic analyzer.",
    ],
  },
  {
    title: "Product Manager",
    company: "FairDeal.Market",
    period: "May 2025 - June 2025",
    location: "Gurgaon",
    logo: "/images/fairdeal-logo.png",
    description: [
      "Worked as a Product Manager to write insightful PRDs and define product strategy.",
      "Led the campaign OneFairYear from planning to execution, increasing DAU by 15%.",
      "Worked with various stakeholders to align business goals and conducted user research to understand pain points.",
      "Implemented product suggestions and improvements that were executed in further sprints.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Tech Mahindra",
    period: "Sept 2024 – Apr 2025",
    location: "Bangalore",
    logo: "/images/tech-mahindra-logo.png",
    description: [
      "Designed & deployed a full-stack application on AWS EKS with high availability, scalability, and security across multi-AZ VPCs.",
      "Automated AWS infrastructure using modular Terraform scripts (VPC, EKS, IAM, RDS, S3).",
    ],
  },
  {
    title: "Product Growth Analyst",
    company: "Blue Max Industries",
    period: "Jan 2023 - Aug 2024",
    location: "Remote",
    logo: "/images/blue-max-logo.png",
    description: [
      "Optimized user acquisition, retention, and monetization strategies, boosting user base by 12%+ in 6 months.",
      "Conducted market research and competitive analysis to inform product roadmap.",
      "Collaborated with teams to enhance product usability, increasing engagement metrics.",
      "Led projects to streamline onboarding, improving retention by 35% (Data from 2018-2024).",
    ],
  },
  {
    title: "Data Acquisition Engineer",
    company: "Team Jatayu",
    period: "Jan 2022 - Dec 2022",
    location: "Delhi",
    logo: "/images/team-jatayu-logo.png",
    description: [
      "Collaborated with 40 engineering students to design and develop an ATV focused on data acquisition.",
      "Conducted requirement analysis with stakeholders and cross-functional teams to specify sensor installation and data collection parameters.",
      "Implemented & installed various sensors on the ATV, ensuring accurate data acquisition and analysis.",
      "Engaged with product, engineering, & business teams to define & analyze vehicle requirements & cross-functional dependencies.",
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

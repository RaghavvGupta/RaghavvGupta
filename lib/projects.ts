export interface Project {
  id: string
  title: string
  type: "PRD" | "Case Study" | "Deck" | "Project"
  summary: string
  link: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "cred-market-analysis",
    title: "CRED Garage Market Analysis",
    type: "Case Study",
    summary: "An in-depth analysis of CRED's entry into the used car market with CRED Garage.",
    link: "https://github.com/RaghavvGupta/Product-Management/blob/main/CRED.pdf",
    image: "/images/cred-garage.jpg",
    tags: ["Fintech", "Marketplace", "Analysis"],
  },
  {
    id: "swiggy-revenue-dip",
    title: "Swiggy Case Study: Revenue Dip Analysis",
    type: "Case Study",
    summary:
      "Analyzed a 30% drop in revenue using user behavior patterns and funnel metrics; proposed tactical + strategic fixes.",
    link: "https://github.com/RaghavvGupta/Product-Management/blob/main/Swiggy.pdf",
    image: "/images/swiggy-logo.jpg",
    tags: ["Marketplace", "Food Tech", "Analysis"],
  },
  {
    id: "focusflow",
    title: "FocusFlow: AI-Powered Task Management",
    type: "PRD",
    summary: "Product requirements for an AI-powered task management application to boost productivity.",
    link: "https://github.com/RaghavvGupta/Product-Management/blob/main/FocusFlow_PRD.pdf",
    image: "/images/focusflow.png",
    tags: ["Productivity", "AI", "SaaS"],
  },
  {
    id: "omnify-prd",
    title: "Omnify: Fitness Business Management",
    type: "PRD",
    summary: "Product requirements document for a comprehensive fitness business management platform.",
    link: "https://github.com/RaghavvGupta/Product-Management/blob/main/Omnify_PRD.pdf",
    image: "/images/omnify-logo.jpg",
    tags: ["Fitness", "SaaS", "Management"],
  },
  {
    id: "upraised-funnel",
    title: "Upraised KYS Funnel Optimization",
    type: "PRD",
    summary: "Optimization strategy for Upraised's Know Your Self assessment funnel to improve completion rates.",
    link: "https://github.com/RaghavvGupta/Product-Management/blob/main/UPRAISED_KYS_PRD.pdf",
    image: "/images/upraised-logo.png",
    tags: ["EdTech", "Conversion", "UX"],
  },
  {
    id: "travel-planner",
    title: "Group Travel Planner Product",
    type: "PRD",
    summary: "Product requirements for a collaborative travel planning platform for groups.",
    link: "https://github.com/RaghavvGupta/Product-Management/blob/main/TravelApp_PRD.pdf",
    image: "/images/group-travel.jpg",
    tags: ["Travel", "Collaboration", "Mobile"],
  },
  {
    id: "traffic-management",
    title: "Smart Traffic Management System",
    type: "Project",
    summary: "YOLOv8-powered traffic analysis tool for real-time congestion detection and route optimization.",
    link: "https://github.com/RaghavvGupta/Product-Management",
    image: "/images/traffic-management.png",
    tags: ["IoT", "Smart City", "Engineering"],
  },
]

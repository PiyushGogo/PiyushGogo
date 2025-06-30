import {
  Calendar,
  MapPin,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  Code,
  Zap,
} from "lucide-react"

const experiences = [
  {
    id: 1,
    type: "work",
    period: "2023 - 2025",
    title: "Frontend Software Developer",
    company: "Ocean ThinkIT",
    jobType: "Full-time",
    location: "Remote",
    description:
      "For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    achievements: [
      "Led frontend development for 3 major products",
      "Improved user engagement by 40%",
      "Reduced load times by 60%",
      "Mentored 2 junior developers",
    ],
    projects: [
      { name: "AI Interview Platform", impact: "10k+ users" },
      { name: "Dental Job Marketplace", impact: "500+ dentists" },
      { name: "Prize Game System", impact: "1M+ interactions" },
    ],
  },
  {
    id: 2,
    type: "work",
    period: "2022 - 2023",
    title: "Junior Frontend Developer",
    company: "TechStart Solutions",
    jobType: "Full-time",
    location: "New York, NY",
    description:
      "Developed responsive web applications using React and modern JavaScript. Collaborated with design teams to implement pixel-perfect UI components and worked closely with backend developers to integrate APIs.",
    skills: ["React", "JavaScript", "CSS3", "HTML5", "Git", "Figma"],
    achievements: [
      "Built 15+ responsive web components",
      "Increased mobile performance by 35%",
      "Collaborated with 5+ cross-functional teams",
      "Delivered projects 20% ahead of schedule",
    ],
    projects: [
      { name: "E-commerce Platform", impact: "50k+ users" },
      { name: "Dashboard Analytics", impact: "100+ clients" },
    ],
  },
  {
    id: 3,
    type: "work",
    period: "2021 - 2022",
    title: "Frontend Developer Intern",
    company: "Digital Innovations Lab",
    jobType: "Internship",
    location: "San Francisco, CA",
    description:
      "Gained hands-on experience in modern web development practices. Contributed to open-source projects and learned industry best practices for code quality and team collaboration.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    achievements: [
      "Contributed to 3 open-source projects",
      "Completed 10+ coding challenges",
      "Received 'Outstanding Intern' award",
    ],
    projects: [
      { name: "Company Website Redesign", impact: "200% traffic increase" },
      { name: "Internal Tools", impact: "Team productivity +30%" },
    ],
  },
  {
    id: 4,
    type: "education",
    period: "2018 - 2022",
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    jobType: "Degree",
    location: "California, USA",
    description:
      "Focused on software engineering, data structures, algorithms, and web development. Participated in hackathons and coding competitions. Graduated Magna Cum Laude with a 3.8 GPA.",
    skills: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Database Design"],
    achievements: [
      "Graduated Magna Cum Laude (3.8 GPA)",
      "Won 2 hackathon competitions",
      "President of Computer Science Club",
      "Dean's List for 6 semesters",
    ],
    projects: [
      { name: "Final Year Project", impact: "Published research paper" },
      { name: "Hackathon Winner", impact: "$5k prize" },
    ],
  },
  {
    id: 5,
    type: "certification",
    period: "2023",
    title: "AWS Certified Developer",
    company: "Amazon Web Services",
    jobType: "Certification",
    location: "Online",
    description:
      "Earned AWS Developer Associate certification demonstrating expertise in developing and maintaining applications on the AWS platform.",
    skills: ["AWS", "Lambda", "DynamoDB", "S3", "CloudFormation"],
    achievements: ["Passed with 850/1000 score", "Completed 40+ hands-on labs"],
  },
]

const stats = [
  { icon: Code, label: "Projects Completed", value: "25+", color: "text-blue-400" },
  { icon: Users, label: "Team Members Led", value: "8", color: "text-green-400" },
  { icon: TrendingUp, label: "Performance Improvement", value: "60%", color: "text-purple-400" },
  { icon: Award, label: "Awards Received", value: "5", color: "text-yellow-400" },
]

export default function WorkExperience3() {
  const getTypeIcon = (type) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-4 h-4" />
      case "education":
        return <GraduationCap className="w-4 h-4" />
      case "certification":
        return <Award className="w-4 h-4" />
      default:
        return <Briefcase className="w-4 h-4" />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-cyan-500"
      case "education":
        return "from-green-500 to-emerald-500"
      case "certification":
        return "from-purple-500 to-pink-500"
      default:
        return "from-blue-500 to-purple-500"
    }
  }

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-white text-2xl font-bold tracking-wider mb-12">WORK EXPERIENCE</h2>

        {/* Work Experience Entry */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Date */}
          <div className="md:col-span-1">
            <span className="text-gray-400 text-lg">2023 - 2025</span>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {/* Job Title */}
            <h3 className="text-white text-xl font-bold mb-2">Frontend Software Developer</h3>

            {/* Company Info */}
            <p className="text-gray-400 mb-6">Ocean ThinkIT • Full-time</p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              For the past two years, I have primarily worked with startups, developing products from the ground up. I
              have led the frontend development of an AI-powered Interview Platform, building a job marketplace for
              dentists, and creating a system for managing promotional prize games.
            </p>
          </div>
        </div>

        {/* Additional Experience Entries */}
        {experiences.slice(1).map((experience, index) => (
          <div key={experience.id} className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {/* Date */}
            <div className="md:col-span-1">
              <span className="text-gray-400 text-lg">{experience.period}</span>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              {/* Job Title */}
              <h3 className="text-white text-xl font-bold mb-2">{experience.title}</h3>

              {/* Company Info */}
              <p className="text-gray-400 mb-6">
                {experience.company} • {experience.jobType}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

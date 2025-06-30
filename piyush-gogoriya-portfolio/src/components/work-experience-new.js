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

export default function WorkExperienceNew() {
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
    <section className="bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wider mb-6 relative">
            PROFESSIONAL JOURNEY
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </h2>
          <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            My career evolution from student to senior developer, showcasing growth, achievements, and continuous
            learning
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-xl group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-pink-500 rounded-full"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-20 last:mb-0">
              {/* Timeline Dot */}
              <div
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r ${getTypeColor(experience.type)} rounded-full border-4 border-gray-900 z-10 flex items-center justify-center shadow-lg`}
              >
                <div className="text-white text-xs">{getTypeIcon(experience.type)}</div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer relative overflow-hidden">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(experience.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Period Badge */}
                  <div
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${getTypeColor(experience.type)}/20 border border-current/30 rounded-full px-5 py-3 mb-6 group-hover:scale-105 transition-all duration-300`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold text-sm">{experience.period}</span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {experience.title}
                  </h3>

                  {/* Company Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(experience.type)}
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <span className="bg-gray-700/50 px-3 py-1 rounded-full text-xs">{experience.jobType}</span>
                    {experience.location && (
                      <>
                        <span className="text-gray-600">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300 text-lg">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span>Technologies & Skills</span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-700/50 border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {experience.projects && (
                    <div className="mb-8">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                        <Code className="w-5 h-5 text-green-400" />
                        <span>Key Projects</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {experience.projects.map((project, projectIndex) => (
                          <div
                            key={projectIndex}
                            className="bg-gray-700/30 border border-gray-600 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                          >
                            <div className="font-semibold text-white mb-1">{project.name}</div>
                            <div className="text-gray-400 text-sm">{project.impact}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <span>Key Achievements</span>
                    </h4>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors duration-300 group/achievement"
                      >
                        <div
                          className={`w-3 h-3 bg-gradient-to-r ${getTypeColor(experience.type)} rounded-full mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300`}
                        ></div>
                        <span className="text-base leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${getTypeColor(experience.type)} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-20">
          <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg">
            <span className="flex items-center gap-3">
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              Download Full Resume
            </span>
          </button>

          <button className="group bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 text-lg">
            <span className="flex items-center gap-3">
              <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Let's Connect
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

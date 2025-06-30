import { Calendar, MapPin, Briefcase, ChevronRight, ExternalLink } from "lucide-react"

const workExperience = [
  {
    id: 1,
    period: "2023 - 2025",
    title: "Frontend Software Developer",
    company: "Ocean ThinkIT",
    type: "Full-time",
    location: "Remote",
    description:
      "For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Led frontend development for 3 major products",
      "Improved user engagement by 40%",
      "Reduced load times by 60%",
    ],
  },
  // You can add more experiences here
]

export default function WorkExperience() {
  return (
    <section className="bg-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider mb-4 relative">
            WORK EXPERIENCE
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </h2>
          <p className="text-gray-400 text-lg mt-6">My professional journey and achievements</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {workExperience.map((experience, index) => (
            <div key={experience.id} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 animate-pulse"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 font-medium text-sm">{experience.period}</span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {experience.title}
                  </h3>

                  {/* Company Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <span>{experience.type}</span>
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
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>Technologies Used</span>
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-700/50 border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>Key Achievements</span>
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                    </h4>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="flex items-center gap-2">
              View Full Resume
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

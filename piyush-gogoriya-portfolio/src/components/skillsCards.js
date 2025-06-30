import { Wind, Globe, Palette, Scissors, CheckCircle } from "lucide-react"

const techStack = [
  {
    name: "React",
    icon: (
      <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center relative">
        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        <div
          className="absolute w-6 h-6 border border-cyan-400 rounded-full animate-spin"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>
    ),
    color: "text-cyan-400",
    hoverColor: "hover:border-cyan-300",
    glowColor: "hover:shadow-cyan-400/50",
  },
  {
    name: "Next JS",
    icon: (
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <span className="text-black font-bold text-lg">N</span>
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-white",
    glowColor: "hover:shadow-white/50",
  },
  {
    name: "JavaScript",
    icon: (
      <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
        <span className="text-black font-bold text-sm">JS</span>
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-yellow-400",
    glowColor: "hover:shadow-yellow-400/50",
  },
  {
    name: "TypeScript",
    icon: (
      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm">TS</span>
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-blue-400",
    glowColor: "hover:shadow-blue-400/50",
  },
  {
    name: "Tailwind",
    icon: <Wind className="w-8 h-8 text-cyan-400" />,
    color: "text-gray-300",
    hoverColor: "hover:border-cyan-400",
    glowColor: "hover:shadow-cyan-400/50",
  },
  {
    name: "HTML",
    icon: (
      <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
        <Globe className="w-5 h-5 text-white" />
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-orange-400",
    glowColor: "hover:shadow-orange-400/50",
  },
  {
    name: "CSS",
    icon: (
      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
        <Palette className="w-5 h-5 text-white" />
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-blue-400",
    glowColor: "hover:shadow-blue-400/50",
  },
  {
    name: "SCSS",
    icon: (
      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
        <Scissors className="w-5 h-5 text-white" />
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-pink-400",
    glowColor: "hover:shadow-pink-400/50",
  },
  {
    name: "Cypress",
    icon: (
      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
        <CheckCircle className="w-5 h-5 text-white" />
      </div>
    ),
    color: "text-gray-300",
    hoverColor: "hover:border-green-400",
    glowColor: "hover:shadow-green-400/50",
  },
]

export default function TechStack() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-white text-2xl font-bold mb-12 tracking-wider">TECH STACK</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`
                bg-gray-800/50 border border-gray-700 rounded-lg p-6 
                flex flex-col items-center justify-center space-y-4 
                transition-all duration-300 ease-in-out cursor-pointer
                hover:scale-105 hover:bg-gray-800/80 
                hover:shadow-lg hover:shadow-2xl
                ${tech.hoverColor} ${tech.glowColor}
                group
              `}
            >
              <div className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {tech.icon}
              </div>
              <span
                className={`text-sm font-medium ${tech.color} transition-colors duration-300 group-hover:text-white`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

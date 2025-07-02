"use client"

import { useState, useEffect } from "react"
import { MapPin, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="bg-gray-900 min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Piyush
                  </span>
                </h1>
                <p className="text-2xl text-gray-400 mb-2">Frontend Software Developer</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/piyush-gogoriya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/PiyushGogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:piyushgogoriya0312@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 relative group">
                {/* Simple Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                  <img
                    src="/placeholder.svg?height=320&width=320"
                    alt="Piyush Gogoriya"
                    className="w-full h-full rounded-full object-cover bg-gray-900 transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

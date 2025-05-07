"use client"

import { Database, Code2, Server, Layout, Layers, GitBranch } from "lucide-react"
import { useEffect, useState } from "react"

const skills = [
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-pink-500" />,
    items: ["Laravel", "PHP", "MySQL", "API Development"],
  },
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 text-violet-500" />,
    items: ["HTML5", "CSS3", "JavaScript","React", "Bootstrap"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8 text-pink-500" />,
    items: ["MySQL", "SQL", "Database Design"],
  },
  {
    category: "Development",
    icon: <Code2 className="h-8 w-8 text-violet-500" />,
    items: ["Full Stack Development", "RESTful APIs", "MVC Architecture"],
  },
  {
    category: "Tools",
    icon: <GitBranch className="h-8 w-8 text-pink-500" />,
    items: ["Git", "GitHub", "VS Code", "Composer"],
  },
  {
    category: "Frameworks",
    icon: <Layers className="h-8 w-8 text-violet-500" />,
    items: ["Laravel", "Bootstrap", "jQuery"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills")
      if (element) {
        const position = element.getBoundingClientRect()
        // Si la sección está visible en el viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Comprobar visibilidad inicial

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center mb-4">
            {skill.icon}
            <h3 className="text-xl font-semibold ml-3">{skill.category}</h3>
          </div>
          <ul className="space-y-2">
            {skill.items.map((item, idx) => (
              <li key={idx} className="flex items-center text-zinc-700 dark:text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

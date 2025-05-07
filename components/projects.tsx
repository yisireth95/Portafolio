"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button-simple"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "Totolad Pyme",
    description:
      "Totolad is a landing page for a small business that sells children's furniture.Full web application for inventory management using Laravel, HTML, CSS, and Bootstrap.",
    image: "/imagen1.png?height=400&width=600",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    demoLink: "#",
    codeLink: "https://github.com/yisireth95/Totolanmu.git",
  },
  {
    title: "Dolce-Luna",
    description:
      "Dolce-luna is a beautifully designed landing page created for a bakery, showcasing its products and services. Full web application for inventory management using Laravel, HTML, CSS, and Bootstrap.",
    image: "/imagen3.png?height=400&width=600",
    tags: ["Laravel", "Vue.js", "MySQL", "API REST"],
    demoLink: "#",
    codeLink: "https://github.com/yisireth95/dolceluna1.git",
  },
  {
    title: "Mia Beauty Salon ",
    description:
      "Mia Beauty Salon is a landing page designed to showcase the services and style of a modern beauty salon. Full web application for inventory management using Laravel, HTML, CSS, and Bootstrap.",
    image: "/imagen4.png?height=400&width=600",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    demoLink: "#",
    codeLink: "https://github.com/yisireth95/SalonMiaStudio.git",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Extraer todas las tecnologías únicas para los filtros
  const allTags = ["Todos", ...Array.from(new Set(projects.flatMap((project) => project.tags)))]

  // Filtrar proyectos cuando cambia el filtro activo
  useEffect(() => {
    if (activeFilter === "Todos") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.tags.includes(activeFilter)))
    }
  }, [activeFilter])

  // Detectar cuando la sección es visible para animar
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects")
      if (element) {
        const position = element.getBoundingClientRect()
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
    <>
      {/* Filtros de proyectos */}
      <div className={`flex flex-wrap justify-center gap-2 mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        {allTags.map((tag, index) => (
          <Button
            key={index}
            variant={activeFilter === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(tag)}
            className={activeFilter === tag ? "bg-pink-500 hover:bg-pink-600" : ""}
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Demo <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Código <Github className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

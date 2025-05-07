"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Menu } from "lucide-react"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Testimonials from "@/components/testimonials"
import { useState, useEffect } from "react"

// Importamos el botón simplificado
import { Button } from "@/components/ui/button-simple"

export default function Home() {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para controlar las animaciones
  const [isLoaded, setIsLoaded] = useState(false)

  // Activar animaciones después de que el componente se monte
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Función simple para alternar el tema sin depender de ThemeProvider
  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white">
      {/* Header/Navigation */}
      <header
        className={`container mx-auto py-6 px-4 flex justify-between items-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
      >
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Yisireth Murcia Ortiz
        </h1>
        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-pink-400 transition-colors">
                  About me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-pink-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-400 transition-colors">
                  Proyects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-pink-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full border-zinc-300 dark:border-zinc-700"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Menú móvil */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4 z-50 animate-fade-in">
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Proyects
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className={`md:w-1/2 mb-10 md:mb-0 ${isLoaded ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold mb-4">
            Jr Full Stack {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Developer
            </span>
          </h2>
          <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8">
          Specialized in creating modern and functional web experiences using Laravel, PHP, JavaScript, React, and more
          </p>
          <div className="flex space-x-4">
            <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
              <a href="#contact" className="flex items-center">
                Contáctame <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <a href="#projects" className="flex items-center">
                Ver Proyectos <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className={`md:w-1/2 flex justify-center ${isLoaded ? "animate-fade-up animate-delay-200" : "opacity-0"}`}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg shadow-pink-500/20">
            <Image
              src="/yisireth.jpg?height=320&width=320"
              alt="Yisireth Murcia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-50 dark:bg-zinc-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            "I am a Full Stack developer passionate about creating elegant and functional web solutions.
             With experience in Laravel, PHP, JavaScript, and other modern technologies,
              I specialize in developing robust and scalable web applications.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
            My approach combines strong technical skills with an eye for design, ensuring that each project not
             only works flawlessly
             but also delivers an exceptional user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
             Skills
            </span>
          </h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-zinc-50 dark:bg-zinc-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Proyects
            </span>
          </h2>
          <Projects />
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Testimonios
            </span>
          </h2>
          <Testimonials />
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-50 dark:bg-zinc-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Contáct me
            </span>
          </h2>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Yisireth Murcia Ortiz. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://github.com/yisireth95/Yisireth_Murcia.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="www.linkedin.com/in/yisireth-murcia-ortiz-0b2380184"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:yisireth95@gmail.com"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

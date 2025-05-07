"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-zinc-700 dark:text-zinc-300">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4 z-50">
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}

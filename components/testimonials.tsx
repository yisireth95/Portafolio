"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "CEO, TechSolutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Yisireth desarrolló un sistema de gestión para nuestra empresa que superó todas nuestras expectativas. Su atención al detalle y capacidad para entender nuestras necesidades fue excepcional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura Martínez",
    role: "Directora de Marketing, EduOnline",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Trabajar con Yisireth en nuestra plataforma educativa fue una experiencia increíble. Entregó el proyecto a tiempo y con una calidad excepcional. Definitivamente volveremos a trabajar juntos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Miguel Sánchez",
    role: "Editor Jefe, NoticiasDiarias",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Nuestro portal de noticias necesitaba una renovación completa y Yisireth lo logró perfectamente. El sistema es rápido, intuitivo y exactamente lo que necesitábamos.",
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Detectar cuando la sección es visible para animar
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("testimonials")
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="relative bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-pink-500">
            <Image
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i + testimonials[currentIndex].rating} className="w-5 h-5 text-zinc-300 dark:text-zinc-600" />
            ))}
          </div>

          <blockquote className="text-lg italic text-zinc-700 dark:text-zinc-300 mb-6">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div>
            <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
            <p className="text-zinc-600 dark:text-zinc-400">{testimonials[currentIndex].role}</p>
          </div>
        </div>

        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-pink-500" : "bg-zinc-300 dark:bg-zinc-700"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

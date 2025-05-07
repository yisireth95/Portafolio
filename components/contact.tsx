"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button-simple"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Realizamos la solicitud al backend
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      console.log('Resultado del servidor:', result); // Agrega esta línea para depurar
  
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert('Hubo un problema al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error de conexión:', error); // Agrega esta línea para capturar errores
      alert('Error de conexión');
    } finally {
      setIsSubmitting(false);
    }
  
    // Resetear el mensaje de éxito después de 5 segundos
    setTimeout(() => setSubmitSuccess(false), 5000);
  };
  

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-pink-500"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-pink-500"
            />
          </div>
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-pink-500"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-pink-500 min-h-[150px]"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>

          {submitSuccess && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-md text-green-700 dark:text-green-200">
              Message sent successfully! I’ll get in touch with you soon.
            </div>
          )}
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-pink-500 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <p className="text-zinc-600 dark:text-zinc-400">yisireth95@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-6 w-6 text-violet-500 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-medium">Phone</h4>
              <p className="text-zinc-600 dark:text-zinc-400">+34 607014228</p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-pink-500 mr-4 mt-1" />
            <div>
              <h4 className="text-lg font-medium">Location</h4>
              <p className="text-zinc-600 dark:text-zinc-400">Spain</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <h4 className="text-lg font-medium mb-3">Working hours</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">Full time Monday - Friday </p>
            <p className="text-zinc-600 dark:text-zinc-400">Weekends: Available for urgent projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

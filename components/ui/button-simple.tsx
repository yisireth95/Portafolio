import * as React from "react"

// Versión simplificada del botón sin dependencias externas
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    // Clases base
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    // Clases de variante
    const variantClasses = {
      default: "bg-pink-500 text-white hover:bg-pink-600",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-zinc-300 dark:border-zinc-700 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",
      secondary:
        "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700",
      ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",
      link: "text-pink-500 underline-offset-4 hover:underline",
    }

    // Clases de tamaño
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return <button className={classes} ref={ref} {...props} />
  },
)

Button.displayName = "Button"

"use client"

import * as React from "react"
import Link from "next/link"
import { Scissors } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerStyle, 
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Corte de cabello",
    href: "/servicios/corte-de-cabello",
    description: "Cortes personalizados para todos los estilos.",
  },
  {
    title: "Coloración",
    href: "/servicios/coloracion",
    description: "Tintes y mechas para transformar tu look.",
  },
  {
    title: "Peinados",
    href: "/servicios/peinados",
    description: "Peinados para ocasiones especiales y día a día.",
  },
  {
    title: "Tratamientos",
    href: "/servicios/tratamientos",
    description: "Cuidados especiales para tu cabello.",
  },
]

export function Navbar() {
  return (
    <div className="bg-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Scissors className="h-6 w-6" />
          <span className="text-2xl font-bold">Peluquería Gisela</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-600">Servicios</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/galeria" legacyBehavior passHref>
                <NavigationMenuLink className={`${NavigationMenuTriggerStyle()} bg-transparent text-white hover:bg-purple-600`}>
                  Galería
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={`${NavigationMenuTriggerStyle()} bg-transparent text-white hover:bg-purple-600`}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" legacyBehavior passHref>
                <NavigationMenuLink className={`${NavigationMenuTriggerStyle()} bg-transparent text-white hover:bg-purple-600`}>
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex space-x-2">
          <Button variant="outline" className="text-white border-white hover:bg-purple-600">Iniciar Sesión</Button>
          <Button className="bg-white text-purple-700 hover:bg-gray-200">Reservar Cita</Button>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
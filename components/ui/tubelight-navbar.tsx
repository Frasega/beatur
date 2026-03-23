"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  // Scroll-based active tab detection
  useEffect(() => {
    const sectionItems = items.filter((item) => item.url.startsWith("#") && item.url !== "#")

    const handleScroll = () => {
      // At very top → Home
      if (window.scrollY < 80) {
        setActiveTab(items[0].name)
        return
      }

      // Find the section currently in view (bottom-up so last match wins)
      const triggerY = window.scrollY + window.innerHeight * 0.35

      let current = items[0].name
      for (const item of sectionItems) {
        const el = document.getElementById(item.url.slice(1))
        if (el && el.offsetTop <= triggerY) {
          current = item.name
        }
      }
      setActiveTab(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // run once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-4",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-white/90 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors",
                "text-gray-600 hover:text-[#CC0000]",
                isActive && "text-[#CC0000]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#CC0000]/8 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#CC0000] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#CC0000]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#CC0000]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#CC0000]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

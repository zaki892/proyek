"use client"

import { LayoutDashboard, ClipboardList, GraduationCap, BarChart3, Settings, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: ClipboardList, label: "Asesmen", href: "/asesmen" },
  { icon: GraduationCap, label: "Jurusan", href: "/jurusan" },
  { icon: BarChart3, label: "Analisis", href: "/analisis" },
  { icon: Settings, label: "Pengaturan", href: "/pengaturan" },
]

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  currentPath?: string
}

export function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen, currentPath = "/" }: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-64 border-r border-border bg-sidebar flex flex-col",
        "fixed lg:static inset-y-0 left-0 z-50 transition-transform duration-300",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      )}
    >
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-sidebar-foreground">EduPath</h2>
              <p className="text-xs text-muted-foreground">Sistem Pakar</p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-1 hover:bg-sidebar-accent rounded-md"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <nav className="flex-1 p-3 md:p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPath === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 md:p-4 border-t border-border">
        <p className="text-xs text-center text-muted-foreground">Akses Terbuka untuk Umum</p>
      </div>
    </aside>
  )
}

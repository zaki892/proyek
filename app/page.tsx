"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { StatsCards } from "@/components/stats-cards"
import { InterestChart } from "@/components/interest-chart"
import { RecommendedMajors } from "@/components/recommended-majors"
import { TalentRadar } from "@/components/talent-radar"
import { RecentAssessments } from "@/components/recent-assessments"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background dark">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} currentPath="/" />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-sm md:text-base text-muted-foreground">Sistem Pakar Penentuan Jurusan Kuliah</p>
          </div>

          <StatsCards />

          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            <InterestChart />
            <TalentRadar />
          </div>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecommendedMajors />
            </div>
            <div>
              <RecentAssessments />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

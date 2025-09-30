"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { InterestChart } from "@/components/interest-chart"
import { TalentRadar } from "@/components/talent-radar"
import { Brain, TrendingUp, Target, Lightbulb, Award, AlertCircle } from "lucide-react"

const personalityTraits = [
  { trait: "Analitis", score: 88, description: "Kemampuan menganalisis masalah dengan baik" },
  { trait: "Kreatif", score: 72, description: "Kemampuan berpikir out of the box" },
  { trait: "Komunikatif", score: 65, description: "Kemampuan berkomunikasi dengan orang lain" },
  { trait: "Teliti", score: 85, description: "Perhatian terhadap detail" },
  { trait: "Kepemimpinan", score: 58, description: "Kemampuan memimpin dan mengorganisir" },
]

const strengths = [
  "Kemampuan logika dan pemecahan masalah yang sangat baik",
  "Minat tinggi terhadap teknologi dan inovasi",
  "Kemampuan belajar mandiri yang kuat",
  "Keterampilan analisis data yang baik",
]

const improvements = [
  "Meningkatkan kemampuan komunikasi interpersonal",
  "Mengembangkan soft skills seperti public speaking",
  "Memperluas jaringan dan kolaborasi tim",
  "Melatih kemampuan kepemimpinan",
]

const recommendations = [
  {
    title: "Fokus pada Bidang Teknologi",
    description:
      "Hasil asesmen menunjukkan kesesuaian tinggi dengan jurusan berbasis teknologi seperti Teknik Informatika dan Sistem Informasi",
    icon: Target,
  },
  {
    title: "Kembangkan Soft Skills",
    description: "Untuk meningkatkan prospek karir, disarankan untuk mengembangkan kemampuan komunikasi dan kerja tim",
    icon: Lightbulb,
  },
  {
    title: "Ikuti Program Pengembangan",
    description:
      "Pertimbangkan untuk mengikuti bootcamp, workshop, atau kursus online untuk memperdalam keterampilan teknis",
    icon: Award,
  },
]

export default function AnalisisPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background dark">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} currentPath="/analisis" />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Analisis Mendalam</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Hasil analisis lengkap berdasarkan asesmen yang telah diselesaikan
            </p>
          </div>

          <Card className="p-6 bg-card border-primary/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Skor Kesesuaian Keseluruhan</h3>
                <p className="text-sm text-muted-foreground">Berdasarkan analisis minat, bakat, dan kepribadian Anda</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-4xl font-bold text-primary">85/100</div>
                  <div className="flex-1">
                    <Progress value={85} className="h-3" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            <InterestChart />
            <TalentRadar />
          </div>

          <Card className="p-6 bg-card">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Profil Kepribadian</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Analisis karakteristik kepribadian berdasarkan hasil asesmen
              </p>
              <div className="space-y-4 mt-4">
                {personalityTraits.map((item) => (
                  <div key={item.trait} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">{item.trait}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge variant={item.score >= 80 ? "default" : "secondary"}>{item.score}</Badge>
                    </div>
                    <Progress value={item.score} />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Kekuatan Anda</h3>
                </div>
                <ul className="space-y-3">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-pretty">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Area Pengembangan</h3>
                </div>
                <ul className="space-y-3">
                  {improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-pretty">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-card">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Rekomendasi Pengembangan</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                {recommendations.map((rec, index) => {
                  const Icon = rec.icon
                  return (
                    <div key={index} className="p-4 rounded-lg border border-border bg-background space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-balance">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground text-pretty">{rec.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>
        </main>

        <Footer />
      </div>
    </div>
  )
}

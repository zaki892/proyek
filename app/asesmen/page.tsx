"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ClipboardList, Clock, CheckCircle2, PlayCircle, ArrowRight } from "lucide-react"

const assessments = [
  {
    id: 1,
    title: "Tes Minat Akademik",
    description: "Mengukur minat Anda terhadap berbagai bidang akademik",
    duration: "15 menit",
    questions: 30,
    status: "completed",
    score: 85,
    category: "Minat",
  },
  {
    id: 2,
    title: "Tes Bakat Kognitif",
    description: "Menilai kemampuan logika, analisis, dan pemecahan masalah",
    duration: "20 menit",
    questions: 40,
    status: "completed",
    score: 78,
    category: "Bakat",
  },
  {
    id: 3,
    title: "Tes Kepribadian",
    description: "Memahami tipe kepribadian dan preferensi kerja Anda",
    duration: "10 menit",
    questions: 25,
    status: "in-progress",
    progress: 60,
    category: "Kepribadian",
  },
  {
    id: 4,
    title: "Tes Kemampuan Verbal",
    description: "Mengukur kemampuan komunikasi dan pemahaman bahasa",
    duration: "15 menit",
    questions: 35,
    status: "available",
    category: "Bakat",
  },
  {
    id: 5,
    title: "Tes Kemampuan Numerik",
    description: "Menilai kemampuan matematika dan analisis kuantitatif",
    duration: "20 menit",
    questions: 30,
    status: "available",
    category: "Bakat",
  },
  {
    id: 6,
    title: "Tes Kreativitas",
    description: "Mengukur kemampuan berpikir kreatif dan inovatif",
    duration: "15 menit",
    questions: 20,
    status: "available",
    category: "Bakat",
  },
]

export default function AsesmenPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const completedCount = assessments.filter((a) => a.status === "completed").length
  const totalCount = assessments.length

  return (
    <div className="flex min-h-screen bg-background dark">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} currentPath="/asesmen" />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Asesmen</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Ikuti berbagai tes untuk mengetahui minat dan bakat Anda
            </p>
          </div>

          <Card className="p-6 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">Progress Asesmen</h3>
                <p className="text-sm text-muted-foreground">
                  {completedCount} dari {totalCount} tes telah diselesaikan
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {Math.round((completedCount / totalCount) * 100)}%
                  </div>
                  <div className="text-xs text-muted-foreground">Selesai</div>
                </div>
              </div>
            </div>
            <Progress value={(completedCount / totalCount) * 100} className="mt-4" />
          </Card>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assessments.map((assessment) => (
              <Card key={assessment.id} className="p-6 bg-card hover:bg-accent/50 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant={assessment.status === "completed" ? "default" : "secondary"} className="text-xs">
                      {assessment.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-balance">{assessment.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{assessment.description}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClipboardList className="w-4 h-4" />
                      <span>{assessment.questions} soal</span>
                    </div>
                  </div>

                  {assessment.status === "completed" && (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Selesai</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{assessment.score}</span>
                    </div>
                  )}

                  {assessment.status === "in-progress" && (
                    <div className="space-y-2">
                      <Progress value={assessment.progress} />
                      <p className="text-xs text-muted-foreground text-center">{assessment.progress}% selesai</p>
                    </div>
                  )}

                  <Button
                    className="w-full"
                    variant={assessment.status === "available" ? "default" : "outline"}
                    disabled={assessment.status === "completed"}
                  >
                    {assessment.status === "completed" && "Lihat Hasil"}
                    {assessment.status === "in-progress" && (
                      <>
                        Lanjutkan
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                    {assessment.status === "available" && (
                      <>
                        Mulai Tes
                        <PlayCircle className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

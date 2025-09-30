"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { GraduationCap, Search, TrendingUp, MapPin, BookOpen, Users } from "lucide-react"

const majors = [
  {
    id: 1,
    name: "Teknik Informatika",
    category: "Teknologi",
    description: "Mempelajari pemrograman, algoritma, dan pengembangan perangkat lunak",
    universities: ["ITB", "UI", "UGM", "ITS"],
    matchScore: 92,
    prospects: "Sangat Tinggi",
    averageSalary: "8-15 juta",
    skills: ["Programming", "Problem Solving", "Logika"],
  },
  {
    id: 2,
    name: "Sistem Informasi",
    category: "Teknologi",
    description: "Menggabungkan teknologi informasi dengan manajemen bisnis",
    universities: ["UI", "ITS", "Binus", "Telkom"],
    matchScore: 88,
    prospects: "Sangat Tinggi",
    averageSalary: "7-12 juta",
    skills: ["Analisis Sistem", "Manajemen", "Database"],
  },
  {
    id: 3,
    name: "Teknik Elektro",
    category: "Sains",
    description: "Mempelajari sistem kelistrikan, elektronika, dan telekomunikasi",
    universities: ["ITB", "UGM", "ITS", "UI"],
    matchScore: 85,
    prospects: "Tinggi",
    averageSalary: "7-13 juta",
    skills: ["Matematika", "Fisika", "Analisis"],
  },
  {
    id: 4,
    name: "Ilmu Komputer",
    category: "Teknologi",
    description: "Fokus pada teori komputasi, algoritma, dan kecerdasan buatan",
    universities: ["UGM", "ITB", "UI", "IPB"],
    matchScore: 83,
    prospects: "Sangat Tinggi",
    averageSalary: "8-14 juta",
    skills: ["Algoritma", "AI/ML", "Matematika"],
  },
  {
    id: 5,
    name: "Desain Komunikasi Visual",
    category: "Seni",
    description: "Mempelajari desain grafis, multimedia, dan komunikasi visual",
    universities: ["ITB", "IKJ", "ISI", "Binus"],
    matchScore: 75,
    prospects: "Sedang",
    averageSalary: "5-10 juta",
    skills: ["Kreativitas", "Desain", "Komunikasi"],
  },
  {
    id: 6,
    name: "Psikologi",
    category: "Sosial",
    description: "Mempelajari perilaku manusia dan proses mental",
    universities: ["UI", "UGM", "Unpad", "Unair"],
    matchScore: 78,
    prospects: "Tinggi",
    averageSalary: "6-11 juta",
    skills: ["Empati", "Analisis", "Komunikasi"],
  },
  {
    id: 7,
    name: "Manajemen",
    category: "Bisnis",
    description: "Mempelajari pengelolaan organisasi dan strategi bisnis",
    universities: ["UI", "UGM", "ITB", "Unpad"],
    matchScore: 70,
    prospects: "Tinggi",
    averageSalary: "6-12 juta",
    skills: ["Leadership", "Strategi", "Komunikasi"],
  },
  {
    id: 8,
    name: "Kedokteran",
    category: "Kesehatan",
    description: "Mempelajari ilmu medis dan praktik kedokteran",
    universities: ["UI", "UGM", "Unair", "Unpad"],
    matchScore: 68,
    prospects: "Sangat Tinggi",
    averageSalary: "10-20 juta",
    skills: ["Biologi", "Empati", "Dedikasi"],
  },
]

const categories = ["Semua", "Teknologi", "Sains", "Seni", "Sosial", "Bisnis", "Kesehatan"]

export default function JurusanPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMajors = majors.filter((major) => {
    const matchesCategory = selectedCategory === "Semua" || major.category === selectedCategory
    const matchesSearch = major.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen bg-background dark">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} currentPath="/jurusan" />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Daftar Jurusan</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Jelajahi berbagai pilihan jurusan kuliah yang tersedia
            </p>
          </div>

          <Card className="p-4 md:p-6 bg-card">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Cari jurusan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            {filteredMajors.map((major) => (
              <Card key={major.id} className="p-6 bg-card hover:bg-accent/50 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground text-balance">{major.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {major.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xl font-bold">{major.matchScore}%</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Match</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-pretty">{major.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {major.universities.map((uni) => (
                          <Badge key={uni} variant="outline" className="text-xs">
                            {uni}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 flex-shrink-0" />
                      <span>Prospek: {major.prospects}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>Gaji: Rp {major.averageSalary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {major.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Lihat Detail
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredMajors.length === 0 && (
            <Card className="p-12 bg-card">
              <div className="text-center space-y-2">
                <GraduationCap className="w-12 h-12 text-muted-foreground mx-auto" />
                <h3 className="text-lg font-semibold text-foreground">Tidak ada jurusan ditemukan</h3>
                <p className="text-sm text-muted-foreground">Coba ubah filter atau kata kunci pencarian</p>
              </div>
            </Card>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}

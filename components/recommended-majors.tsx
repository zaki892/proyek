import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

const majors = [
  {
    name: "Teknik Informatika",
    university: "Institut Teknologi Bandung",
    match: 92,
    category: "Teknologi",
    description: "Cocok dengan minat teknologi dan kemampuan logika yang tinggi",
  },
  {
    name: "Sistem Informasi",
    university: "Universitas Indonesia",
    match: 88,
    category: "Teknologi",
    description: "Sesuai dengan kemampuan analitis dan minat bisnis",
  },
  {
    name: "Teknik Elektro",
    university: "Institut Teknologi Sepuluh Nopember",
    match: 85,
    category: "Sains",
    description: "Cocok dengan kemampuan teknis dan minat sains",
  },
  {
    name: "Ilmu Komputer",
    university: "Universitas Gadjah Mada",
    match: 83,
    category: "Teknologi",
    description: "Sesuai dengan minat teknologi dan kemampuan problem solving",
  },
]

export function RecommendedMajors() {
  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Rekomendasi Jurusan</h3>
            <p className="text-sm text-muted-foreground">Berdasarkan hasil analisis minat dan bakat</p>
          </div>
          <Button variant="ghost" size="sm">
            Lihat Semua
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="space-y-3">
          {majors.map((major) => (
            <div
              key={major.name}
              className="p-4 rounded-lg border border-border bg-background hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{major.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {major.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{major.university}</p>
                  <p className="text-sm text-muted-foreground">{major.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-2xl font-bold">{major.match}%</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Kesesuaian</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

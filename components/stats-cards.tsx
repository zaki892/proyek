import { Card } from "@/components/ui/card"
import { TrendingUp, Target, Award, CheckCircle } from "lucide-react"

const stats = [
  {
    label: "Asesmen Selesai",
    value: "12",
    change: "+2 minggu ini",
    icon: CheckCircle,
    trend: "up",
  },
  {
    label: "Tingkat Kesesuaian",
    value: "87%",
    change: "+5% dari sebelumnya",
    icon: Target,
    trend: "up",
  },
  {
    label: "Jurusan Direkomendasikan",
    value: "5",
    change: "Berdasarkan minat",
    icon: Award,
    trend: "neutral",
  },
  {
    label: "Skor Bakat",
    value: "8.5",
    change: "Dari skala 10",
    icon: TrendingUp,
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-4 md:p-6 bg-card">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground hidden md:block">{stat.change}</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

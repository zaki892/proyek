"use client"

import { Card } from "@/components/ui/card"

const data = [
  { category: "Sains", score: 85, color: "bg-blue-500" },
  { category: "Teknologi", score: 92, color: "bg-primary" },
  { category: "Seni", score: 65, color: "bg-purple-500" },
  { category: "Sosial", score: 78, color: "bg-green-500" },
  { category: "Bisnis", score: 70, color: "bg-orange-500" },
  { category: "Kesehatan", score: 60, color: "bg-red-500" },
]

export function InterestChart() {
  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Analisis Minat</h3>
          <p className="text-sm text-muted-foreground">Distribusi skor minat berdasarkan kategori</p>
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{item.category}</span>
                <span className="text-muted-foreground">{item.score}%</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

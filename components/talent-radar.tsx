"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const data = [
  { skill: "Logika", value: 85, color: "bg-blue-500" },
  { skill: "Kreativitas", value: 70, color: "bg-purple-500" },
  { skill: "Komunikasi", value: 80, color: "bg-green-500" },
  { skill: "Analitis", value: 90, color: "bg-primary" },
  { skill: "Kepemimpinan", value: 65, color: "bg-orange-500" },
  { skill: "Teknis", value: 88, color: "bg-cyan-500" },
]

export function TalentRadar() {
  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Pemetaan Bakat</h3>
          <p className="text-sm text-muted-foreground">Visualisasi kemampuan dan potensi</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{item.skill}</span>
                <Badge variant="secondary" className="text-xs">
                  {item.value}
                </Badge>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

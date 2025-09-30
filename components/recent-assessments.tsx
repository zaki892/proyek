import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock } from "lucide-react"

const assessments = [
  {
    title: "Tes Minat Holland",
    date: "2 hari lalu",
    status: "completed",
    score: 85,
  },
  {
    title: "Tes Kepribadian MBTI",
    date: "5 hari lalu",
    status: "completed",
    score: 78,
  },
  {
    title: "Tes Bakat Skolastik",
    date: "1 minggu lalu",
    status: "completed",
    score: 92,
  },
  {
    title: "Tes Minat Karir",
    date: "Belum selesai",
    status: "pending",
    score: null,
  },
]

export function RecentAssessments() {
  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Riwayat Asesmen</h3>
          <p className="text-sm text-muted-foreground">Asesmen yang telah dikerjakan</p>
        </div>

        <div className="space-y-3">
          {assessments.map((assessment) => (
            <div key={assessment.title} className="p-3 rounded-lg border border-border bg-background">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-medium text-foreground leading-tight">{assessment.title}</h4>
                  {assessment.status === "completed" ? (
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  ) : (
                    <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{assessment.date}</span>
                  {assessment.score && (
                    <Badge variant="secondary" className="text-xs">
                      Skor: {assessment.score}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

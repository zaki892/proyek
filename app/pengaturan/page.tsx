"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings, Bell, Shield, Palette, Download } from "lucide-react"

export default function PengaturanPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)

  return (
    <div className="flex min-h-screen bg-background dark">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentPath="/pengaturan"
      />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Pengaturan</h1>
            <p className="text-sm md:text-base text-muted-foreground">Kelola preferensi dan pengaturan aplikasi</p>
          </div>

          <div className="grid gap-4 md:gap-6 max-w-3xl">
            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Informasi Umum</h3>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" placeholder="Masukkan nama lengkap" defaultValue="Ahmad Syahid" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" defaultValue="ahmad@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school">Asal Sekolah</Label>
                    <Input id="school" placeholder="Nama sekolah" defaultValue="SMA Negeri 1" />
                  </div>
                  <Button>Simpan Perubahan</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Notifikasi</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">Notifikasi Push</p>
                      <p className="text-xs text-muted-foreground">Terima notifikasi tentang asesmen dan hasil</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">Email Updates</p>
                      <p className="text-xs text-muted-foreground">Terima update melalui email</p>
                    </div>
                    <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Tampilan</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Tema aplikasi saat ini: Dark Mode</p>
                  <Button variant="outline">Ubah Tema</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Data & Privasi</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Unduh atau hapus data asesmen Anda</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Unduh Data</Button>
                    <Button variant="outline">Hapus Riwayat</Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Tentang Aplikasi</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>EduPath - Sistem Pakar Penentuan Jurusan Kuliah</p>
                  <p>Versi 1.0.0</p>
                  <p className="text-pretty">
                    Aplikasi ini membantu siswa SMA menentukan jurusan kuliah yang sesuai dengan minat dan bakat mereka.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

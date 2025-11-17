import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Blocks, FileText, PieChart } from 'lucide-react'

function SectionCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-white/20">
      <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,255,255,0.25),rgba(255,255,255,0)_60%)] bg-slate-900 text-white">
      {/* hero with 3D card */}
      <Hero />

      {/* key actions */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <section id="campaigns" className="-mt-8 space-y-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-6 w-1 rounded bg-white/60" />
            <h2 className="text-xl font-semibold">Campaign Unggulan</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SectionCard icon={Blocks} title="Bantu UMKM" desc="Dukung usaha kecil dengan pendanaan transparan." />
            <SectionCard icon={Blocks} title="Teknologi Edukasi" desc="Dorong inovasi pendidikan berbasis komunitas." />
            <SectionCard icon={Blocks} title="Aksi Sosial" desc="Penggalangan dana cepat untuk dampak nyata." />
          </div>
        </section>

        <section id="how-it-works" className="mt-12 space-y-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-6 w-1 rounded bg-white/60" />
            <h2 className="text-xl font-semibold">Cara Kerja</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <SectionCard icon={FileText} title="1. Pilih" desc="Telusuri dan pilih campaign yang kamu percaya." />
            <SectionCard icon={PieChart} title="2. Danai" desc="Danai dengan aman, terpantau di dashboard." />
            <SectionCard icon={Blocks} title="3. Dampak" desc="Lihat perkembangan dan dampak secara real-time." />
          </div>
        </section>
      </main>

      {/* sticky bottom nav */}
      <Header />
    </div>
  )
}

export default App

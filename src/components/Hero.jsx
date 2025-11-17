import React from "react"
import Spline from "@splinetool/react-spline"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-black/10">
      {/* soft gradient backdrop to keep same color tone */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/0" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* headline */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-md">
          Minimal • Modern • Fintech
        </div>
        <h1 className="text-3xl font-semibold text-white drop-shadow-sm sm:text-5xl">
          Bangun Dana Kolaboratif dengan Gaya Modern
        </h1>
        <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base">
          Desain ringkas, tetap warna yang sama. Fokus pada kesederhanaan dan
          pengalaman yang halus.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#campaigns" className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white">
            Lihat Campaign
          </a>
          <a href="#how-it-works" className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
            Cara Kerja
          </a>
        </div>
      </div>

      {/* subtle top light */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
    </section>
  )
}

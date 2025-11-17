import React from "react"
import { Home, Blocks, PieChart, FileText, Wallet } from "lucide-react"
import { ConnectWalletButton } from "./ConnectWalletButton"

export function Header() {
  const [pathname, setPathname] = React.useState("/")

  React.useEffect(() => {
    setPathname(window.location.pathname + window.location.hash)
    const onHashChange = () => setPathname(window.location.pathname + window.location.hash)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const navItems = [
    { href: "/", icon: Home, label: "Beranda" },
    { href: "/#campaigns", icon: Blocks, label: "Campaign" },
    { href: "/dao", icon: PieChart, label: "DAO" },
    { href: "/#how-it-works", icon: FileText, label: "Cara Kerja" },
    { href: "/wallet", icon: Wallet, label: "Wallet", isWallet: true },
  ]

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname === ""
    if (href === "/wallet") return pathname.startsWith("/wallet")
    return pathname.startsWith(href.replace("/#", "/#"))
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-gradient-to-t from-black/30 to-black/10 backdrop-blur-xl">
      <div className="mx-auto max-w-md px-4">
        <div className="relative flex h-20 items-center justify-center gap-1">
          {/* floating card */}
          <div className="absolute inset-x-2 -top-6 mx-auto h-16 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-xl" />

          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex flex-1 flex-col items-center justify-center gap-1 px-3 py-2 transition-all duration-300"
              >
                {/* top indicator */}
                {active && (
                  <div className="absolute -top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-white/70 animate-in" />
                )}

                {/* icon */}
                <div
                  className={`relative transition-all duration-300 ${
                    active
                      ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.55)] scale-110"
                      : "text-white/70 group-hover:text-white group-hover:scale-105"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {active && (
                    <div className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-white/20 blur-lg" />
                  )}
                </div>

                {/* label */}
                <span
                  className={`whitespace-nowrap text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                    active ? "text-white" : "text-white/60 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>

                {/* wallet button */}
                {item.isWallet && active && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="scale-75">
                      <ConnectWalletButton />
                    </div>
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

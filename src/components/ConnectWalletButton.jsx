import React from "react"

export function ConnectWalletButton() {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-[0.98]"
      onClick={() => alert("Connect wallet clicked")}
      aria-label="Connect Wallet"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.6)]" />
      Connect Wallet
    </button>
  )
}

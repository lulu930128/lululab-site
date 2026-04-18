"use client";
import React, { useState } from "react";

export default function ProfileCard() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const bentoCardStyle =
    "group relative flex flex-col items-start justify-center gap-3 rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white";

  return (
    <div className="flex flex-col gap-4 lg:col-span-5 xl:col-span-4">
      <div className="group relative flex h-[320px] w-full flex-col justify-end overflow-hidden rounded-[2.5rem] border border-[#eCeAf4] shadow-sm bg-white">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
        <img
          src="/images/main/home-banner.jpg"
          className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
          alt="Lulu banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent" />

        <div className="relative z-10 flex items-end justify-between p-8">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-mono font-bold text-neutral-300 uppercase tracking-widest">
                PROFILE ACTIVE
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Lulu星</h2>
            <p className="mt-1 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              ASE Equipment Engineer
            </p>
          </div>
          <div className="h-16 w-16 overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl backdrop-blur-md group-hover:rotate-6 transition-transform">
            <img src="/images/main/profile-avatar.jpg" className="h-full w-full object-cover" alt="Lulu avatar" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex items-center gap-4 rounded-[1.5rem] border border-[#eCeAf4] bg-white/70 p-5 shadow-sm backdrop-blur-md">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-500">
            👨‍💻
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Current Role</p>
            <p className="mt-0.5 text-sm font-bold text-neutral-800">ASE 設備工程師</p>
          </div>
        </div>

        <button onClick={() => handleCopy("thomas930128@gmail.com", "email")} className={bentoCardStyle}>
          <div className="flex w-full items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-[10px] font-bold text-indigo-500">
              @
            </span>
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[7px] font-bold text-indigo-500 uppercase opacity-0 transition-opacity group-hover:opacity-100">
              Copy
            </span>
          </div>
          <div className="text-left w-full">
            <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Email</p>
            <p className="mt-1 text-[10px] font-bold text-neutral-800 break-all leading-tight">
              {copied === "email" ? "✓ Copied" : "thomas930128@gmail.com"}
            </p>
          </div>
        </button>

        <button onClick={() => handleCopy("0933590247", "phone")} className={bentoCardStyle}>
          <div className="flex w-full items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-base">📞</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-bold text-emerald-500 uppercase opacity-0 transition-opacity group-hover:opacity-100">
              Copy
            </span>
          </div>
          <div className="text-left">
            <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Phone</p>
            <p className="mt-1 text-sm font-bold text-neutral-800">{copied === "phone" ? "✓ Copied" : "0933590247"}</p>
          </div>
        </button>

        <a
          href="https://www.instagram.com/lu_lu128_/"
          target="_blank"
          rel="noreferrer"
          className={bentoCardStyle}
        >
          <div className="flex w-full items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-base">📸</span>
            <span className="text-base text-neutral-300 transition-transform group-hover:translate-x-1">→</span>
          </div>
          <div className="text-left">
            <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Instagram</p>
            <p className="mt-1 text-sm font-bold text-neutral-800">lu_lu128_</p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/@lulu_0128"
          target="_blank"
          rel="noreferrer"
          className={bentoCardStyle}
        >
          <div className="flex w-full items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-base">▶</span>
            <span className="text-base text-neutral-300 transition-transform group-hover:translate-x-1">→</span>
          </div>
          <div className="text-left">
            <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">YouTube</p>
            <p className="mt-1 text-sm font-bold text-neutral-800">@lulu_0128</p>
          </div>
        </a>

        <a
          href="https://github.com/lulu930128"
          target="_blank"
          rel="noreferrer"
          className="group col-span-2 relative flex items-center justify-between rounded-[1.5rem] border border-[#7a6ccf]/20 bg-gradient-to-br from-[#faf8ff] to-[#f4f1fb] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

          <div className="relative z-10 flex items-center gap-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#7a6ccf]/10 text-xl font-bold text-[#7a6ccf] shadow-sm transition-transform group-hover:rotate-12">
              G
            </span>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a89cd9]">GITHUB</p>
              <p className="mt-0.5 text-base font-bold text-[#7a6ccf] tracking-tight">lulu930128</p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <span className="rounded-full bg-[#7a6ccf]/10 px-3 py-1 text-[10px] font-bold text-[#7a6ccf] transition-colors group-hover:bg-[#7a6ccf] group-hover:text-white">
              Visit
            </span>
            <span className="text-xl text-[#7a6ccf]/20 transition-transform group-hover:translate-x-1 group-hover:text-[#7a6ccf]/40">→</span>
          </div>
        </a>
      </div>
    </div>
  );
}

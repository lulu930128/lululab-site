"use client";

export default function ExperienceNav() {
  const navItems = [
    { id: "travel", icon: "✈️", label: "Travel" },
    { id: "galgame", icon: "🌸", label: "Galgame" },
    { id: "game", icon: "🎮", label: "Game" },
  ];

  return (
    <nav className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-6 xl:flex">
      {/* 垂直導航裝飾條 */}
      <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-neutral-100"></div>
      
      {navItems.map((item) => (
        <a 
          key={item.id}
          href={`#${item.id}`} 
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#eCeAf4] bg-white/70 shadow-sm backdrop-blur-md transition-all hover:bg-[#7a6ccf] hover:border-[#7a6ccf] hover:shadow-lg hover:-translate-x-2"
        >
          <span className="text-xl transition-transform group-hover:scale-110 group-hover:invert opacity-80 group-hover:opacity-100">{item.icon}</span>
          <span className="absolute right-18 rounded-md bg-neutral-900 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-white opacity-0 transition-all group-hover:opacity-100 shadow-xl pointer-events-none">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
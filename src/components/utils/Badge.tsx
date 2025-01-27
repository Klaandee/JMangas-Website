export default function Badge({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="flex items-center">
      <span className="relative inline-flex overflow-hidden rounded-full p-[2px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7e22ce_0%,#6b21a8_50%,#7e22ce_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-purple-800 bg-purple-100 rounded-full cursor-pointer dark:bg-zinc-900 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          {children}
        </div>
      </span>
    </div>
  );
}

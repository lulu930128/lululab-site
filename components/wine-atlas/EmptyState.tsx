type EmptyStateProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function EmptyState({
  eyebrow = "Empty",
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-rose-200 bg-white/60 p-8 text-center shadow-[0_18px_50px_rgba(35,20,30,0.05)] backdrop-blur-md">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">
        {eyebrow}
      </p>

      <h3 className="mt-3 text-xl font-black text-neutral-950">{title}</h3>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-neutral-500">
        {description}
      </p>
    </div>
  );
}
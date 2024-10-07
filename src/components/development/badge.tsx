export function Badge({ children }: { children: string }) {
  return (
    <div className="inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-200 dark:border-neutral-800 bg-[linear-gradient(110deg,#F0F0F0,45%,#FFFFFF,55%,#F0F0F0)] dark:bg-[linear-gradient(110deg,#121212,45%,#1e2631,55%,#121212)] bg-[length:200%_100%] px-3 py-1 font-medium text-dark-100 dark:text-neutral-100 transition-colors">
      {children}
    </div>
  );
}

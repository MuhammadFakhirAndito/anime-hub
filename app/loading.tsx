export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden bg-slate-800"
        >
          <div className="h-40 bg-slate-700 animate-pulse" />
          <div className="p-3 space-y-2">
            <div className="h-4 w-3/4 bg-slate-700 animate-pulse rounded" />
            <div className="h-3 w-1/3 bg-slate-700 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
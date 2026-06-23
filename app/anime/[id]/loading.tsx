export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* image skeleton */}
        <div className="w-full md:w-1/3 h-[400px] bg-slate-800 animate-pulse rounded-2xl" />

        {/* content skeleton */}
        <div className="flex-1 space-y-4">
          <div className="h-8 w-2/3 bg-slate-700 animate-pulse rounded" />
          <div className="h-4 w-1/3 bg-slate-700 animate-pulse rounded" />

          <div className="space-y-2 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-full bg-slate-700 animate-pulse rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
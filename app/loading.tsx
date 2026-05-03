export default function Loading() {
  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-cream-dark rounded-xl w-2/3" />
        <div className="h-4 bg-cream-dark rounded w-1/2" />
        <div className="h-32 bg-cream-dark rounded-2xl" />
        <div className="h-32 bg-cream-dark rounded-2xl" />
      </div>
    </div>
  );
}

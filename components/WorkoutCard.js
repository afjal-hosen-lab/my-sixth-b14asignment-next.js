import Link from "next/link";

export default function WorkoutCard({ workout }) {
    return (
    <Link
        href={`/workout/${workout.id}`}
        className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-lime-400/50"
    >
        <div className="aspect-4/3 overflow-hidden bg-zinc-900">
        <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
        </div>

        <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
            {workout.category?.map((tag) => (
            <span
                key={tag}
                className="rounded-full bg-lime-400 px-3 py-1 text-[10px] font-black uppercase text-black"
            >
                {tag}
            </span>
            ))}
        </div>

        <h3 className="text-lg font-black uppercase tracking-tight text-white">
            {workout.name}
        </h3>

        <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-white/50">
            <span>⏱ {workout.duration} min</span>
            <span>🔥 {workout.calories} kcal</span>
            <span>★ {workout.rating}</span>
        </div>
        </div>
    </Link>
    );
}
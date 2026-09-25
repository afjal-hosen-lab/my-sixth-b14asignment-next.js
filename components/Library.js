import WorkoutCard from "./WorkoutCard";

export default function Library({ workouts }) {
    return (
    <section
        id="library"
        className="mx-auto max-w-7xl px-6 py-20"
    >
        <div className="mb-10">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Workout Collection
        </p>

        <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            THE LIBRARY
        </h2>

        <p className="mt-3 max-w-xl text-white/50">
            Twelve lifts covering every major muscle group.
        </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
            <WorkoutCard
            key={workout.id}
            workout={workout}
            />
        ))}
        </div>
    </section>
    );
}
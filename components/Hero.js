export default function Hero() {
    return (
    <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Text */}
        <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-lime-400">
            Workout Library
            </p>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/50 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
            </p>

            <a
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-lime-300"
            >
            Browse Workouts
            <span>→</span>
            </a>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
            <img
            src="/banner.png"
            alt="FitLog workout"
            className="w-full max-w-md object-contain"
            />
        </div>

        </div>
    </section>
    );
}
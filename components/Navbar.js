import Link from "next/link";

export default function Navbar() {
    return (
    <nav className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
            FIT<span className="text-lime-400">LOG</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
            <Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider text-lime-400"
            >
            Workout
            </Link>

            <Link
            href="/my-plan"
            className="text-sm font-bold uppercase tracking-wider text-white/60 transition hover:text-white"
            >
            My Plan
            </Link>
        </div>

        <div className="flex items-center gap-2">
            <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-4 py-2 text-xs font-black uppercase text-black"
            >
            Plan 0
            </Link>

            <Link
            href="/my-plan"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-black uppercase text-white"
            >
            Saved 0
            </Link>
        </div>

        </div>
    </nav>
    );
}
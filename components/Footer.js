export default function Footer() {
    return (
    <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        
        <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-sm font-black text-black">
            F
            </div>

            <span className="font-black tracking-widest text-white">
            FITLOG
            </span>
        </div>

        <p className="text-right text-xs text-white/40">
            © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

        </div>
    </footer>
    );
}
import { ShoppingCart, Search } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">E</div>
          <span className="text-xl font-semibold tracking-tight">Electra</span>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search electronics, accessories..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100/80 focus:bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-black/10 transition"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative h-10 w-10 rounded-xl border border-slate-200 hover:border-slate-300 grid place-items-center transition">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-1 -right-1 text-[11px] px-1.5 py-0.5 rounded-full bg-black text-white">2</span>
          </button>
          <button className="px-4 py-2 rounded-xl bg-black text-white hover:bg-neutral-900 transition">Sign in</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

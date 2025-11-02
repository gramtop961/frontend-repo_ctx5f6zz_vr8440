import Spline from '@splinetool/react-spline';
import { Star, Shield, Truck } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 mb-4">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            New arrival · Pro Audio Collection
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Elevate your sound with modern electronics
          </h1>
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Discover premium gadgets crafted for clarity, comfort, and performance. Interactive 3D previews let you explore every detail before you buy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="px-5 py-3 rounded-xl bg-black text-white hover:bg-neutral-900 transition shadow-sm"
            >
              Shop Bestsellers
            </a>
            <a
              href="#explore"
              className="px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white transition"
            >
              Explore Collection
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              4.9 rating
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              2-year warranty
            </div>
            <div className="flex items-center gap-1">
              <Truck className="h-4 w-4" />
              Free shipping
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[560px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

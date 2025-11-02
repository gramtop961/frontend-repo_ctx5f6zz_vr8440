import { Facebook, Instagram, Twitter, ShieldCheck, RefreshCw, CreditCard } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">E</div>
              <span className="text-lg font-semibold tracking-tight">Electra</span>
            </div>
            <p className="mt-4 text-slate-600 max-w-md">
              Modern electronics designed for clarity and comfort. Explore in 3D, shop with confidence, and enjoy fast delivery.
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Twitter" className="h-9 w-9 grid place-items-center rounded-xl border border-slate-200 hover:border-slate-300 transition"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-xl border border-slate-200 hover:border-slate-300 transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-xl border border-slate-200 hover:border-slate-300 transition"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Support</h4>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li><a className="hover:text-black" href="#">Help center</a></li>
              <li><a className="hover:text-black" href="#">Shipping</a></li>
              <li><a className="hover:text-black" href="#">Returns</a></li>
              <li><a className="hover:text-black" href="#">Warranty</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Company</h4>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li><a className="hover:text-black" href="#">About</a></li>
              <li><a className="hover:text-black" href="#">Careers</a></li>
              <li><a className="hover:text-black" href="#">Press</a></li>
              <li><a className="hover:text-black" href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
            <ShieldCheck className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Secure checkout</p>
              <p className="text-xs text-slate-600">Protected payments and data encryption</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
            <RefreshCw className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Hassle-free returns</p>
              <p className="text-xs text-slate-600">30-day return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
            <CreditCard className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Multiple payment options</p>
              <p className="text-xs text-slate-600">Credit cards, wallets and more</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Electra. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

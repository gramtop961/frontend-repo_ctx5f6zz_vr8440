import { Headphones, Smartphone, Monitor, Star, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Aurora Pro Headphones',
    price: 299,
    rating: 4.8,
    badge: 'Bestseller',
    icon: Headphones,
    color: 'from-slate-900 to-slate-700',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Neo X Smartphone',
    price: 899,
    rating: 4.7,
    badge: 'New',
    icon: Smartphone,
    color: 'from-neutral-900 to-neutral-700',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Vision 27" Monitor',
    price: 449,
    rating: 4.6,
    badge: 'Pro',
    icon: Monitor,
    color: 'from-zinc-900 to-zinc-700',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Pulse ANC Earbuds',
    price: 159,
    rating: 4.5,
    badge: 'Hot',
    icon: Headphones,
    color: 'from-stone-900 to-stone-700',
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function ProductCard({ product }) {
  const Icon = product.icon;
  return (
    <div className="group relative rounded-2xl border border-slate-200 overflow-hidden bg-white">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs border border-slate-200">
          <Icon className="h-4 w-4" />
          {product.badge}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-slate-900">{product.name}</h3>
          <span className="font-semibold">${product.price}</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-sm text-slate-600">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {product.rating}
          <span className="text-slate-400">·</span>
          In stock
        </div>
        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-black text-white hover:bg-neutral-900 transition">
          <Plus className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section id="products" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured products</h2>
            <p className="text-slate-600 mt-1">Curated tech designed for everyday excellence.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm font-medium text-slate-700 hover:text-black">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;

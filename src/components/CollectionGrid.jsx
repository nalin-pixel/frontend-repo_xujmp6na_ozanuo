function CollectionCard({ title, notes, price, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[4/5] w-full bg-gradient-to-br from-violet-100 via-purple-50 to-rose-100"/>
      <div className="absolute inset-0 flex items-end justify-between p-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-xs text-gray-600">{notes}</p>
        </div>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">${price}</span>
      </div>
    </div>
  );
}

function CollectionGrid() {
  const items = [
    { title: 'Iridescence No.1', notes: 'pear • iris • ambrette', price: 180 },
    { title: 'Nocturne Velvet', notes: 'black tea • fig • cashmere', price: 190 },
    { title: 'Solar Veil', notes: 'bergamot • neroli • musk', price: 175 },
    { title: 'Violet Hour', notes: 'violet leaf • cedar • amber', price: 185 },
  ];

  return (
    <section id="collection" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">The Collection</h2>
          <p className="mt-2 text-gray-600">Elevated blends crafted for a timeless, modern wardrobe.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <CollectionCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}

export default CollectionGrid;

import Spline from '@splinetool/react-spline';

function HeroSection({ onShopClick, onCreateClick }) {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for luxury tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs tracking-widest text-gray-800 backdrop-blur">
          AUMÈ • Maison de Parfum
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          The Fragrance of Creativity
        </h1>
        <p className="mt-4 max-w-xl text-base text-gray-700 md:text-lg">
          AUMÈ crafts modern, genderless fragrances that translate your mood into a signature scent. Chic, elegant, unmistakably you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={onCreateClick} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-black">
            Create with AI
          </button>
          <button onClick={onShopClick} className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-900">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import { useRef } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CollectionGrid from './components/CollectionGrid';
import AIGenerator from './components/AIGenerator';
import Checkout from './components/Checkout';

function App() {
  const collectionRef = useRef(null);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCreate = () => {
    const el = document.getElementById('create');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main className="pt-16">
        <HeroSection onShopClick={scrollToCollection} onCreateClick={scrollToCreate} />
        <section className="mx-auto max-w-5xl px-6 py-10 text-center">
          <h2 className="text-3xl font-semibold">AUMÈ</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-700">
            AUMÈ is a contemporary fragrance house devoted to clarity, craftsmanship, and emotion. Our bottles are sculpted like architecture; our blends are composed like music. Explore our curation or generate a bespoke scent with the AI atelier.
          </p>
        </section>
        <CollectionGrid ref={collectionRef} />
        <AIGenerator />
        <Checkout />
        <footer className="border-t border-gray-100 bg-white/70">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p>© {new Date().getFullYear()} AUMÈ Maison. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#collection" className="hover:text-gray-900">Collection</a>
                <a href="#create" className="hover:text-gray-900">Create</a>
                <a href="#checkout" className="hover:text-gray-900">Checkout</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

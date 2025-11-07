import { useEffect, useState } from 'react';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur bg-white/70 border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => go('home')} className="text-lg font-semibold tracking-wide text-gray-900">AUMÈ</button>
        <nav className="hidden items-center gap-6 text-sm text-gray-800 sm:flex">
          <button onClick={() => go('collection')} className="hover:text-gray-950">Collection</button>
          <button onClick={() => go('create')} className="hover:text-gray-950">Create</button>
          <button onClick={() => go('checkout')} className="hover:text-gray-950">Checkout</button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

import { useState } from 'react';

const VIBES = [
  'romantic', 'adventurous', 'minimalist', 'mysterious', 'fresh', 'warm', 'nocturnal', 'sunlit'
];

function AIGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const suggest = async () => {
    setLoading(true);
    try {
      // Simple in-frontend logic for demo. In a full product, connect to backend LLM.
      const base = prompt.toLowerCase();
      let profile = { name: 'AUMÈ Signature', notes: ['bergamot', 'iris', 'musk'], description: 'A balanced, versatile aura for everyday elegance.' };
      if (base.includes('romance') || base.includes('love') || base.includes('date') || base.includes('romantic')) {
        profile = { name: 'Rosé Mirage', notes: ['rose', 'lychee', 'ambrette'], description: 'Soft petals and airy musk that linger like a whisper.' };
      } else if (base.includes('night') || base.includes('dark') || base.includes('myster')) {
        profile = { name: 'Nocturne Velvet', notes: ['black tea', 'patchouli', 'vanilla'], description: 'Smoky warmth wrapped in velvet shadows.' };
      } else if (base.includes('fresh') || base.includes('clean') || base.includes('morning') || base.includes('sun')) {
        profile = { name: 'Solar Veil', notes: ['bergamot', 'neroli', 'white musk'], description: 'Brisk citrus and radiant florals—like sunlight on glass.' };
      } else if (base.includes('wood') || base.includes('forest') || base.includes('adventure')) {
        profile = { name: 'Verdant Atlas', notes: ['cedar', 'vetiver', 'sage'], description: 'Green facets and mineral woods for the modern explorer.' };
      }
      await new Promise(r => setTimeout(r, 600));
      setResult(profile);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="create" className="border-t border-gray-100 bg-white/70">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">AI Perfume Generator</h2>
        <p className="mt-2 text-gray-600">Describe a vibe, an occasion, or a memory—our assistant suggests the perfect AUMÈ blend.</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., a romantic evening in Paris after the rain"
            className="flex-1 rounded-full border border-gray-300 bg-white/80 px-5 py-3 text-sm text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-900 focus:outline-none"
          />
          <button onClick={suggest} disabled={loading} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Designing...' : 'Generate Scent'}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {VIBES.map((v) => (
            <button key={v} onClick={() => setPrompt(v)} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 hover:border-gray-900">
              {v}
            </button>
          ))}
        </div>

        {result && (
          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
              <div>
                <h3 className="text-xl font-medium text-gray-900">{result.name}</h3>
                <p className="mt-1 text-gray-600">{result.description}</p>
                <p className="mt-2 text-sm text-gray-700">
                  Notes: <span className="font-medium">{result.notes.join(' • ')}</span>
                </p>
              </div>
              <button className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black">Add to Cart — $185</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AIGenerator;

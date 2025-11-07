import { useState } from 'react';

function Checkout() {
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [placed, setPlaced] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const placeOrder = () => {
    if (!form.name || !form.email || !form.address) return alert('Please fill all fields.');
    setPlaced(true);
  };

  if (placed) {
    return (
      <section id="checkout" className="bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Merci — Your order is placed</h2>
          <p className="mt-2 text-gray-700">A confirmation has been sent to {form.email}. Your AUMÈ creation will ship soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">Secure Checkout</h2>
        <p className="mt-2 text-gray-600">Minimal, fast, and private. We only collect what’s essential to deliver your fragrance.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-800">Full name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-gray-900 focus:outline-none" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-800">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-gray-900 focus:outline-none" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-800">Address</label>
            <textarea name="address" rows={3} value={form.address} onChange={handleChange} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-gray-900 focus:outline-none" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <div>
            <p className="text-sm text-gray-700">Cart total</p>
            <p className="text-xl font-semibold text-gray-900">$185.00</p>
          </div>
          <button onClick={placeOrder} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-black">Place Order</button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;

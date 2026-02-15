import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-sm md:text-base text-gray-700">info@agrikonnect.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-sm md:text-base text-gray-700">+254 700 000 000</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-sm md:text-base text-gray-700">Nairobi, Kenya</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-sm md:text-base text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Send a Message</h2>
            {submitted && (
              <div className="bg-green-100 text-green-800 p-3 rounded-xl mb-4 text-sm md:text-base">
                Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 md:py-3 border rounded-full focus:ring-2 focus:ring-green-500 text-sm md:text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 md:py-3 border rounded-full focus:ring-2 focus:ring-green-500 text-sm md:text-base"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-2 md:py-3 border rounded-full focus:ring-2 focus:ring-green-500 text-sm md:text-base"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 md:py-3 border rounded-2xl focus:ring-2 focus:ring-green-500 text-sm md:text-base"
                rows="4"
                required
              />
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

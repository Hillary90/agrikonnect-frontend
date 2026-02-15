export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">About Agrikonnect</h1>
        
        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Agrikonnect is dedicated to empowering farmers across Africa by connecting them with agricultural experts, 
              providing access to vital resources, and fostering a thriving community of knowledge sharing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/60 p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2">Expert Network</h3>
                <p className="text-sm md:text-base text-gray-600">Connect with certified agricultural experts for personalized advice and guidance.</p>
              </div>
              <div className="bg-white/60 p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2">Community Forums</h3>
                <p className="text-sm md:text-base text-gray-600">Join specialized communities to share experiences and learn from fellow farmers.</p>
              </div>
              <div className="bg-white/60 p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2">Marketplace</h3>
                <p className="text-sm md:text-base text-gray-600">Buy and sell agricultural products directly with other farmers.</p>
              </div>
              <div className="bg-white/60 p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-semibold text-secondary mb-2">Weather Updates</h3>
                <p className="text-sm md:text-base text-gray-600">Access real-time weather forecasts to plan your farming activities.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Founded in 2026, Agrikonnect was born from the vision of bridging the gap between traditional farming 
              practices and modern agricultural technology. We believe that every farmer deserves access to expert 
              knowledge and a supportive community to help them succeed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-base md:text-lg text-gray-700">
              Email: <a href="mailto:info@agrikonnect.com" className="text-secondary hover:underline">info@agrikonnect.com</a><br />
              Phone: +254 700 000 000
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

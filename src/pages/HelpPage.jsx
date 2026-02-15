export default function HelpPage() {
  const topics = [
    {
      title: "Getting Started",
      items: [
        { q: "How to create an account", link: "/faq" },
        { q: "Setting up your profile", link: "/faq" },
        { q: "Navigating the platform", link: "/faq" },
      ]
    },
    {
      title: "Communities",
      items: [
        { q: "Joining a community", link: "/faq" },
        { q: "Creating posts", link: "/faq" },
        { q: "Community guidelines", link: "/faq" },
      ]
    },
    {
      title: "Marketplace",
      items: [
        { q: "Listing products for sale", link: "/faq" },
        { q: "Making purchases", link: "/faq" },
        { q: "M-Pesa payment guide", link: "/faq" },
      ]
    },
    {
      title: "Experts",
      items: [
        { q: "Finding experts", link: "/faq" },
        { q: "Messaging experts", link: "/faq" },
        { q: "Becoming an expert", link: "/faq" },
      ]
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Help Centre</h1>
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">Find guides and resources to help you use Agrikonnect</p>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {topics.map((topic, index) => (
            <div key={index} className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{topic.title}</h2>
              <ul className="space-y-3">
                {topic.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link} className="text-sm md:text-base text-secondary hover:underline flex items-center gap-2">
                      <span>→</span>
                      <span>{item.q}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="/faq" className="bg-secondary text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg text-center text-sm md:text-base">
              View FAQs
            </a>
            <a href="/contact" className="bg-white text-gray-700 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg text-center text-sm md:text-base">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

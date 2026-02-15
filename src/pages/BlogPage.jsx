export default function BlogPage() {
  const articles = [
    {
      title: "10 Tips for Sustainable Farming in Kenya",
      excerpt: "Learn how to implement sustainable farming practices that benefit both your farm and the environment.",
      date: "Jan 15, 2024",
      category: "Sustainability",
      image: "/farmer-1.jpg"
    },
    {
      title: "Understanding Weather Patterns for Better Yields",
      excerpt: "Discover how to use weather forecasts to optimize your planting and harvesting schedules.",
      date: "Jan 12, 2024",
      category: "Weather",
      image: "/farmer-3.jpg"
    },
    {
      title: "Maximizing Profits in the Agricultural Marketplace",
      excerpt: "Expert tips on pricing, marketing, and selling your agricultural products effectively.",
      date: "Jan 10, 2024",
      category: "Business",
      image: "/farmer-4.jpg"
    },
    {
      title: "Organic Farming: A Beginner's Guide",
      excerpt: "Everything you need to know to start your organic farming journey in East Africa.",
      date: "Jan 8, 2024",
      category: "Organic",
      image: "/farmer-6.jpg"
    },
    {
      title: "Connecting with Agricultural Experts",
      excerpt: "How to make the most of expert advice and build valuable relationships in the farming community.",
      date: "Jan 5, 2024",
      category: "Community",
      image: "/farm-2.avif"
    },
    {
      title: "Modern Irrigation Techniques for Small Farms",
      excerpt: "Cost-effective irrigation solutions that can transform your farm's productivity.",
      date: "Jan 3, 2024",
      category: "Technology",
      image: "/farmer-1.jpg"
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Blog & News</h1>
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">Latest insights and updates from the agricultural community</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {articles.map((article, index) => (
            <div key={index} className="glass bg-white/40 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img src={article.image} alt={article.title} className="w-full h-40 md:h-48 object-cover" />
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500">{article.date}</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{article.title}</h2>
                <p className="text-sm md:text-base text-gray-700 mb-4 line-clamp-2">{article.excerpt}</p>
                <button className="text-secondary font-semibold hover:underline text-sm md:text-base">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8 mt-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Stay Updated</h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">Subscribe to our newsletter for the latest farming tips and news</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 md:py-3 border rounded-full focus:ring-2 focus:ring-green-500 text-sm md:text-base"
            />
            <button className="bg-secondary text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg text-sm md:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

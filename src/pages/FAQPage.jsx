import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do I create an account?", a: "Click on 'Register' in the top menu, fill in your details, and verify your email address." },
    { q: "How can I connect with agricultural experts?", a: "Visit the Experts page, browse available experts, and click 'Message' to start a conversation." },
    { q: "Is Agrikonnect free to use?", a: "Yes, creating an account and accessing basic features is completely free." },
    { q: "How do I join a community?", a: "Go to the Communities page, find a community that interests you, and click 'Join'." },
    { q: "Can I sell my products on the marketplace?", a: "Yes! Click 'Sell Product' on the Marketplace page to list your agricultural products." },
    { q: "How does M-Pesa payment work?", a: "When you purchase a product, you'll receive an M-Pesa prompt on your phone to complete the payment." },
    { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page and follow the instructions sent to your email." },
    { q: "Can I edit my profile?", a: "Yes, go to your profile page and click 'Edit Profile' to update your information." },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Frequently Asked Questions</h1>
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">Find answers to common questions about Agrikonnect</p>
        
        <div className="glass bg-white/40 rounded-3xl shadow-lg p-4 md:p-8 space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/60 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 md:p-6 flex justify-between items-center hover:bg-white/80 transition-all"
              >
                <span className="font-semibold text-gray-900 text-sm md:text-lg pr-4">{faq.q}</span>
                <span className="text-secondary text-xl md:text-2xl flex-shrink-0">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8 mt-6 md:mt-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Still have questions?</h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">Contact our support team for assistance</p>
          <a href="/contact" className="inline-block bg-secondary text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg text-sm md:text-base">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

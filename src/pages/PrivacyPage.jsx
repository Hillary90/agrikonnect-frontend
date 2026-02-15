export default function PrivacyPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Privacy Policy</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Last updated: January 2024</p>
        
        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Information We Collect</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 ml-4">
              <li>Name, email address, and phone number</li>
              <li>Profile information and photos</li>
              <li>Posts, comments, and messages</li>
              <li>Payment information for marketplace transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">How We Use Your Information</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Information Sharing</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share your information with third parties only in the 
              following circumstances: with your consent, to comply with legal obligations, or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Data Security</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Your Rights</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal information at any time through your 
              account settings or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Contact Us</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at privacy@agrikonnect.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

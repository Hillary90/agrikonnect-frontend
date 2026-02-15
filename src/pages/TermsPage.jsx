export default function TermsPage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Terms & Conditions</h1>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Last updated: January 2024</p>
        
        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Acceptance of Terms</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              By accessing and using Agrikonnect, you accept and agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">User Accounts</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">User Conduct</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2 ml-4">
              <li>Post false, misleading, or fraudulent content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the platform for any illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Marketplace Terms</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Transactions on the marketplace are between buyers and sellers. Agrikonnect facilitates these 
              transactions but is not responsible for the quality, safety, or legality of items listed.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Intellectual Property</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              All content on Agrikonnect, including text, graphics, logos, and software, is the property of 
              Agrikonnect or its licensors and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Limitation of Liability</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Agrikonnect is provided "as is" without warranties of any kind. We are not liable for any damages 
              arising from your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Changes to Terms</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Contact</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              For questions about these Terms, contact us at legal@agrikonnect.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans pt-32 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-teal-400 hover:text-teal-300 text-sm font-semibold mb-8 inline-block transition-colors">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 mb-12 font-mono text-sm border-b border-white/10 pb-8">Effective Date: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-10 text-gray-400 leading-relaxed">
          <section>
            <p className="text-lg">
              At Netavise ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal and business information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our digital services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways when you interact with Netavise. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-300">Business & Personal Data:</strong> Name, business name, email address, phone number, and physical address collected during the audit request or onboarding process.</li>
              <li><strong className="text-gray-300">Operational Data:</strong> Access credentials, Point of Sale (POS) details, and existing digital asset links required to perform our digital foundation build and automation services.</li>
              <li><strong className="text-gray-300">Automated Technical Data:</strong> IP addresses, browser types, operating systems, and usage metrics collected automatically when you visit our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">Having accurate information allows us to provide you with a smooth, efficient, and customized experience. We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduct digital audits and deliver customized proposals.</li>
              <li>Deploy and manage your digital foundation, including domain registration and website hosting.</li>
              <li>Synchronize your business listings across third-party platforms (e.g., Google, Yelp, Apple).</li>
              <li>Set up and manage automated retention loops, including email and SMS lead capture systems.</li>
              <li>Generate and deliver weekly operational reporting dashboards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclosure of Your Information</h2>
            <p className="mb-4">We do not sell your personal or business data. However, to execute our services, we may share information with specific third parties:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-300">Service Providers:</strong> We may share data with third-party vendors, such as hosting providers, email delivery services, and CRM platforms that assist us in operating our business.</li>
              <li><strong className="text-gray-300">Platform Integrations:</strong> To synchronize your data, we pass necessary business information to aggregators, search engines, and POS systems (e.g., Square, Toast).</li>
              <li><strong className="text-gray-300">Legal Obligations:</strong> We may disclose information if required by law, subpoena, or other legal processes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal and business information. While we have taken reasonable steps to secure the data you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:<br/>
              <span className="text-teal-400 mt-2 inline-block font-semibold">legal@netavise.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
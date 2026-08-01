import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans pt-32 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-teal-400 hover:text-teal-300 text-sm font-semibold mb-8 inline-block transition-colors">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-gray-500 mb-12 font-mono text-sm border-b border-white/10 pb-8">Effective Date: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-10 text-gray-400 leading-relaxed">
          <section>
            <p className="text-lg">
              These Terms of Service ("Terms") govern your access to and use of the services provided by Netavise ("we," "our," or "us"). By engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Services</h2>
            <p className="mb-4">Netavise provides digital foundation builds and ongoing automation services for local businesses. Our engagement is typically structured in two phases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-300">Phase 1 (The Foundation):</strong> A finite, one-time project that includes domain setup, website development, core listing synchronization, and online ordering integration.</li>
              <li><strong className="text-gray-300">Phase 2 & 3 (The Retainer):</strong> An ongoing monthly service covering automated review requests, continued listing accuracy, hosting, maintenance, and automated customer retention loops.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Fees and Payment Terms</h2>
            <p className="mb-4">
              Our pricing is structured to avoid hourly billing. Clients are subject to a one-time deployment fee for Phase 1, followed by a flat monthly retainer for ongoing services.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Invoices for the monthly retainer are processed automatically on the first of each billing cycle.</li>
              <li>Netavise does not take a percentage or commission of any online sales generated through the digital assets we build. All sales revenue belongs entirely to the client.</li>
              <li>Failure to maintain active payment for the monthly retainer may result in the suspension of automated services, reporting dashboards, and listing synchronization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property and Asset Ownership</h2>
            <p className="mb-4">We believe clients should own their digital real estate. Therefore:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-300">Client Ownership:</strong> Upon completion of Phase 1 and full payment of the deployment fee, the client retains full ownership of their custom domain, the primary website build, and all interconnected third-party accounts (e.g., Google Business Profile, Square).</li>
              <li><strong className="text-gray-300">Netavise IP:</strong> Netavise retains ownership of our proprietary automation frameworks, white-labeled reporting dashboard software, and internal operational toolkits used to deliver the ongoing monthly services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Client Responsibilities</h2>
            <p>
              The successful deployment of our foundation requires timely cooperation. The client agrees to provide necessary access credentials, business information, menu data, and operational approvals in a timely manner. Delays in providing this information may result in corresponding delays to the project timeline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation and Termination</h2>
            <p>
              Clients may cancel their ongoing monthly retainer at any time with a 30-day written notice. Upon cancellation, Netavise will transfer domain credentials and administrative access of the website to the client. Automated services, review generation, and access to the Netavise reporting dashboard will cease at the end of the final billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              Netavise acts as a facilitator for your digital presence. We are not liable for changes made by third-party platforms (e.g., Google algorithm updates, Yelp policy changes, POS platform outages) that may impact visibility or operations. In no event shall Netavise be liable for any indirect, consequential, or incidental damages arising out of the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <p>
              For inquiries regarding these Terms of Service, please reach out to us at:<br/>
              <span className="text-teal-400 mt-2 inline-block font-semibold">legal@netavise.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
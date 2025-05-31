import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Detachd',
  description: 'Terms of Service for Detachd AI-powered insurance platform.',
};

export default function TermsPage() {
  return (
    <main className="bg-detachd-dark min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="text-detachd-text-secondary space-y-6">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using Detachd's AI-powered insurance platform ("Service"), 
                you agree to be bound by these Terms of Service ("Terms"). If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p>
                Detachd provides AI-powered insurance technology solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated claims processing</li>
                <li>Fraud detection and prevention</li>
                <li>Risk assessment and analytics</li>
                <li>Customer experience optimization</li>
                <li>Insurance workflow automation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
              <p>
                To access certain features of our Service, you may be required to create an account. 
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data and Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also 
                governs your use of the Service, to understand our practices regarding the 
                collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>Violate any international, federal, provincial, or local laws or regulations</li>
                <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use the Service to transmit spam, malware, or other harmful content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of Detachd and its licensors. The Service is protected by 
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall Detachd, its directors, employees, partners, agents, suppliers, 
                or affiliates be liable for any indirect, incidental, special, consequential, or 
                punitive damages arising out of your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-detachd-slate-800 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> hello@detachd.systems</p>
                <p><strong>Address:</strong> Cape Town, South Africa</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision 
                is material, we will try to provide at least 30 days' notice prior to any new 
                terms taking effect.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 
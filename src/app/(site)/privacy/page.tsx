import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Detachd',
  description: 'Privacy Policy for Detachd AI-powered insurance platform.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-detachd-dark min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="text-detachd-text-secondary space-y-6">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, information we obtain automatically 
                when you use our Service, and information from third-party sources.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Insurance-related data and claims information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage data and analytics</li>
                <li>Device information and identifiers</li>
                <li>Log files and IP addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our AI-powered insurance services</li>
                <li>Process insurance claims and assess risk</li>
                <li>Detect and prevent fraud</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Analyze usage patterns and optimize our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service providers:</strong> Third-party vendors who assist in operating our platform</li>
                <li><strong>Legal compliance:</strong> When required by law or to protect rights and safety</li>
                <li><strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Insurance partners:</strong> With authorized insurance companies for claim processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law. Insurance-related data may be retained for extended periods as 
                required by regulatory obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our 
                platform. You can control cookie preferences through your browser settings, though 
                disabling certain cookies may affect platform functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your 
                own. We ensure appropriate safeguards are in place to protect your information 
                during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our Service is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you believe we have collected 
                information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-detachd-slate-800 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> hello@detachd.systems</p>
                <p><strong>Address:</strong> Cape Town, South Africa</p>
                <p><strong>Data Protection Officer:</strong> privacy@detachd.systems</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 
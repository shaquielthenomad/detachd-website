import { Metadata } from 'next';
import { Icon } from '@iconify/react/dist/iconify.js';
import { contactInfo } from '@/app/api/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get in Touch | Detachd',
  description: 'Contact Detachd for blockchain-powered insurance fraud detection solutions.',
};

export default function ContactPage() {
  return (
    <main className="bg-detachd-dark min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Insurance Fraud Detection, <span className="text-detachd-primary">Powered by Blockchain</span>
          </h1>
          <p className="text-xl text-detachd-text-secondary max-w-3xl mx-auto">
            Stop fraud before it happens. Our blockchain-powered AI platform detects fraudulent claims 
            in real-time, saving your organization millions while protecting legitimate customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-detachd-primary/20 rounded-lg flex items-center justify-center">
                  <Icon icon="ph:envelope-duotone" className="text-detachd-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-detachd-primary hover:text-detachd-secondary">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-detachd-primary/20 rounded-lg flex items-center justify-center">
                  <Icon icon="ph:phone-duotone" className="text-detachd-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-detachd-text-secondary hover:text-white">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-detachd-primary/20 rounded-lg flex items-center justify-center">
                  <Icon icon="ph:map-pin-duotone" className="text-detachd-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-detachd-text-secondary">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">Why Blockchain for Fraud Detection?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon icon="ph:shield-check-duotone" className="text-detachd-success text-xl" />
                  <span className="text-detachd-text-secondary">Immutable audit trail prevents data tampering</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:lightning-duotone" className="text-detachd-success text-xl" />
                  <span className="text-detachd-text-secondary">Real-time fraud detection in milliseconds</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:network-duotone" className="text-detachd-success text-xl" />
                  <span className="text-detachd-text-secondary">Cross-company fraud pattern sharing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="ph:chart-line-up-duotone" className="text-detachd-success text-xl" />
                  <span className="text-detachd-text-secondary">95% reduction in fraudulent claims</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Request a Demo</h2>
            <p className="text-detachd-text-secondary mb-6">
              See how our blockchain-powered fraud detection can protect your organization.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Insurance Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none"
                  placeholder="Your Insurance Company"
                />
              </div>

              <div>
                <label htmlFor="claims" className="block text-white font-medium mb-2">
                  Monthly Claims Volume
                </label>
                <select
                  id="claims"
                  name="claims"
                  required
                  className="w-full px-4 py-3 bg-detachd-slate-800 border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none"
                >
                  <option value="">Select volume</option>
                  <option value="small">1-100 claims/month</option>
                  <option value="medium">100-1,000 claims/month</option>
                  <option value="large">1,000-10,000 claims/month</option>
                  <option value="enterprise">10,000+ claims/month</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Current Fraud Challenges
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none resize-none"
                  placeholder="Tell us about your current fraud detection challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Icon icon="ph:shield-check-duotone" />
                Request Fraud Detection Demo
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-detachd-primary/20 to-detachd-accent/20 backdrop-blur-sm border border-detachd-primary/30 rounded-2xl p-8 lg:p-12 text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop Fraud. Save Millions. Protect Customers.
          </h2>
          <p className="text-xl text-detachd-text-secondary mb-8">
            Join leading insurance companies using blockchain technology to eliminate fraud and reduce costs by up to 40%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Icon icon="ph:play-duotone" />
              Watch Demo Video
            </Link>
            <a href="mailto:hello@detachd.systems?subject=Case Study Request&body=Hi, I'd like to download the case study for Detachd's blockchain fraud detection platform." className="border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Icon icon="ph:file-pdf-duotone" />
              Download Case Study
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 
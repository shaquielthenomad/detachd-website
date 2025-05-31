'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import Link from 'next/link'

const KeyFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: "ph:brain-duotone",
      title: "AI Risk Assessment",
      description: "Advanced machine learning algorithms analyze risk factors in real-time, providing accurate risk scores from 0-100 with detailed factor breakdown",
      benefits: ["75% faster risk evaluation", "92% accuracy improvement"],
      color: "detachd-primary",
      gradient: "from-detachd-primary to-detachd-accent"
    },
    {
      icon: "ph:gear-duotone",
      title: "Automated Claims Processing",
      description: "End-to-end automation from claim submission to approval, with intelligent document processing and verification",
      benefits: ["3.2 days average processing", "94.2% approval rate"],
      color: "detachd-success",
      gradient: "from-detachd-success to-detachd-primary"
    },
    {
      icon: "ph:detective-duotone",
      title: "Fraud Detection Engine",
      description: "Multi-layered fraud detection using behavioral analysis, pattern recognition, and suspicious activity monitoring",
      benefits: ["98% fraud detection accuracy", "$2.8M saved annually"],
      color: "detachd-warning",
      gradient: "from-detachd-warning to-detachd-danger"
    },
    {
      icon: "ph:chart-line-duotone",
      title: "Real-time Analytics",
      description: "Comprehensive analytics dashboard with customizable reports, performance metrics, and predictive insights",
      benefits: ["360° operational visibility", "Data-driven decisions"],
      color: "detachd-purple",
      gradient: "from-detachd-purple to-detachd-accent"
    },
    {
      icon: "ph:users-duotone",
      title: "Multi-Role Platform",
      description: "Tailored interfaces for policyholders, insurers, adjusters, witnesses, and administrators with role-based permissions",
      benefits: ["Streamlined workflows", "Improved collaboration"],
      color: "detachd-accent",
      gradient: "from-detachd-accent to-detachd-primary"
    },
    {
      icon: "ph:certificate-duotone",
      title: "Blockchain Verification",
      description: "Immutable certificate generation and verification using blockchain technology for tamper-proof documentation",
      benefits: ["100% verifiable claims", "Enhanced trust"],
      color: "detachd-success",
      gradient: "from-detachd-success to-detachd-warning"
    }
  ]

  return (
    <section className='py-20 bg-detachd-slate-800 relative overflow-hidden' id='features'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}>
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-3 bg-detachd-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
            <Icon icon="ph:star-duotone" className='text-detachd-accent text-xl' />
            <span className='text-detachd-text-primary font-medium'>Powerful Features</span>
          </div>
          
          <h2 className='text-4xl lg:text-5xl font-bold text-detachd-text-primary mb-6'>
            <span className='block'>Powerful Features That</span>
            <span className='text-detachd-primary'>Drive Results</span>
          </h2>
          
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            Our comprehensive suite of AI-powered features transforms every aspect 
            of insurance operations, delivering measurable improvements in efficiency and accuracy.
          </p>
        </motion.div>

        {/* Interactive Feature Showcase */}
        <div className='grid lg:grid-cols-2 gap-12 items-start mb-16'>
          {/* Feature List */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-detachd-primary/20 border-detachd-primary/50' 
                    : 'bg-detachd-dark/50 border-detachd-slate-700 hover:border-detachd-primary/30'
                } border backdrop-blur-sm rounded-xl p-6`}
                onClick={() => setActiveFeature(index)}
              >
                <div className='flex items-start gap-4'>
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center transition-transform duration-300 ${activeFeature === index ? 'scale-110' : ''}`}>
                    <Icon icon={feature.icon} className='text-white text-xl' />
                  </div>
                  <div className='flex-1'>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      activeFeature === index ? 'text-detachd-primary' : 'text-detachd-text-primary'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className='text-detachd-text-secondary text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    activeFeature === index ? 'rotate-90' : ''
                  }`}>
                    <Icon icon="ph:caret-right-duotone" className='text-detachd-text-muted text-xl' />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Feature Detail */}
          <motion.div
            key={activeFeature}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8'
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${features[activeFeature].gradient} rounded-2xl mb-6`}>
              <Icon icon={features[activeFeature].icon} className='text-white text-3xl' />
            </div>

            <h3 className='text-2xl font-bold text-detachd-text-primary mb-4'>
              {features[activeFeature].title}
            </h3>

            <p className='text-detachd-text-secondary mb-6 leading-relaxed'>
              {features[activeFeature].description}
            </p>

            <div className='space-y-3 mb-8'>
              <h4 className='text-lg font-semibold text-detachd-text-primary mb-3'>Key Benefits:</h4>
              {features[activeFeature].benefits.map((benefit, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <Icon icon="ph:check-circle-duotone" className='text-detachd-success text-xl' />
                  <span className='text-detachd-text-secondary font-medium'>{benefit}</span>
                </div>
              ))}
            </div>

            <div className='flex gap-4'>
              <Link href="/signup" className='flex-1 bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                <Icon icon="ph:play-duotone" />
                See Demo
              </Link>
              <Link href="/contact" className='flex-1 border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                <Icon icon="ph:info-duotone" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-3xl font-bold text-detachd-text-primary text-center mb-12'>
            Complete Feature Overview
          </h3>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group bg-detachd-dark/30 backdrop-blur-sm border border-detachd-slate-700 hover:border-detachd-primary/50 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300'
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={feature.icon} className='text-white text-2xl' />
                </div>

                <h4 className='text-xl font-bold text-detachd-text-primary mb-3 group-hover:text-detachd-accent transition-colors duration-300'>
                  {feature.title}
                </h4>

                <p className='text-detachd-text-secondary text-sm leading-relaxed mb-4'>
                  {feature.description}
                </p>

                <div className='space-y-2'>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className='flex items-center gap-2'>
                      <div className={`w-2 h-2 bg-${feature.color} rounded-full`}></div>
                      <span className='text-detachd-text-muted text-sm'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyFeatures 
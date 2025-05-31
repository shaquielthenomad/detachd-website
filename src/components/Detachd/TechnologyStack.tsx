'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const TechnologyStack = () => {
  const technologies = [
    {
      icon: "ph:brain-duotone",
      title: "AI & Machine Learning",
      description: "Advanced neural networks for risk assessment and fraud detection",
      features: ["Deep Learning Models", "Pattern Recognition", "Predictive Analytics", "Natural Language Processing"],
      color: "detachd-primary"
    },
    {
      icon: "ph:cloud-duotone",
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud architecture with 99.9% uptime",
      features: ["Auto-scaling", "Global CDN", "Load Balancing", "Disaster Recovery"],
      color: "detachd-accent"
    },
    {
      icon: "ph:link-duotone",
      title: "Blockchain Integration",
      description: "Immutable record keeping and certificate verification",
      features: ["Smart Contracts", "Digital Certificates", "Audit Trails", "Tamper-proof Records"],
      color: "detachd-warning"
    },
    {
      icon: "ph:lightning-duotone",
      title: "Real-time Processing",
      description: "Instant data processing and decision making",
      features: ["Stream Processing", "Event-driven Architecture", "Real-time Analytics", "Instant Notifications"],
      color: "detachd-success"
    },
    {
      icon: "ph:shield-duotone",
      title: "Security First",
      description: "End-to-end encryption, multi-factor authentication, compliance ready",
      features: ["Zero Trust Architecture", "GDPR Compliant", "SOC 2 Type II", "ISO 27001"],
      color: "detachd-purple"
    },
    {
      icon: "ph:plugs-duotone",
      title: "API Integration",
      description: "Seamless integration with existing insurance systems",
      features: ["RESTful APIs", "GraphQL", "Webhooks", "Legacy System Support"],
      color: "detachd-accent"
    }
  ]

  return (
    <section className='py-20 bg-detachd-dark relative overflow-hidden' id='technology'>
      <div className='container mx-auto px-4 relative z-10'>
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold text-detachd-text-primary mb-6'>
            Built on <span className='text-detachd-primary'>Cutting-Edge</span> Technology
          </h2>
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            Our platform leverages the latest in AI, cloud computing, and blockchain technology 
            to deliver unmatched performance and reliability.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 hover:border-detachd-primary/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300'
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${tech.color}/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={tech.icon} className={`text-${tech.color} text-3xl`} />
              </div>

              <h3 className='text-xl font-bold text-detachd-text-primary mb-3 group-hover:text-detachd-accent transition-colors duration-300'>
                {tech.title}
              </h3>

              <p className='text-detachd-text-secondary mb-6 leading-relaxed'>
                {tech.description}
              </p>

              <ul className='space-y-2'>
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center gap-3'>
                    <div className={`w-2 h-2 bg-${tech.color} rounded-full flex-shrink-0`}></div>
                    <span className='text-detachd-text-muted text-sm'>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack 
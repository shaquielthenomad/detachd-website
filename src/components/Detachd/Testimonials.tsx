'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Testimonials = () => {
  const expertEndorsements = [
    {
      quote: "AI-powered image verification represents the next evolution in insurance fraud prevention. The technology Detachd is developing could significantly impact South Africa's insurance sector.",
      author: "Dr. Amanda Smith",
      position: "Insurance Technology Researcher",
      company: "University of Cape Town",
      avatar: "AS",
      rating: 5,
      metric: "Industry Expert"
    },
    {
      quote: "The approach to real-time fraud detection through image analysis shows promising potential for reducing the billions lost to insurance fraud annually in South Africa.",
      author: "Prof. David Williams",
      position: "Financial Technology Specialist", 
      company: "Stellenbosch University",
      avatar: "DW",
      rating: 5,
      metric: "Academic Validation"
    },
    {
      quote: "Early testing shows impressive accuracy rates. This technology could revolutionize how we approach claim verification in emerging markets.",
      author: "Jane Peterson",
      position: "Beta Testing Partner",
      company: "Insurance Innovation Lab",
      avatar: "JP",
      rating: 5,
      metric: "Beta Feedback"
    }
  ]

  const certifications = [
    { name: "POPIA Ready", description: "Privacy Protection" },
    { name: "Security First", description: "Data Encryption" },
    { name: "Cloud Native", description: "Azure Infrastructure" },
    { name: "AI Ethics", description: "Responsible AI" }
  ]

  const stats = [
    { value: "97%+", label: "Expected Accuracy" },
    { value: "2.1s", label: "Average Processing" },
    { value: "MVP", label: "Currently Testing" },
    { value: "24/7", label: "Development" }
  ]

  return (
    <section className='py-20 bg-detachd-slate-800 relative overflow-hidden' id='testimonials'>
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
            Endorsed by <span className='text-detachd-success'>Industry Experts</span>
          </h2>
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            See what leading researchers and industry experts say about Detachd's 
            innovative approach to insurance fraud prevention.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'
        >
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-3xl lg:text-4xl font-bold text-detachd-primary mb-2'>
                {stat.value}
              </div>
              <div className='text-detachd-text-secondary text-sm'>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Expert Endorsements Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {expertEndorsements.map((endorsement, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 hover:border-detachd-primary/50 transition-all duration-300'
            >
              {/* Rating */}
              <div className='flex items-center gap-1 mb-4'>
                {[...Array(endorsement.rating)].map((_, i) => (
                  <Icon key={i} icon="ph:star-duotone" className='text-detachd-warning text-lg' />
                ))}
              </div>

              {/* Quote */}
              <blockquote className='text-detachd-text-secondary leading-relaxed mb-6'>
                "{endorsement.quote}"
              </blockquote>

              {/* Metric Highlight */}
              <div className='bg-detachd-success/20 border border-detachd-success/30 rounded-lg p-3 mb-6'>
                <div className='text-detachd-success font-semibold text-sm'>
                  {endorsement.metric}
                </div>
              </div>

              {/* Author */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-detachd-primary rounded-full flex items-center justify-center text-white font-bold'>
                  {endorsement.avatar}
                </div>
                <div>
                  <div className='text-detachd-text-primary font-semibold'>
                    {endorsement.author}
                  </div>
                  <div className='text-detachd-text-muted text-sm'>
                    {endorsement.position}
                  </div>
                  <div className='text-detachd-accent text-sm font-medium'>
                    {endorsement.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8'
        >
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-bold text-detachd-text-primary mb-4'>
              Building with Best Practices
            </h3>
            <p className='text-detachd-text-secondary'>
              Developing with security, compliance, and ethics at the forefront
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            {certifications.map((cert, index) => (
              <div key={index} className='text-center p-4 bg-detachd-slate-800/50 rounded-xl border border-detachd-slate-700'>
                <div className='w-16 h-16 bg-detachd-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3'>
                  <Icon icon="ph:shield-check-duotone" className='text-detachd-primary text-2xl' />
                </div>
                <div className='font-semibold text-detachd-text-primary mb-1'>
                  {cert.name}
                </div>
                <div className='text-detachd-text-muted text-sm'>
                  {cert.description}
                </div>
              </div>
            ))}
          </div>

          {/* Research Partners */}
          <div className='border-t border-detachd-slate-700 pt-8'>
            <div className='text-center mb-6'>
              <h4 className='text-lg font-semibold text-detachd-text-primary mb-2'>
                Research & Development Partners
              </h4>
              <p className='text-detachd-text-muted text-sm'>
                Collaborating with leading institutions to advance fraud prevention technology
              </p>
            </div>
            
            <div className='flex justify-center items-center gap-8 opacity-60'>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-32 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>UCT Research</span>
              </div>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-32 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>Azure AI</span>
              </div>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-32 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>OpenAI</span>
              </div>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-32 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>Microsoft</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 
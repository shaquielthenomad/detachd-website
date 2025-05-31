'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Detachd reduced our claim processing time by 80% while improving accuracy. This is truly game-changing technology for the insurance industry.",
      author: "Sarah Johnson",
      position: "Claims Director",
      company: "Santam Insurance",
      avatar: "SJ",
      rating: 5,
      metric: "80% faster processing"
    },
    {
      quote: "The AI fraud detection caught cases our traditional methods missed completely. The ROI was immediate and continues to grow.",
      author: "Michael Chen",
      position: "Risk Manager", 
      company: "Discovery Insure",
      avatar: "MC",
      rating: 5,
      metric: "R2.8M fraud prevented"
    },
    {
      quote: "Our customers love the seamless experience. Claim satisfaction scores increased by 90% within the first quarter of implementation.",
      author: "Lisa Rodriguez",
      position: "Customer Experience Lead",
      company: "Hollard Insurance",
      avatar: "LR",
      rating: 5,
      metric: "90% satisfaction increase"
    }
  ]

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "GDPR Compliant", description: "Data Protection" },
    { name: "POPIA Certified", description: "Privacy Protection" }
  ]

  const stats = [
    { value: "500+", label: "Insurance Companies" },
    { value: "98.2%", label: "Customer Satisfaction" },
    { value: "R50M+", label: "Claims Processed" },
    { value: "24/7", label: "Support Available" }
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
            Trusted by <span className='text-detachd-success'>Industry Leaders</span>
          </h2>
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            See what our clients are saying about their experience with Detachd's 
            AI-powered insurance platform.
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

        {/* Testimonials Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {testimonials.map((testimonial, index) => (
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
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} icon="ph:star-duotone" className='text-detachd-warning text-lg' />
                ))}
              </div>

              {/* Quote */}
              <blockquote className='text-detachd-text-secondary leading-relaxed mb-6'>
                "{testimonial.quote}"
              </blockquote>

              {/* Metric Highlight */}
              <div className='bg-detachd-success/20 border border-detachd-success/30 rounded-lg p-3 mb-6'>
                <div className='text-detachd-success font-semibold text-sm'>
                  Key Result: {testimonial.metric}
                </div>
              </div>

              {/* Author */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-detachd-primary rounded-full flex items-center justify-center text-white font-bold'>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className='text-detachd-text-primary font-semibold'>
                    {testimonial.author}
                  </div>
                  <div className='text-detachd-text-muted text-sm'>
                    {testimonial.position}
                  </div>
                  <div className='text-detachd-accent text-sm font-medium'>
                    {testimonial.company}
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
              Security & Compliance Certifications
            </h3>
            <p className='text-detachd-text-secondary'>
              Fully compliant with industry standards and regulations
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            {certifications.map((cert, index) => (
              <div key={index} className='text-center p-4 bg-detachd-slate-800/50 rounded-xl border border-detachd-slate-700'>
                <div className='w-16 h-16 bg-detachd-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3'>
                  <Icon icon="ph:certificate-duotone" className='text-detachd-primary text-2xl' />
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

          {/* Partner Logos Placeholder */}
          <div className='border-t border-detachd-slate-700 pt-8'>
            <div className='text-center mb-6'>
              <h4 className='text-lg font-semibold text-detachd-text-primary mb-2'>
                Trusted Partners
              </h4>
              <p className='text-detachd-text-muted text-sm'>
                Working with leading insurance companies across South Africa
              </p>
            </div>
            
            <div className='flex justify-center items-center gap-8 opacity-60'>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-24 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>Santam</span>
              </div>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-24 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>Discovery</span>
              </div>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-24 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>Hollard</span>
              </div>
              <div className='bg-detachd-slate-700 rounded-lg p-4 w-24 h-12 flex items-center justify-center'>
                <span className='text-detachd-text-muted text-xs'>OUTsurance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 
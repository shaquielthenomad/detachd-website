'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R15,000",
      period: "/month",
      description: "Perfect for small insurance companies getting started",
      features: [
        "Up to 500 claims/month",
        "Basic AI risk assessment",
        "Standard fraud detection",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      limitations: [
        "Limited customization",
        "Standard processing speed"
      ],
      color: "detachd-accent",
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "R35,000",
      period: "/month",
      description: "Ideal for growing insurance companies with higher volume",
      features: [
        "Up to 2,000 claims/month",
        "Advanced AI features",
        "Real-time analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Advanced fraud detection",
        "Multi-role platform access"
      ],
      limitations: [],
      color: "detachd-primary",
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large enterprises with specific requirements",
      features: [
        "Unlimited claims",
        "Custom AI models",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "Advanced compliance features",
        "Custom reporting",
        "On-premise deployment option"
      ],
      limitations: [],
      color: "detachd-success",
      popular: false,
      cta: "Contact Sales"
    }
  ]

  const addons = [
    {
      name: "Advanced Analytics",
      price: "R5,000/month",
      description: "Enhanced reporting and predictive insights"
    },
    {
      name: "Blockchain Premium",
      price: "R8,000/month", 
      description: "Advanced blockchain features and verification"
    },
    {
      name: "White-label Branding",
      price: "R12,000/month",
      description: "Custom branding and co-branded solutions"
    },
    {
      name: "API Rate Increase",
      price: "R3,000/month",
      description: "Higher API limits for integration-heavy workflows"
    }
  ]

  return (
    <section className='py-20 bg-detachd-dark relative overflow-hidden' id='pricing'>
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
            Flexible Plans for <span className='text-detachd-primary'>Every Business Size</span>
          </h2>
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            Choose the perfect plan for your insurance operations. 
            Start with our 30-day free trial and scale as you grow.
          </p>
        </motion.div>

        {/* Free Trial Banner */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-detachd-primary/20 to-detachd-accent/20 backdrop-blur-sm border border-detachd-primary/30 rounded-2xl p-6 text-center mb-12'
        >
          <div className='flex items-center justify-center gap-3 mb-3'>
            <Icon icon="ph:gift-duotone" className='text-detachd-primary text-2xl' />
            <span className='text-detachd-text-primary font-bold text-lg'>30-Day Free Trial</span>
          </div>
          <p className='text-detachd-text-secondary'>
            Full feature access • No credit card required • Cancel anytime
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-detachd-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular 
                  ? 'border-detachd-primary/50 shadow-lg shadow-detachd-primary/20' 
                  : 'border-detachd-slate-700 hover:border-detachd-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <div className='bg-detachd-primary text-white px-4 py-2 rounded-full text-sm font-semibold'>
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className='text-center mb-8'>
                <h3 className='text-2xl font-bold text-detachd-text-primary mb-2'>
                  {plan.name}
                </h3>
                <p className='text-detachd-text-secondary text-sm mb-4'>
                  {plan.description}
                </p>
                <div className='flex items-baseline justify-center gap-1'>
                  <span className={`text-4xl font-bold text-${plan.color}`}>
                    {plan.price}
                  </span>
                  <span className='text-detachd-text-muted'>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className='mb-8'>
                <h4 className='text-lg font-semibold text-detachd-text-primary mb-4'>
                  What's included:
                </h4>
                <ul className='space-y-3'>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center gap-3'>
                      <Icon icon="ph:check-circle-duotone" className='text-detachd-success text-lg flex-shrink-0' />
                      <span className='text-detachd-text-secondary text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className='mt-4 pt-4 border-t border-detachd-slate-700'>
                    <ul className='space-y-2'>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className='flex items-center gap-3'>
                          <Icon icon="ph:minus-circle-duotone" className='text-detachd-text-muted text-lg flex-shrink-0' />
                          <span className='text-detachd-text-muted text-sm'>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-detachd-primary hover:bg-detachd-secondary text-white'
                  : 'border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h3 className='text-3xl font-bold text-detachd-text-primary text-center mb-12'>
            Optional Add-ons
          </h3>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {addons.map((addon, index) => (
              <div key={index} className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-xl p-6 hover:border-detachd-primary/30 transition-all duration-300'>
                <h4 className='text-lg font-semibold text-detachd-text-primary mb-2'>
                  {addon.name}
                </h4>
                <div className='text-detachd-primary font-bold mb-3'>
                  {addon.price}
                </div>
                <p className='text-detachd-text-secondary text-sm'>
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ/Support Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 text-center'
        >
          <h3 className='text-2xl font-bold text-detachd-text-primary mb-4'>
            Need Help Choosing?
          </h3>
          <p className='text-detachd-text-secondary mb-8 max-w-2xl mx-auto'>
            Our team can help you select the perfect plan for your needs. 
            Schedule a consultation to discuss your requirements and get a custom quote.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
              <Icon icon="ph:calendar-duotone" />
              Schedule Consultation
            </button>
            <button className='border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
              <Icon icon="ph:chat-circle-duotone" />
              Chat with Sales
            </button>
          </div>

          <div className='grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-detachd-slate-700'>
            <div className='text-center'>
              <Icon icon="ph:shield-check-duotone" className='text-detachd-success text-2xl mx-auto mb-2' />
              <div className='text-detachd-text-primary font-semibold text-sm'>99.9% Uptime SLA</div>
            </div>
            <div className='text-center'>
              <Icon icon="ph:headset-duotone" className='text-detachd-primary text-2xl mx-auto mb-2' />
              <div className='text-detachd-text-primary font-semibold text-sm'>24/7 Support</div>
            </div>
            <div className='text-center'>
              <Icon icon="ph:lock-duotone" className='text-detachd-warning text-2xl mx-auto mb-2' />
              <div className='text-detachd-text-primary font-semibold text-sm'>Enterprise Security</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 
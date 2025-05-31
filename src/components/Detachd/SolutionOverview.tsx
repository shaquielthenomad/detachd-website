'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const SolutionOverview = () => {
  const features = [
    {
      icon: "ph:brain-duotone",
      title: "Smart Claims Processing",
      description: "Automated document analysis and instant risk assessment",
      gradient: "from-detachd-primary to-detachd-accent"
    },
    {
      icon: "ph:detective-duotone",
      title: "Real-time Fraud Detection",
      description: "AI algorithms that identify suspicious patterns immediately",
      gradient: "from-detachd-success to-detachd-primary"
    },
    {
      icon: "ph:user-circle-duotone",
      title: "Customer-Centric Portal",
      description: "Intuitive interface for policyholders to manage claims seamlessly",
      gradient: "from-detachd-purple to-detachd-accent"
    },
    {
      icon: "ph:chart-bar-duotone",
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with actionable insights and performance metrics",
      gradient: "from-detachd-warning to-detachd-success"
    }
  ]

  return (
    <section className='py-20 bg-detachd-dark relative overflow-hidden' id='solution'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-detachd-primary/10 rounded-full blur-[100px] animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-detachd-accent/10 rounded-full blur-[120px] animate-pulse delay-1000'></div>
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
            <Icon icon="ph:sparkle-duotone" className='text-detachd-accent text-xl' />
            <span className='text-detachd-text-primary font-medium'>Complete Solution</span>
          </div>
          
          <h2 className='text-4xl lg:text-6xl font-bold text-detachd-text-primary mb-6 leading-tight'>
            Meet <span className='text-detachd-primary'>Detachd</span>:
            <span className='block mt-2'>Your Complete</span>
            <span className='text-detachd-accent'>Insurtech Solution</span>
          </h2>
          
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            AI-powered platform that transforms every aspect of insurance operations, 
            from claims processing to customer experience and fraud detection.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Left Column - Platform Overview */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='space-y-8'>
              <div className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-detachd-text-primary mb-4'>
                  Why Choose Detachd?
                </h3>
                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-2 h-2 bg-detachd-primary rounded-full mt-3'></div>
                    <div>
                      <h4 className='font-semibold text-detachd-text-primary mb-2'>End-to-End Automation</h4>
                      <p className='text-detachd-text-secondary'>Complete workflow automation from claim submission to settlement</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-2 h-2 bg-detachd-accent rounded-full mt-3'></div>
                    <div>
                      <h4 className='font-semibold text-detachd-text-primary mb-2'>AI-Driven Intelligence</h4>
                      <p className='text-detachd-text-secondary'>Machine learning algorithms that continuously improve accuracy</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-2 h-2 bg-detachd-success rounded-full mt-3'></div>
                    <div>
                      <h4 className='font-semibold text-detachd-text-primary mb-2'>Scalable Architecture</h4>
                      <p className='text-detachd-text-secondary'>Cloud-native platform that grows with your business needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-detachd-primary/10 backdrop-blur-sm border border-detachd-primary/30 rounded-xl p-6 text-center'>
                  <div className='text-3xl font-bold text-detachd-primary mb-2'>83%</div>
                  <div className='text-detachd-text-secondary text-sm'>Faster Processing</div>
                </div>
                <div className='bg-detachd-success/10 backdrop-blur-sm border border-detachd-success/30 rounded-xl p-6 text-center'>
                  <div className='text-3xl font-bold text-detachd-success mb-2'>65%</div>
                  <div className='text-detachd-text-secondary text-sm'>Cost Reduction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Demo */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xl font-bold text-detachd-text-primary'>Live Platform Demo</h3>
                <div className='flex gap-2'>
                  <div className='w-3 h-3 bg-detachd-success rounded-full animate-pulse'></div>
                  <span className='text-detachd-success text-sm font-medium'>Live</span>
                </div>
              </div>

              {/* Simulated Interface */}
              <div className='space-y-4'>
                {/* Progress Bar */}
                <div className='bg-detachd-slate-700 rounded-full h-2 overflow-hidden'>
                  <motion.div 
                    className='h-full bg-gradient-to-r from-detachd-primary to-detachd-accent'
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <div className='flex justify-between text-sm text-detachd-text-secondary'>
                  <span>Processing Claim #12849</span>
                  <span>75% Complete</span>
                </div>

                {/* Process Steps */}
                <div className='space-y-3 mt-6'>
                  <div className='flex items-center gap-3 p-3 bg-detachd-success/20 rounded-lg border border-detachd-success/30'>
                    <Icon icon="ph:check-circle-duotone" className='text-detachd-success text-xl' />
                    <span className='text-detachd-text-primary text-sm'>Document Analysis Complete</span>
                  </div>
                  <div className='flex items-center gap-3 p-3 bg-detachd-success/20 rounded-lg border border-detachd-success/30'>
                    <Icon icon="ph:check-circle-duotone" className='text-detachd-success text-xl' />
                    <span className='text-detachd-text-primary text-sm'>Fraud Check Passed</span>
                  </div>
                  <div className='flex items-center gap-3 p-3 bg-detachd-warning/20 rounded-lg border border-detachd-warning/30'>
                    <Icon icon="ph:clock-duotone" className='text-detachd-warning text-xl animate-spin' />
                    <span className='text-detachd-text-primary text-sm'>Risk Assessment in Progress</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href="/signup" className='w-full mt-6 bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                  <Icon icon="ph:play-duotone" className='text-xl' />
                  Try Interactive Demo
                </Link>
              </div>
            </div>

            {/* Floating Elements */}
            <div className='absolute -top-6 -right-6 bg-detachd-primary p-4 rounded-full shadow-lg'>
              <Icon icon="ph:lightning-duotone" className='text-white text-2xl' />
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-3xl font-bold text-detachd-text-primary text-center mb-12'>
            Key Platform Capabilities
          </h3>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group text-center'
              >
                <div className='relative'>
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={feature.icon} className='text-white text-3xl' />
                  </div>
                  
                  <h4 className='text-xl font-bold text-detachd-text-primary mb-3 group-hover:text-detachd-accent transition-colors duration-300'>
                    {feature.title}
                  </h4>
                  
                  <p className='text-detachd-text-secondary leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionOverview 
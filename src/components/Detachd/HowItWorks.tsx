'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: "ph:upload-duotone",
      title: "Submit Claim",
      description: "Policyholders submit claims through intuitive mobile or web interface",
      details: "AI-powered document processing extracts key information automatically",
      color: "detachd-primary",
      bgColor: "detachd-primary/20"
    },
    {
      step: "02",
      icon: "ph:cpu-duotone",
      title: "AI Analysis",
      description: "Advanced algorithms assess risk, detect fraud patterns, and verify documentation",
      details: "Real-time scoring provides instant decision support",
      color: "detachd-accent",
      bgColor: "detachd-accent/20"
    },
    {
      step: "03",
      icon: "ph:magnifying-glass-duotone",
      title: "Smart Review",
      description: "Automated routing to appropriate reviewers based on complexity and risk level",
      details: "Intelligent workflow management ensures efficient processing",
      color: "detachd-warning",
      bgColor: "detachd-warning/20"
    },
    {
      step: "04",
      icon: "ph:check-circle-duotone",
      title: "Instant Decision",
      description: "Automated approvals for low-risk claims, expedited review for complex cases",
      details: "Blockchain-verified certificates provide immutable proof of decisions",
      color: "detachd-success",
      bgColor: "detachd-success/20"
    }
  ]

  return (
    <section className='py-20 bg-detachd-dark relative overflow-hidden' id='how-it-works'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 right-10 w-64 h-64 bg-detachd-primary/10 rounded-full blur-[100px] animate-pulse'></div>
        <div className='absolute bottom-1/4 left-10 w-96 h-96 bg-detachd-accent/10 rounded-full blur-[120px] animate-pulse delay-1000'></div>
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
            <Icon icon="ph:flow-arrow-duotone" className='text-detachd-accent text-xl' />
            <span className='text-detachd-text-primary font-medium'>Simple Process</span>
          </div>
          
          <h2 className='text-4xl lg:text-5xl font-bold text-detachd-text-primary mb-6'>
            <span className='block'>Simple Process,</span>
            <span className='text-detachd-primary'>Powerful Results</span>
          </h2>
          
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            Our streamlined 4-step process transforms complex insurance operations 
            into an automated, intelligent workflow that delivers results in days, not weeks.
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className='hidden lg:block mb-16'>
          <div className='relative'>
            {/* Connection Line */}
            <div className='absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-detachd-primary via-detachd-accent via-detachd-warning to-detachd-success opacity-30'></div>
            
            <div className='grid grid-cols-4 gap-8'>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  {/* Step Number */}
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {step.step}
                  </div>

                  {/* Card */}
                  <div className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 mt-8 hover:border-detachd-primary/50 transition-all duration-300 hover:transform hover:translateY(-2px)'>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${step.bgColor} rounded-2xl mb-6`}>
                      <Icon icon={step.icon} className={`text-${step.color} text-3xl`} />
                    </div>

                    <h3 className='text-xl font-bold text-detachd-text-primary mb-3'>
                      {step.title}
                    </h3>

                    <p className='text-detachd-text-secondary mb-4 leading-relaxed'>
                      {step.description}
                    </p>

                    <p className='text-detachd-text-muted text-sm leading-relaxed'>
                      {step.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className='lg:hidden mb-16'>
          <div className='space-y-8'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative'
              >
                <div className='flex items-start gap-6'>
                  {/* Step Indicator */}
                  <div className='flex-shrink-0'>
                    <div className={`w-16 h-16 bg-${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className='w-1 h-16 bg-gradient-to-b from-detachd-primary to-detachd-accent opacity-30 mx-auto'></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className='flex-1 bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-6'>
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-${step.bgColor} rounded-xl mb-4`}>
                      <Icon icon={step.icon} className={`text-${step.color} text-2xl`} />
                    </div>

                    <h3 className='text-lg font-bold text-detachd-text-primary mb-2'>
                      {step.title}
                    </h3>

                    <p className='text-detachd-text-secondary mb-3 text-sm leading-relaxed'>
                      {step.description}
                    </p>

                    <p className='text-detachd-text-muted text-xs leading-relaxed'>
                      {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 lg:p-12'
        >
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column */}
            <div>
              <h3 className='text-3xl font-bold text-detachd-text-primary mb-6'>
                See the Process in Action
              </h3>
              
              <p className='text-detachd-text-secondary mb-8 leading-relaxed'>
                Experience firsthand how our AI-powered platform transforms insurance 
                claims processing from a complex, time-consuming process into a 
                streamlined, automated workflow.
              </p>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center gap-3'>
                  <Icon icon="ph:clock-duotone" className='text-detachd-success text-xl' />
                  <span className='text-detachd-text-secondary'>Process completed in under 5 minutes</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Icon icon="ph:shield-check-duotone" className='text-detachd-primary text-xl' />
                  <span className='text-detachd-text-secondary'>Real-time fraud detection and verification</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Icon icon="ph:certificate-duotone" className='text-detachd-warning text-xl' />
                  <span className='text-detachd-text-secondary'>Blockchain-verified decision certificates</span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href="https://secure.detachd.systems/#/onboarding/role" target="_blank" rel="noopener noreferrer" className='flex-1 bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                  <Icon icon="ph:play-duotone" />
                  Watch Demo
                </Link>
                <a href="mailto:hello@detachd.systems?subject=Schedule Call&body=Hi, I'd like to schedule a call to discuss Detachd." className='flex-1 border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
                  <Icon icon="ph:calendar-duotone" />
                  Schedule Call
                </a>
              </div>
            </div>

            {/* Right Column - Simulation */}
            <div className='relative'>
              <div className='bg-detachd-dark/70 backdrop-blur-sm border border-detachd-slate-700 rounded-xl p-6'>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='w-3 h-3 bg-detachd-danger rounded-full'></div>
                  <div className='w-3 h-3 bg-detachd-warning rounded-full'></div>
                  <div className='w-3 h-3 bg-detachd-success rounded-full'></div>
                  <span className='text-detachd-text-muted text-sm ml-2'>Live Process Demo</span>
                </div>

                <div className='space-y-4'>
                  {/* Current Step Indicator */}
                  <div className='flex items-center justify-between p-3 bg-detachd-primary/20 rounded-lg border border-detachd-primary/30'>
                    <div className='flex items-center gap-3'>
                      <div className='w-3 h-3 bg-detachd-primary rounded-full animate-pulse'></div>
                      <span className='text-detachd-text-primary text-sm font-medium'>Step 2: AI Analysis</span>
                    </div>
                    <span className='text-detachd-primary text-sm'>Running...</span>
                  </div>

                  {/* Progress Steps */}
                  <div className='space-y-2'>
                    <div className='flex items-center justify-between p-2 bg-detachd-success/10 rounded border border-detachd-success/30'>
                      <span className='text-detachd-text-secondary text-xs'>✓ Claim Submitted</span>
                      <span className='text-detachd-success text-xs'>Complete</span>
                    </div>
                    <div className='flex items-center justify-between p-2 bg-detachd-warning/10 rounded border border-detachd-warning/30'>
                      <span className='text-detachd-text-secondary text-xs'>⚡ Risk Assessment</span>
                      <span className='text-detachd-warning text-xs'>75%</span>
                    </div>
                    <div className='flex items-center justify-between p-2 bg-detachd-slate-700/30 rounded'>
                      <span className='text-detachd-text-muted text-xs'>⏳ Review Process</span>
                      <span className='text-detachd-text-muted text-xs'>Pending</span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className='pt-4 border-t border-detachd-slate-700'>
                    <div className='text-detachd-text-muted text-xs mb-2'>Processing Time: 2.3 minutes</div>
                    <div className='w-full bg-detachd-slate-700 rounded-full h-1'>
                      <motion.div 
                        className='h-full bg-gradient-to-r from-detachd-primary to-detachd-accent rounded-full'
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 3, delay: 1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Icon */}
              <div className='absolute -top-4 -right-4 bg-detachd-success p-3 rounded-full shadow-lg animate-bounce delay-1000'>
                <Icon icon="ph:check-duotone" className='text-white text-xl' />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks 
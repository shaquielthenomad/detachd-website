'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className='py-20 bg-detachd-slate-800 relative overflow-hidden' id='cta'>
      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-4xl lg:text-6xl font-bold text-detachd-text-primary mb-6'>
            Ready to Join the Fight
            <span className='block text-detachd-primary mt-2'>Against Insurance Fraud?</span>
          </h2>
          
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed mb-8'>
            Be among the first South African insurers to experience AI-powered image verification.
            Help us build the future of fraud prevention.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-12'>
            <Link href="https://secure.detachd.systems/#/onboarding/role" target="_blank" rel="noopener noreferrer" className='bg-detachd-primary hover:bg-detachd-secondary text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg'>
              <Icon icon="ph:envelope-duotone" className='text-xl' />
              Request Early Access
            </Link>
            
            <a href="mailto:hello@detachd.systems?subject=Schedule Demo&body=Hi, I'd like to schedule a demo of Detachd for our insurance company." className='border-2 border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg'>
              <Icon icon="ph:calendar-check-duotone" className='text-xl' />
              Schedule Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction 
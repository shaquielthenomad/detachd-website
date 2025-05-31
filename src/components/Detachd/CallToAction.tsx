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
            Ready to Transform Your
            <span className='block text-detachd-primary mt-2'>Insurance Operations?</span>
          </h2>
          
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed mb-8'>
            Join 500+ companies using Detachd to revolutionize claims processing, 
            reduce fraud, and enhance customer experience.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-12'>
            <Link href="/signup" className='bg-detachd-primary hover:bg-detachd-secondary text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg'>
              <Icon icon="ph:rocket-launch-duotone" className='text-xl' />
              Start Free Trial
            </Link>
            
            <a href="mailto:hello@detachd.systems?subject=Schedule Demo&body=Hi, I'd like to schedule a demo of Detachd." className='border-2 border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg'>
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
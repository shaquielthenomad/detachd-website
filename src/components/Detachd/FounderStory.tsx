'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'

const FounderStory = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const fadeInLeft = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
  }

  const fadeInRight = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
  }

  return (
    <section className='py-20 bg-detachd-slate-900' id='founder'>
      <div className='container mx-auto px-4'>
        <motion.div 
          {...fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold text-detachd-text-primary mb-4'>
            Meet the Founder
          </h2>
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto'>
            The story behind Detachd's mission to fight insurance fraud in South Africa
          </p>
        </motion.div>

        <div className='grid grid-cols-12 gap-12 items-center'>
          <div className='lg:col-span-5 col-span-12'>
            <motion.div {...fadeInLeft} className='relative'>
              {/* Founder Photo Placeholder */}
              <div className='relative bg-gradient-to-br from-detachd-primary/20 to-detachd-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-detachd-slate-700'>
                <div className='text-center'>
                  <div className='w-32 h-32 bg-detachd-primary/30 rounded-full mx-auto mb-6 flex items-center justify-center'>
                    <Icon icon="ph:user-duotone" className='text-detachd-text-primary text-6xl' />
                  </div>
                  <h3 className='text-2xl font-bold text-detachd-text-primary mb-2'>Shaquiel Sewell</h3>
                  <p className='text-detachd-accent font-semibold mb-4'>Founder & CEO</p>
                  
                  {/* Key Achievements */}
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3 text-detachd-text-secondary'>
                      <Icon icon="ph:lightning-duotone" className='text-detachd-warning text-xl' />
                      <span className='text-sm'>Started first business at 16</span>
                    </div>
                    <div className='flex items-center gap-3 text-detachd-text-secondary'>
                      <Icon icon="ph:building-office-duotone" className='text-detachd-primary text-xl' />
                      <span className='text-sm'>Former Shell contractor</span>
                    </div>
                    <div className='flex items-center gap-3 text-detachd-text-secondary'>
                      <Icon icon="ph:graduation-cap-duotone" className='text-detachd-success text-xl' />
                      <span className='text-sm'>€66,000 scholarship recipient</span>
                    </div>
                    <div className='flex items-center gap-3 text-detachd-text-secondary'>
                      <Icon icon="ph:calendar-duotone" className='text-detachd-accent text-xl' />
                      <span className='text-sm'>22 years old</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 bg-detachd-success p-3 rounded-full shadow-lg animate-bounce'>
                <Icon icon="ph:lightbulb-duotone" className='text-white text-2xl' />
              </div>
            </motion.div>
          </div>

          <div className='lg:col-span-7 col-span-12'>
            <motion.div {...fadeInRight} className='space-y-6'>
              <div className='bg-detachd-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-detachd-slate-700'>
                <blockquote className='text-xl text-detachd-text-secondary leading-relaxed mb-6 italic'>
                  "After seeing how insurance fraud costs South African families billions each year, 
                  I knew technology could be the solution. At 22, having started my entrepreneurial 
                  journey at 16 and worked with major corporations like Shell, I'm now dedicated to 
                  building AI solutions that protect honest policyholders and help insurers operate 
                  more efficiently."
                </blockquote>
                
                <div className='flex items-center gap-4 text-detachd-accent font-semibold'>
                  <Icon icon="ph:quotes-duotone" className='text-2xl' />
                  <span>Shaquiel Sewell, Founder</span>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-detachd-slate-800/30 rounded-lg p-6 border border-detachd-slate-700'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Icon icon="ph:target-duotone" className='text-detachd-primary text-2xl' />
                    <h4 className='text-lg font-bold text-detachd-text-primary'>Mission</h4>
                  </div>
                  <p className='text-detachd-text-secondary'>
                    Reduce insurance fraud in South Africa by R7-14 billion annually through 
                    AI-powered image verification technology.
                  </p>
                </div>

                <div className='bg-detachd-slate-800/30 rounded-lg p-6 border border-detachd-slate-700'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Icon icon="ph:eye-duotone" className='text-detachd-accent text-2xl' />
                    <h4 className='text-lg font-bold text-detachd-text-primary'>Vision</h4>
                  </div>
                  <p className='text-detachd-text-secondary'>
                    Make insurance claims processing instant, transparent, and fraud-proof 
                    for every South African policyholder.
                  </p>
                </div>
              </div>

              <div className='bg-gradient-to-r from-detachd-primary/10 to-detachd-accent/10 rounded-lg p-6 border border-detachd-primary/20'>
                <div className='flex items-center gap-3 mb-4'>
                  <Icon icon="ph:heart-duotone" className='text-detachd-danger text-2xl' />
                  <h4 className='text-lg font-bold text-detachd-text-primary'>Why This Matters</h4>
                </div>
                <p className='text-detachd-text-secondary'>
                  Insurance fraud doesn't just hurt companies—it increases premiums for honest families. 
                  Every fraudulent claim detected means lower costs for hardworking South Africans who 
                  deserve fair, affordable insurance coverage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderStory 
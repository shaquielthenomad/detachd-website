'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import Squares from '@/components/Common/Squares'

const DetachdHero = () => {
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
    <section
      className='relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center'
      id='hero'>
      {/* Animated Squares Background */}
      <div className='absolute inset-0 z-0'>
        <Squares 
          speed={0.5}
          squareSize={80}
          direction='diagonal'
          borderColor='rgba(255, 255, 255, 0.15)'
          hoverFillColor='rgba(56, 189, 248, 0.2)'
        />
      </div>
      
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-detachd-dark/80 via-detachd-slate-800/70 to-detachd-dark/80 z-10'></div>
      <div className='absolute inset-0 bg-gradient-to-r from-detachd-primary/5 via-transparent to-detachd-accent/5 z-10'></div>
      
      {/* Animated Background Elements */}
      <div className='absolute w-96 h-96 bg-gradient-to-br from-detachd-primary/20 to-detachd-accent/20 blur-[120px] rounded-full -top-48 -right-48 animate-pulse z-10'></div>
      <div className='absolute w-64 h-64 bg-gradient-to-br from-detachd-purple/20 to-detachd-success/20 blur-[100px] rounded-full -bottom-32 -left-32 animate-pulse delay-1000 z-10'></div>

      <div className='container mx-auto px-4 relative z-20'>
        <div className='grid grid-cols-12 gap-8 items-center'>
          <div className='lg:col-span-6 col-span-12'>
            <motion.div {...fadeInUp}>
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-detachd-primary/20 rounded-lg backdrop-blur-sm'>
                  <Icon icon="ph:camera-duotone" className='text-detachd-accent text-2xl' />
                </div>
                <span className='text-detachd-text-secondary text-lg font-medium'>
                  AI-Powered Image Verification
                </span>
              </div>
            </motion.div>

            <motion.h1 {...fadeInLeft} className='text-detachd-text-primary font-bold mb-6 leading-tight w-[99%]'>
              <span className='text-5xl lg:text-7xl block mb-2'>Stop Insurance</span>
              <span className='text-5xl lg:text-7xl block mb-2'>Fraud in</span>
              <span className='text-5xl lg:text-7xl text-detachd-primary block'>
                South Africa
              </span>
              <span className='text-5xl lg:text-7xl text-detachd-accent block'>
                with AI
              </span>
            </motion.h1>

            <motion.p {...fadeInLeft} className='text-detachd-text-secondary text-xl mb-8 leading-relaxed max-w-2xl'>
              Fighting R7-14 billion in annual insurance fraud through AI-powered image verification. 
              Verify claims instantly, prevent fraud, and protect South Africa's R600 billion insurance market.
            </motion.p>

            <motion.div {...fadeInLeft} className='flex flex-col sm:flex-row gap-4 mb-12'>
              <Link href="https://secure.detachd.systems/#/onboarding/role" target="_blank" rel="noopener noreferrer" className='inline-flex items-center justify-center px-8 py-4 bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                <Icon icon="ph:envelope-duotone" className='mr-2 text-xl' />
                Request Demo
              </Link>
              <Link href="#how-it-works" className='inline-flex items-center justify-center px-8 py-4 border-2 border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold rounded-lg transition-all duration-300'>
                <Icon icon="ph:arrow-circle-right-duotone" className='mr-2 text-xl' />
                See How It Works
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div {...fadeInUp} className='space-y-4'>
              <p className='text-detachd-text-muted text-sm font-medium uppercase tracking-wide'>
                In Development for South African Insurers
              </p>
              <div className='flex flex-wrap gap-8 text-detachd-text-secondary'>
                <div className='flex items-center gap-2'>
                  <Icon icon="ph:target-duotone" className='text-detachd-success text-xl' />
                  <span className='font-semibold'>Expected 95%+ Accuracy</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Icon icon="ph:lightning-duotone" className='text-detachd-warning text-xl' />
                  <span className='font-semibold'>Instant Verification</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Icon icon="ph:shield-check-duotone" className='text-detachd-primary text-xl' />
                  <span className='font-semibold'>POPIA Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className='lg:col-span-6 col-span-12 lg:block hidden'>
            <motion.div {...fadeInRight} className='relative'>
              {/* Dashboard Mockup */}
              <div className='relative bg-detachd-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-detachd-slate-700'>
                <div className='flex items-center gap-2 mb-4'>
                  <div className='w-3 h-3 bg-detachd-danger rounded-full'></div>
                  <div className='w-3 h-3 bg-detachd-warning rounded-full'></div>
                  <div className='w-3 h-3 bg-detachd-success rounded-full'></div>
                  <span className='text-detachd-text-muted text-sm ml-2'>
                    Detachd AI Platform (MVP)
                  </span>
                </div>
                
                {/* Simulated Dashboard Content */}
                <div className='space-y-4'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='bg-detachd-primary/20 p-4 rounded-lg'>
                      <div className='text-detachd-primary text-2xl font-bold'>247</div>
                      <div className='text-detachd-text-muted text-sm'>Images Verified</div>
                    </div>
                    <div className='bg-detachd-success/20 p-4 rounded-lg'>
                      <div className='text-detachd-success text-2xl font-bold'>97.3%</div>
                      <div className='text-detachd-text-muted text-sm'>Test Accuracy</div>
                    </div>
                    <div className='bg-detachd-warning/20 p-4 rounded-lg'>
                      <div className='text-detachd-warning text-2xl font-bold'>2.1s</div>
                      <div className='text-detachd-text-muted text-sm'>Avg Process Time</div>
                    </div>
                  </div>
                  
                  <div className='bg-detachd-slate-700/50 p-4 rounded-lg'>
                    <div className='flex items-center justify-between mb-2'>
                      <span className='text-detachd-text-secondary text-sm'>AI Image Analysis</span>
                      <span className='text-detachd-success text-sm font-medium'>Beta Testing</span>
                    </div>
                    <div className='w-full bg-detachd-slate-700 rounded-full h-2'>
                      <div className='bg-gradient-to-r from-detachd-primary to-detachd-accent h-2 rounded-full w-4/5'></div>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <div className='flex items-center justify-between p-3 bg-detachd-slate-700/30 rounded-lg'>
                      <div className='flex items-center gap-3'>
                        <div className='w-2 h-2 bg-detachd-success rounded-full animate-pulse'></div>
                        <span className='text-detachd-text-secondary text-sm'>Vehicle Damage - Verified</span>
                      </div>
                      <span className='text-detachd-success text-sm font-medium'>Authentic</span>
                    </div>
                    <div className='flex items-center justify-between p-3 bg-detachd-slate-700/30 rounded-lg'>
                      <div className='flex items-center gap-3'>
                        <div className='w-2 h-2 bg-detachd-warning rounded-full animate-pulse'></div>
                        <span className='text-detachd-text-secondary text-sm'>Property Photo - Analyzing</span>
                      </div>
                      <span className='text-detachd-warning text-sm font-medium'>Processing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 bg-detachd-success p-3 rounded-full shadow-lg animate-bounce'>
                <Icon icon="ph:camera-duotone" className='text-white text-2xl' />
              </div>
              <div className='absolute -bottom-4 -left-4 bg-detachd-primary p-3 rounded-full shadow-lg animate-pulse'>
                <Icon icon="ph:robot-duotone" className='text-white text-2xl' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetachdHero 
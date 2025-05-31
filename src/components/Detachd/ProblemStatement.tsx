'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

const ProblemStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const problems = [
    {
      icon: "ph:clock-countdown-duotone",
      title: "Manual Processing Delays",
      description: "Average claim processing takes 14+ days with manual review systems",
      color: "detachd-danger",
      bgColor: "detachd-danger/20"
    },
    {
      icon: "ph:shield-warning-duotone",
      title: "Fraud Detection Gaps",
      description: "Traditional methods miss 40% of fraudulent claims, costing billions annually",
      color: "detachd-warning",
      bgColor: "detachd-warning/20"
    },
    {
      icon: "ph:user-x-duotone",
      title: "Poor Customer Experience",
      description: "Complex paperwork and slow responses lead to 60% customer dissatisfaction",
      color: "detachd-purple",
      bgColor: "detachd-purple/20"
    },
    {
      icon: "ph:chart-line-down-duotone",
      title: "Operational Inefficiencies",
      description: "Legacy systems create bottlenecks, increasing operational costs by 300%",
      color: "detachd-danger",
      bgColor: "detachd-danger/20"
    }
  ]

  return (
    <section className='py-20 bg-detachd-slate-800 relative overflow-hidden' id='problems'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}>
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold text-detachd-text-primary mb-6'>
            Insurance Industry 
            <span className='text-detachd-danger block mt-2'>Challenges We Solve</span>
          </h2>
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            The insurance industry faces significant operational and technological challenges that 
            impact efficiency, customer satisfaction, and profitability.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='group'
            >
              <div className='relative bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 h-full hover:border-detachd-primary/50 transition-all duration-300 hover:transform hover:scale-105'>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${problem.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    icon={problem.icon} 
                    className={`text-${problem.color} text-3xl`} 
                  />
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-detachd-text-primary mb-4 group-hover:text-detachd-accent transition-colors duration-300'>
                  {problem.title}
                </h3>
                <p className='text-detachd-text-secondary leading-relaxed'>
                  {problem.description}
                </p>

                {/* Hover Effect */}
                <div className='absolute inset-0 bg-gradient-to-br from-detachd-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none'></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-detachd-text-primary mb-4'>
              Ready to Transform Your Operations?
            </h3>
            <p className='text-detachd-text-secondary mb-6'>
              See how Detachd's AI-powered platform addresses every one of these challenges 
              with intelligent automation and cutting-edge technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href="#solution" className='inline-flex items-center justify-center px-8 py-3 bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold rounded-lg transition-all duration-300'>
                <Icon icon="ph:lightning-duotone" className='mr-2 text-lg' />
                See Solution
              </Link>
              <a href="mailto:hello@detachd.systems?subject=Schedule Call&body=Hi, I'd like to schedule a call to discuss how Detachd can solve our insurance challenges." className='inline-flex items-center justify-center px-8 py-3 border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold rounded-lg transition-all duration-300'>
                <Icon icon="ph:phone-duotone" className='mr-2 text-lg' />
                Schedule Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemStatement 
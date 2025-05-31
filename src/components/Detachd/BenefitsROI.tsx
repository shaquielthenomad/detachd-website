'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState, useEffect } from 'react'

const BenefitsROI = () => {
  const [showCalculator, setShowCalculator] = useState(false)
  const [calculatorData, setCalculatorData] = useState({
    monthlyClaimsVolume: '',
    averageClaimValue: '',
    currentProcessingTime: '',
    fraudPercentage: '',
    employeeCount: ''
  })

  const [results, setResults] = useState({
    annualSavings: 0,
    paybackPeriod: 0,
    threeYearROI: 0,
    fraudReduction: 0,
    timeReduction: 0
  })

  // Calculate ROI in real-time
  useEffect(() => {
    if (calculatorData.monthlyClaimsVolume && calculatorData.averageClaimValue) {
      const monthlyVolume = parseInt(calculatorData.monthlyClaimsVolume) || 0
      const avgClaimValue = parseInt(calculatorData.averageClaimValue) || 0
      const processingTime = parseInt(calculatorData.currentProcessingTime) || 7
      const fraudRate = parseInt(calculatorData.fraudPercentage) || 5
      const employees = parseInt(calculatorData.employeeCount) || 10

      // Annual calculations
      const annualClaimsVolume = monthlyVolume * 12
      const annualClaimsValue = annualClaimsVolume * avgClaimValue

      // Cost savings calculations
      const fraudSavings = (annualClaimsValue * fraudRate / 100) * 0.85 // 85% fraud reduction
      const processingCostSavings = (employees * 50000) * 0.45 // 45% staff efficiency gain
      const timeSavings = (processingTime - 2) * annualClaimsVolume * 50 // Time value per claim

      const totalAnnualSavings = fraudSavings + processingCostSavings + timeSavings
      
      // Platform cost estimate (simplified)
      const platformCost = Math.min(totalAnnualSavings * 0.15, 500000) // 15% of savings, max 500k
      
      const payback = platformCost / (totalAnnualSavings / 12) // months
      const threeYearTotal = (totalAnnualSavings * 3) - platformCost
      const roi = ((threeYearTotal / platformCost) * 100)

      setResults({
        annualSavings: Math.round(totalAnnualSavings),
        paybackPeriod: Math.round(payback * 10) / 10,
        threeYearROI: Math.round(roi),
        fraudReduction: 85,
        timeReduction: Math.round(((processingTime - 2) / processingTime) * 100)
      })
    }
  }, [calculatorData])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const handleInputChange = (field: string, value: string) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const metrics = [
    {
      icon: "ph:rocket-duotone",
      value: "83%",
      label: "Faster Processing",
      description: "14 days → 3.2 days",
      color: "detachd-primary",
      bgColor: "detachd-primary/20"
    },
    {
      icon: "ph:coins-duotone",
      value: "65%",
      label: "Cost Reduction",
      description: "Operational savings",
      color: "detachd-success",
      bgColor: "detachd-success/20"
    },
    {
      icon: "ph:shield-check-duotone",
      value: "40%",
      label: "Better Fraud Detection",
      description: "R2.8M saved annually",
      color: "detachd-warning",
      bgColor: "detachd-warning/20"
    },
    {
      icon: "ph:heart-duotone",
      value: "87%",
      label: "Customer Satisfaction",
      description: "Improved experience",
      color: "detachd-purple",
      bgColor: "detachd-purple/20"
    },
    {
      icon: "ph:target-duotone",
      value: "94.2%",
      label: "Approval Accuracy",
      description: "With 98% fraud detection",
      color: "detachd-accent",
      bgColor: "detachd-accent/20"
    },
    {
      icon: "ph:trending-up-duotone",
      value: "10x",
      label: "Claim Volume",
      description: "Without additional staff",
      color: "detachd-success",
      bgColor: "detachd-success/20"
    }
  ]

  const benefits = [
    {
      category: "Operational Excellence",
      items: [
        "Automated workflow management",
        "Real-time processing capabilities", 
        "Intelligent resource allocation",
        "Seamless system integration"
      ],
      icon: "ph:gear-duotone",
      color: "detachd-primary"
    },
    {
      category: "Financial Impact",
      items: [
        "Reduced operational costs",
        "Faster claim settlements",
        "Improved fraud prevention",
        "Higher profit margins"
      ],
      icon: "ph:chart-line-up-duotone",
      color: "detachd-success"
    },
    {
      category: "Customer Experience",
      items: [
        "Faster claim processing",
        "Transparent communication",
        "Self-service capabilities",
        "Mobile-first design"
      ],
      icon: "ph:user-circle-plus-duotone",
      color: "detachd-accent"
    },
    {
      category: "Risk Management",
      items: [
        "Advanced fraud detection",
        "Real-time risk assessment",
        "Compliance automation",
        "Audit trail maintenance"
      ],
      icon: "ph:shield-duotone",
      color: "detachd-warning"
    }
  ]

  return (
    <section className='py-20 bg-detachd-slate-800 relative overflow-hidden' id='benefits'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-detachd-success/10 rounded-full blur-[120px] animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-64 h-64 bg-detachd-primary/10 rounded-full blur-[100px] animate-pulse delay-1000'></div>
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
          <div className='inline-flex items-center gap-3 bg-detachd-success/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6'>
            <Icon icon="ph:chart-bar-duotone" className='text-detachd-success text-xl' />
            <span className='text-detachd-text-primary font-medium'>Measurable Results</span>
          </div>
          
          <h2 className='text-4xl lg:text-5xl font-bold text-detachd-text-primary mb-6'>
            <span className='block'>Measurable Impact on</span>
            <span className='text-detachd-success'>Your Business</span>
          </h2>
          
          <p className='text-xl text-detachd-text-secondary max-w-3xl mx-auto leading-relaxed'>
            See the tangible results that our clients achieve with Detachd's AI-powered 
            insurance platform. Real metrics from real implementations.
          </p>
        </motion.div>

        {/* ROI Metrics Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 hover:border-detachd-primary/50 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300'
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-${metric.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={metric.icon} className={`text-${metric.color} text-3xl`} />
              </div>

              <div className={`text-4xl lg:text-5xl font-bold text-${metric.color} mb-2`}>
                {metric.value}
              </div>

              <h3 className='text-xl font-bold text-detachd-text-primary mb-2 group-hover:text-detachd-accent transition-colors duration-300'>
                {metric.label}
              </h3>

              <p className='text-detachd-text-secondary'>
                {metric.description}
              </p>

              {/* Hover Effect */}
              <div className='absolute inset-0 bg-gradient-to-br from-detachd-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none'></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Categories */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h3 className='text-3xl font-bold text-detachd-text-primary text-center mb-12'>
            Comprehensive Business Benefits
          </h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-6'
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${benefit.color}/20 rounded-2xl mb-6`}>
                  <Icon icon={benefit.icon} className={`text-${benefit.color} text-2xl`} />
                </div>

                <h4 className='text-lg font-bold text-detachd-text-primary mb-4'>
                  {benefit.category}
                </h4>

                <ul className='space-y-3'>
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-center gap-3'>
                      <div className={`w-2 h-2 bg-${benefit.color} rounded-full flex-shrink-0`}></div>
                      <span className='text-detachd-text-secondary text-sm'>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive ROI Calculator */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-gradient-to-br from-detachd-primary/20 to-detachd-accent/20 backdrop-blur-sm border border-detachd-primary/30 rounded-2xl p-8 lg:p-12'
        >
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-detachd-primary/30 rounded-2xl mb-6'>
                <Icon icon="ph:calculator-duotone" className='text-detachd-primary text-3xl' />
              </div>

              <h3 className='text-3xl font-bold text-detachd-text-primary mb-4'>
                Calculate Your ROI
              </h3>

              <p className='text-xl text-detachd-text-secondary mb-8 leading-relaxed'>
                See exactly how much Detachd can save your organization. Our ROI calculator 
                provides personalized projections based on your current operations.
              </p>
            </div>

            {!showCalculator ? (
              // Initial View with Sample Results
              <div>
                <div className='grid md:grid-cols-3 gap-6 mb-8'>
                  <div className='bg-detachd-dark/50 backdrop-blur-sm rounded-xl p-6 text-center'>
                    <div className='text-2xl font-bold text-detachd-success mb-2'>R2.8M+</div>
                    <div className='text-detachd-text-secondary text-sm'>Average Annual Savings</div>
                  </div>
                  <div className='bg-detachd-dark/50 backdrop-blur-sm rounded-xl p-6 text-center'>
                    <div className='text-2xl font-bold text-detachd-primary mb-2'>6 Months</div>
                    <div className='text-detachd-text-secondary text-sm'>Typical ROI Payback</div>
                  </div>
                  <div className='bg-detachd-dark/50 backdrop-blur-sm rounded-xl p-6 text-center'>
                    <div className='text-2xl font-bold text-detachd-warning mb-2'>340%</div>
                    <div className='text-detachd-text-secondary text-sm'>3-Year ROI Average</div>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <button 
                    onClick={() => setShowCalculator(true)}
                    className='bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
                  >
                    <Icon icon="ph:calculator-duotone" />
                    Calculate My ROI
                  </button>
                  <a 
                    href="mailto:hello@detachd.systems?subject=Case Study Request&body=Hi, I'd like to download the case study for Detachd's ROI analysis."
                    className='border border-detachd-accent text-detachd-accent hover:bg-detachd-accent hover:text-detachd-dark font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
                  >
                    <Icon icon="ph:download-duotone" />
                    Download Case Study
                  </a>
                </div>
              </div>
            ) : (
              // Calculator Form
              <div className='grid lg:grid-cols-2 gap-12'>
                {/* Input Form */}
                <div className='space-y-6'>
                  <h4 className='text-xl font-bold text-detachd-text-primary mb-6'>
                    Your Current Operations
                  </h4>

                  <div>
                    <label className='block text-detachd-text-primary font-medium mb-2'>
                      Monthly Claims Volume
                    </label>
                    <input
                      type="number"
                      value={calculatorData.monthlyClaimsVolume}
                      onChange={(e) => handleInputChange('monthlyClaimsVolume', e.target.value)}
                      placeholder="e.g., 1000"
                      className='w-full px-4 py-3 bg-detachd-dark/50 border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-detachd-text-primary font-medium mb-2'>
                      Average Claim Value (ZAR)
                    </label>
                    <input
                      type="number"
                      value={calculatorData.averageClaimValue}
                      onChange={(e) => handleInputChange('averageClaimValue', e.target.value)}
                      placeholder="e.g., 15000"
                      className='w-full px-4 py-3 bg-detachd-dark/50 border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-detachd-text-primary font-medium mb-2'>
                      Current Processing Time (Days)
                    </label>
                    <input
                      type="number"
                      value={calculatorData.currentProcessingTime}
                      onChange={(e) => handleInputChange('currentProcessingTime', e.target.value)}
                      placeholder="e.g., 14"
                      className='w-full px-4 py-3 bg-detachd-dark/50 border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-detachd-text-primary font-medium mb-2'>
                      Estimated Fraud Rate (%)
                    </label>
                    <input
                      type="number"
                      value={calculatorData.fraudPercentage}
                      onChange={(e) => handleInputChange('fraudPercentage', e.target.value)}
                      placeholder="e.g., 5"
                      className='w-full px-4 py-3 bg-detachd-dark/50 border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none'
                    />
                  </div>

                  <div>
                    <label className='block text-detachd-text-primary font-medium mb-2'>
                      Claims Processing Staff
                    </label>
                    <input
                      type="number"
                      value={calculatorData.employeeCount}
                      onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                      placeholder="e.g., 15"
                      className='w-full px-4 py-3 bg-detachd-dark/50 border border-detachd-slate-700 rounded-lg text-white focus:border-detachd-primary focus:outline-none'
                    />
                  </div>

                  <button 
                    onClick={() => setShowCalculator(false)}
                    className='w-full border border-detachd-slate-600 text-detachd-text-secondary hover:border-detachd-primary hover:text-detachd-primary py-3 px-6 rounded-lg transition-all duration-300'
                  >
                    ← Back to Overview
                  </button>
                </div>

                {/* Results */}
                <div className='bg-detachd-dark/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8'>
                  <h4 className='text-xl font-bold text-detachd-text-primary mb-6'>
                    Your Projected Results
                  </h4>

                  {results.annualSavings > 0 ? (
                    <div className='space-y-6'>
                      <div className='text-center p-6 bg-detachd-success/10 border border-detachd-success/30 rounded-xl'>
                        <div className='text-3xl font-bold text-detachd-success mb-2'>
                          {formatCurrency(results.annualSavings)}
                        </div>
                        <div className='text-detachd-text-secondary'>Annual Savings</div>
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <div className='text-center p-4 bg-detachd-primary/10 border border-detachd-primary/30 rounded-lg'>
                          <div className='text-xl font-bold text-detachd-primary'>
                            {results.paybackPeriod} months
                          </div>
                          <div className='text-detachd-text-secondary text-sm'>Payback Period</div>
                        </div>
                        <div className='text-center p-4 bg-detachd-warning/10 border border-detachd-warning/30 rounded-lg'>
                          <div className='text-xl font-bold text-detachd-warning'>
                            {results.threeYearROI}%
                          </div>
                          <div className='text-detachd-text-secondary text-sm'>3-Year ROI</div>
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                          <span className='text-detachd-text-secondary'>Fraud Reduction:</span>
                          <span className='text-detachd-success font-semibold'>{results.fraudReduction}%</span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-detachd-text-secondary'>Processing Time Saved:</span>
                          <span className='text-detachd-primary font-semibold'>{results.timeReduction}%</span>
                        </div>
                      </div>

                      <div className='pt-4 border-t border-detachd-slate-700'>
                        <a 
                          href={`mailto:hello@detachd.systems?subject=ROI Discussion - ${formatCurrency(results.annualSavings)} potential savings&body=Hi, I calculated potential savings of ${formatCurrency(results.annualSavings)} annually with Detachd. I'd like to discuss this further.`}
                          className='w-full bg-detachd-primary hover:bg-detachd-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
                        >
                          <Icon icon="ph:calendar-duotone" />
                          Schedule Discussion
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className='text-center py-8'>
                      <Icon icon="ph:calculator-duotone" className='text-detachd-text-muted text-4xl mb-4 mx-auto' />
                      <p className='text-detachd-text-muted'>
                        Fill in your operational details to see personalized ROI projections
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsROI 
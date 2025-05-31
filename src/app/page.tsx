import React from 'react'
import DetachdHero from '@/components/Detachd/Hero'
import ProblemStatement from '@/components/Detachd/ProblemStatement'
import SolutionOverview from '@/components/Detachd/SolutionOverview'
import KeyFeatures from '@/components/Detachd/KeyFeatures'
import HowItWorks from '@/components/Detachd/HowItWorks'
import BenefitsROI from '@/components/Detachd/BenefitsROI'
import TechnologyStack from '@/components/Detachd/TechnologyStack'
import Testimonials from '@/components/Detachd/Testimonials'
import CallToAction from '@/components/Detachd/CallToAction'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detachd - Revolutionize Insurance with AI-Powered Automation',
  description: 'Streamline claims processing, reduce fraud, and enhance customer experience with cutting-edge insurtech solutions from Detachd.',
}

export default function Home() {
  return (
    <main className="bg-detachd-dark">
      <DetachdHero />
      <ProblemStatement />
      <SolutionOverview />
      <KeyFeatures />
      <HowItWorks />
      <BenefitsROI />
      <TechnologyStack />
      <Testimonials />
      <CallToAction />
    </main>
  )
}

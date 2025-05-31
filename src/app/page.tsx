import React from 'react'
import DetachdHero from '@/components/Detachd/Hero'
import ProblemStatement from '@/components/Detachd/ProblemStatement'
import SolutionOverview from '@/components/Detachd/SolutionOverview'
import KeyFeatures from '@/components/Detachd/KeyFeatures'
import HowItWorks from '@/components/Detachd/HowItWorks'
import BenefitsROI from '@/components/Detachd/BenefitsROI'
import TechnologyStack from '@/components/Detachd/TechnologyStack'
import FounderStory from '@/components/Detachd/FounderStory'
import Testimonials from '@/components/Detachd/Testimonials'
import CallToAction from '@/components/Detachd/CallToAction'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detachd - Stop Insurance Fraud in South Africa with AI Image Verification',
  description: 'Fighting R7-14 billion in annual insurance fraud through AI-powered image verification. Protecting South Africa\'s R600 billion insurance market with instant claim verification.',
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
      <FounderStory />
      <Testimonials />
      <CallToAction />
    </main>
  )
}

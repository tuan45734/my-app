"use client";

import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PhilosophySection from './components/PhilosophySection';

import TimelineSection from './components/TimelineSection';
import CTASection from './components/CTASection';

export default function GioiThieuPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <PhilosophySection />
     
      <TimelineSection />
      <CTASection />
    </div>
  );
}
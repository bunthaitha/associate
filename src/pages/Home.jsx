import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import IntroSection from '../components/home/IntroSection';
import GlobalNetworkIntro from '../components/home/GlobalNetworkIntro';
import StatsSection from '../components/home/StatsSection';
import HowItWorks from '../components/home/HowItWorks';
import BenefitsSection from '../components/home/BenefitsSection';
import NetworkingFormats from '../components/home/NetworkingFormats';
import MemberStories from '../components/home/MemberStories';
import EventsSection from '../components/home/EventsSection';
import NewsSection from '../components/home/NewsSection';
import GlobalCommunity from '../components/home/GlobalCommunity';
import CTASection from '../components/home/CTASection';
import Newsletter from '../components/home/Newsletter';

export default function Home({ onNavigate, onOpenChapterFinder, onSelectEvent, onOpenApply }) {
  return (
    <main className="page-content home-page">
      {/* 1. HERO SLIDER */}
      <HeroSlider
        onNavigate={onNavigate}
        onOpenChapterFinder={onOpenChapterFinder}
      />

      {/* 2. INTRODUCTION SECTION */}
      <IntroSection onNavigate={onNavigate} />

      {/* 3. GLOBAL NETWORK SECTION */}
      <GlobalNetworkIntro
        onNavigate={onNavigate}
        onOpenChapterFinder={onOpenChapterFinder}
      />

      {/* 4. STATISTICS SECTION */}
      <StatsSection />

      {/* 5. HOW IT WORKS */}
      <HowItWorks />

      {/* 6. MEMBERSHIP BENEFITS */}
      <BenefitsSection />

      {/* 7. NETWORKING FORMATS */}
      <NetworkingFormats
        onNavigate={onNavigate}
        onOpenChapterFinder={onOpenChapterFinder}
      />

      {/* 8. MEMBER STORIES */}
      <MemberStories onNavigate={onNavigate} />

      {/* 9. EVENTS */}
      <EventsSection
        onSelectEvent={onSelectEvent}
        onNavigate={onNavigate}
      />

      {/* 10. NEWS & INSIGHTS */}
      <NewsSection onNavigate={onNavigate} />

      {/* 11. GLOBAL COMMUNITY */}
      <GlobalCommunity
        onOpenChapterFinder={onOpenChapterFinder}
        onNavigate={onNavigate}
      />

      {/* 12. CALL TO ACTION */}
      <CTASection
        onOpenChapterFinder={onOpenChapterFinder}
        onNavigate={onNavigate}
        onOpenApply={onOpenApply}
      />

      {/* 13. NEWSLETTER */}
      <Newsletter />
    </main>
  );
}

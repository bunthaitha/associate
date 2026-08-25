import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import BenefitsSection from '../components/home/BenefitsSection';
import Button from '../components/common/Button';
import { CheckCircle2, UserCheck, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

export default function Membership({ onOpenChapterFinder, onOpenApply }) {
  const steps = [
    {
      num: '01',
      title: 'Visit a Chapter as Guest',
      desc: 'Attend up to two meetings to experience the chapter dynamic, meet members, and verify category availability.'
    },
    {
      num: '02',
      title: 'Submit Formal Application',
      desc: 'Provide credentials, professional licensing proofs, and two executive business references for evaluation.'
    },
    {
      num: '03',
      title: 'Membership Committee Interview',
      desc: 'The chapter committee conducts a structured peer interview to evaluate mutual commercial fit and business ethics.'
    },
    {
      num: '04',
      title: 'Induction & Onboarding',
      desc: 'Lock your category seat, gain full access to the global network directory, and complete Member Success Training.'
    }
  ];

  const faqs = [
    {
      q: 'What does "Category Exclusivity" mean?',
      a: 'Each chapter admits only one member per business specialty (e.g. only one residential realtor, one corporate accountant). Once accepted, all inquiries in your field within that group flow exclusively to you.'
    },
    {
      q: 'What is the weekly time commitment?',
      a: 'Members invest approximately 90 minutes per week for the chapter meeting, plus 1 hour for a bilateral 1-on-1 meeting with another member to develop referral strategies.'
    },
    {
      q: 'Can I visit before committing to an annual membership?',
      a: 'Yes, prospective members are encouraged to visit a local chapter twice as an invited guest before submitting an application.'
    },
    {
      q: 'Can I connect with members outside my home city?',
      a: 'Absolutely. All active members receive access to our global directory of 250,000+ vetted leaders and can request cross-border introductions.'
    }
  ];

  return (
    <div className="page-content page-membership">
      <section className="page-hero-banner">
        <div className="container">
          <span className="eyebrow">MEMBERSHIP</span>
          <h1 className="page-hero-title">An Exclusive Seat at the High-Trust Table</h1>
          <p className="page-hero-sub">
            Secure your industry specialty in a local business chapter and turn fellow ambitious leaders into your most committed advocates.
          </p>
        </div>
      </section>

      {/* Why Join Highlight */}
      <section className="section why-join-section" id="why-join">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="eyebrow">THE COMMERCIAL ADVANTAGE</span>
              <h2>Why Leading Founders Choose DEMO ASSOCIATION</h2>
              <p>
                In competitive markets, cold marketing and paid digital ads continue to see diminishing conversion rates. Peer-referred opportunities, conversely, convert at an average of 4x higher and have lower acquisition costs.
              </p>
              <p>
                As a member, you are not just buying a membership; you are integrating into a dedicated board of non-competing peers whose commercial incentive is to champion your services.
              </p>
              <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={onOpenApply}>
                  Apply for Membership
                </Button>
                <Button variant="secondary" onClick={onOpenChapterFinder}>
                  Find Available Seats
                </Button>
              </div>
            </div>
            <div className="about-story-media">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                alt="Business executives shaking hands"
                className="img-cover about-story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits deep dive */}
      <BenefitsSection />

      {/* Onboarding Journey */}
      <section className="section membership-journey-section" id="apply">
        <div className="container">
          <SectionHeader
            eyebrow="THE ADMISSION PROCESS"
            title="Your Path to Becoming a Member"
            description="A clear, transparent 4-step onboarding journey engineered to protect chapter quality."
            align="center"
          />

          <div className="journey-steps-grid">
            {steps.map((step) => (
              <div key={step.num} className="journey-step-card">
                <span className="journey-step-num">{step.num}</span>
                <h3 className="journey-step-title">{step.title}</h3>
                <p className="journey-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="membership-cta-center" style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button variant="primary" onClick={onOpenApply}>
              Start Your Application Today
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section section-bg-light" id="faq">
        <div className="container">
          <SectionHeader
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Everything You Need to Know"
            description="Have questions about category exclusivity, attendance expectations, or international benefits?"
            align="center"
          />

          <div className="faq-list-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item-card">
                <div className="faq-question-row">
                  <HelpCircle size={20} className="text-primary" />
                  <h4 className="faq-question-text">{faq.q}</h4>
                </div>
                <p className="faq-answer-text">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

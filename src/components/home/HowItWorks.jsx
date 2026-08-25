import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { howItWorksSteps } from '../../data/benefits';

export default function HowItWorks() {
  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="container">
        <SectionHeader
          eyebrow="OUR METHODOLOGY"
          title="How It Works"
          description="A structured, relationship-first referral process engineered to create organic, high-trust business opportunities."
          align="center"
        />

        <div className="how-it-works-grid">
          {howItWorksSteps.map((step) => (
            <div key={step.step} className="how-step-card">
              <div className="how-step-media">
                <img
                  src={step.image}
                  alt={step.title}
                  className="img-cover"
                  loading="lazy"
                />
                <span className="how-step-badge">{step.step}</span>
              </div>
              <div className="how-step-content">
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

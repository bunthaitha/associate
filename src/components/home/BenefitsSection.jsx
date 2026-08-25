import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { membershipBenefits } from '../../data/benefits';

export default function BenefitsSection() {
  return (
    <section className="section benefits-section section-bg-light" id="benefits">
      <div className="container">
        <SectionHeader
          eyebrow="MEMBERSHIP VALUE"
          title="More Than Networking"
          description="Membership provides an active ecosystem designed to elevate your professional reputation, commercial pipeline, and leadership impact."
          align="center"
        />

        <div className="benefits-grid">
          {membershipBenefits.map((benefit) => (
            <div key={benefit.number} className="benefit-card">
              <div className="benefit-card-image-wrap">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="img-cover benefit-card-img"
                  loading="lazy"
                />
                <span className="benefit-number-pill">{benefit.number}</span>
              </div>
              <div className="benefit-card-body">
                <h3 className="benefit-card-title">{benefit.title}</h3>
                <p className="benefit-card-desc">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

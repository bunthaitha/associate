import React from 'react';
import { globalStats } from '../../data/statistics';
import AnimatedCounter from '../common/AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="section stats-section section-bg-light" aria-label="Global Impact Statistics">
      <div className="container">
        <div className="stats-grid">
          {globalStats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-value-wrap">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                  formatted={stat.formatted}
                />
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
        <p className="stats-disclaimer">
          *Illustrative platform figures demonstrating network reach and tracked referral activity.
        </p>
      </div>
    </section>
  );
}

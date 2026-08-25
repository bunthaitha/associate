import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { newsArticles } from '../../data/news';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function NewsSection({ onNavigate }) {
  return (
    <section className="section news-section section-bg-light" id="news">
      <div className="container">
        <div className="news-header-row">
          <SectionHeader
            eyebrow="THOUGHT LEADERSHIP"
            title="Ideas That Move Business Forward"
            description="Proven perspectives on commercial relationship building, category positioning, and peer governance."
            align="left"
            className="news-header-custom"
          />
          <div className="news-header-action">
            <Button
              variant="secondary"
              onClick={() => onNavigate('/community')}
            >
              Browse All Articles
            </Button>
          </div>
        </div>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-media-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="img-cover news-img"
                  loading="lazy"
                />
                <span className="news-category-badge">{article.category}</span>
              </div>

              <div className="news-card-body">
                <div className="news-meta-bar">
                  <span className="news-meta-item">
                    <Calendar size={14} /> {article.date}
                  </span>
                  <span className="news-meta-item">
                    <Clock size={14} /> {article.readTime}
                  </span>
                </div>

                <h3 className="news-card-title">{article.title}</h3>
                <p className="news-card-summary">{article.summary}</p>

                <div className="news-card-footer">
                  <span className="news-author-name">By {article.author}</span>
                  <Button
                    variant="text"
                    onClick={() => onNavigate('/community')}
                    icon={ArrowRight}
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

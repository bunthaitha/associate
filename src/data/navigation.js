export const navLinks = [
  {
    label: 'HOME',
    path: '/',
    id: 'home'
  },
  {
    label: 'ABOUT',
    id: 'about',
    mega: {
      columns: [
        {
          title: 'Organization',
          items: [
            { label: 'About Us', desc: 'Our journey, ethos, and international footprint', path: '/about' },
            { label: 'Our Mission', desc: 'Empowering professionals through trusted relationships', path: '/about#mission' }
          ]
        },
        {
          title: 'People & Values',
          items: [
            { label: 'Our Community', desc: 'Diverse business leaders across 75+ nations', path: '/about#community' },
            { label: 'Global Leadership', desc: 'Meet our executive leadership and advisory board', path: '/about#leadership' }
          ]
        }
      ],
      featured: {
        title: 'Building Stronger Businesses',
        desc: 'Over 25 years of facilitating meaningful professional connections and collaborative success.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        cta: 'Discover Our Story',
        path: '/about'
      }
    }
  },
  {
    label: 'NETWORKING',
    id: 'networking',
    mega: {
      columns: [
        {
          title: 'Methodology',
          items: [
            { label: 'How It Works', desc: 'Structured, relationship-first referral frameworks', path: '/networking#how-it-works' },
            { label: 'Local Chapters', desc: 'Weekly local morning and evening business circles', path: '/networking#chapters' }
          ]
        },
        {
          title: 'Value Creation',
          items: [
            { label: 'Business Referrals', desc: 'High-trust, qualified introductions that convert', path: '/networking#referrals' },
            { label: 'Member Benefits', desc: 'Knowledge sharing, mastermind groups, and growth', path: '/networking#benefits' }
          ]
        }
      ],
      featured: {
        title: 'Connect Your Way',
        desc: 'Choose between in-person meetings, virtual global circles, or flexible hybrid chapter formats.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        cta: 'Explore Formats',
        path: '/networking'
      }
    }
  },
  {
    label: 'MEMBERSHIP',
    id: 'membership',
    mega: {
      columns: [
        {
          title: 'Join The Network',
          items: [
            { label: 'Why Join', desc: 'The tangible ROI of an authentic referral circle', path: '/membership#why-join' },
            { label: 'Membership Benefits', desc: 'Exclusive access to worldwide directory and perks', path: '/membership#benefits' }
          ]
        },
        {
          title: 'Next Steps',
          items: [
            { label: 'Find a Chapter', desc: 'Locate an active business group in your city', path: '/membership#find-chapter' },
            { label: 'Become a Member', desc: 'Application process, ethics vetting, and onboarding', path: '/membership#apply' }
          ]
        }
      ],
      featured: {
        title: 'Exclusive Category Representation',
        desc: 'Lock in your professional industry seat and eliminate internal competition in your chapter.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        cta: 'Apply for Membership',
        path: '/membership'
      }
    }
  },
  {
    label: 'EVENTS',
    path: '/events',
    id: 'events',
    mega: {
      columns: [
        {
          title: 'Community Gatherings',
          items: [
            { label: 'Upcoming Events', desc: 'View calendar of regional and global meetings', path: '/events' },
            { label: 'Networking Meetings', desc: 'Structured chapter sessions open to guests', path: '/events#meetings' }
          ]
        },
        {
          title: 'Development',
          items: [
            { label: 'Business Summits', desc: 'Annual international networking conferences', path: '/events#summits' },
            { label: 'Workshops', desc: 'Masterclasses on referral mastery and negotiation', path: '/events#workshops' }
          ]
        }
      ],
      featured: {
        title: 'Global Leaders Summit 2026',
        desc: 'Join 1,200+ founders and senior executives for 3 days of high-caliber partnership building.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
        cta: 'View All Events',
        path: '/events'
      }
    }
  },
  {
    label: 'CONTACT',
    path: '/contact',
    id: 'contact'
  }
];

export const footerLinks = {
  network: [
    { label: 'How It Works', path: '/networking#how-it-works' },
    { label: 'Local Communities', path: '/membership#find-chapter' },
    { label: 'Member Benefits', path: '/membership#benefits' },
    { label: 'Upcoming Events', path: '/events' },
    { label: 'Find a Chapter', path: '/contact' }
  ],
  about: [
    { label: 'Our Story', path: '/about' },
    { label: 'Mission & Values', path: '/about#mission' },
    { label: 'Global Leadership', path: '/about#leadership' },
    { label: 'International Footprint', path: '/about#community' },
    { label: 'Code of Ethics', path: '/membership' }
  ],
  resources: [
    { label: 'News & Articles', path: '/community#news' },
    { label: 'Networking Insights', path: '/community#insights' },
    { label: 'Member Stories', path: '/community#stories' },
    { label: 'Contact Global HQ', path: '/contact' },
    { label: 'Media & Press', path: '/contact' }
  ],
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Facebook', url: 'https://facebook.com' },
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'YouTube', url: 'https://youtube.com' }
  ]
};

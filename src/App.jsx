import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChapterFinderModal from './components/modals/ChapterFinderModal';
import JoinModal from './components/modals/JoinModal';
import EventDetailsModal from './components/modals/EventDetailsModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Networking from './pages/Networking';
import Membership from './pages/Membership';
import Events from './pages/Events';
import Community from './pages/Community';
import Contact from './pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isChapterFinderOpen, setIsChapterFinderOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);

  // Handle client-side routing & popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (pathWithHash) => {
    const [path, hash] = pathWithHash.split('#');
    const targetPath = path || '/';
    
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', pathWithHash);
      setCurrentPath(targetPath);
    }

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEvent = (event) => {
    setSelectedEventForModal(event);
  };

  // Render current page based on pathname
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return (
          <About
            onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
            onNavigate={navigate}
          />
        );
      case '/networking':
        return (
          <Networking
            onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
            onNavigate={navigate}
          />
        );
      case '/membership':
        return (
          <Membership
            onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
            onOpenApply={() => setIsJoinModalOpen(true)}
          />
        );
      case '/events':
        return (
          <Events
            onSelectEvent={handleOpenEvent}
          />
        );
      case '/community':
        return (
          <Community
            onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
            onNavigate={navigate}
            onOpenApply={() => setIsJoinModalOpen(true)}
          />
        );
      case '/contact':
        return (
          <Contact
            onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
          />
        );
      case '/':
      default:
        return (
          <Home
            onNavigate={navigate}
            onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
            onSelectEvent={handleOpenEvent}
            onOpenApply={() => setIsJoinModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="app-layout">
      {/* Global Navbar with Mega Menu & Mobile Drawer */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
      />

      {/* Main Page View */}
      {renderCurrentPage()}

      {/* Global Footer */}
      <Footer
        onNavigate={navigate}
        onOpenChapterFinder={() => setIsChapterFinderOpen(true)}
      />

      {/* Chapter Finder Modal */}
      <ChapterFinderModal
        isOpen={isChapterFinderOpen}
        onClose={() => setIsChapterFinderOpen(false)}
      />

      {/* Membership Application Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* Event Details & RSVP Modal */}
      <EventDetailsModal
        event={selectedEventForModal}
        isOpen={Boolean(selectedEventForModal)}
        onClose={() => setSelectedEventForModal(null)}
      />
    </div>
  );
}

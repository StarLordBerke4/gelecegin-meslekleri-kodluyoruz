import React, { useState } from 'react';
import { PageType, Career } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CareersPage } from './pages/CareersPage';
import { SkillsPage } from './pages/SkillsPage';
import { CareerGuidePage } from './pages/CareerGuidePage';
import { ContactPage } from './pages/ContactPage';
import { JobComparisonModal } from './components/JobComparisonModal';
import { CareerDetailModal } from './components/CareerDetailModal';
import { SkillQuizModal } from './components/SkillQuizModal';
import { CAREERS_DATA } from './data/careersData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  // Modals & Interactivity States
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [comparisonIds, setComparisonIds] = useState<string[]>(['ai-engineer', 'cyber-security']);
  
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedDetailCareer, setSelectedDetailCareer] = useState<Career | null>(null);
  
  // Navigation State Passing
  const [skillsFilter, setSkillsFilter] = useState<string>('');
  const [guideCareerId, setGuideCareerId] = useState<string>('ai-engineer');

  // Toggle career for comparison tool
  const handleToggleComparison = (id: string) => {
    if (comparisonIds.includes(id)) {
      setComparisonIds(comparisonIds.filter((item) => item !== id));
    } else {
      if (comparisonIds.length >= 3) {
        alert('En fazla 3 meslek aynı anda karşılaştırılabilir.');
        return;
      }
      setComparisonIds([...comparisonIds, id]);
    }
  };

  // Navigators
  const handleNavigateToSkills = (careerTitle: string) => {
    setSkillsFilter(careerTitle);
    setCurrentPage('skills');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToGuide = (careerId: string) => {
    setGuideCareerId(careerId);
    setCurrentPage('guide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFromQuiz = (careerId: string) => {
    const career = CAREERS_DATA.find((c) => c.id === careerId);
    if (career) {
      setSelectedDetailCareer(career);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      
      {/* Shared Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          if (page !== 'skills') setSkillsFilter('');
        }}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenQuiz={() => setIsQuizOpen(true)}
            onSelectCareer={(id) => {
              const career = CAREERS_DATA.find((c) => c.id === id);
              if (career) setSelectedDetailCareer(career);
            }}
            onOpenComparison={() => setIsComparisonOpen(true)}
          />
        )}

        {currentPage === 'careers' && (
          <CareersPage
            onSelectCareerModal={(career) => setSelectedDetailCareer(career)}
            onNavigateToSkills={handleNavigateToSkills}
            selectedComparisonIds={comparisonIds}
            onToggleComparison={handleToggleComparison}
            onOpenComparison={() => setIsComparisonOpen(true)}
          />
        )}

        {currentPage === 'skills' && (
          <SkillsPage
            onNavigate={setCurrentPage}
            onOpenQuiz={() => setIsQuizOpen(true)}
            initialFilter={skillsFilter}
          />
        )}

        {currentPage === 'guide' && (
          <CareerGuidePage
            onNavigate={setCurrentPage}
            selectedCareerId={guideCareerId}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={setCurrentPage}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Interactive Modals */}
      <JobComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        selectedIds={comparisonIds}
        onToggleCareer={handleToggleComparison}
        onNavigateToSkills={handleNavigateToSkills}
      />

      <CareerDetailModal
        career={selectedDetailCareer}
        onClose={() => setSelectedDetailCareer(null)}
        onGoToSkills={handleNavigateToSkills}
        onGoToRoadmap={handleNavigateToGuide}
      />

      <SkillQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onNavigateToCareer={handleNavigateFromQuiz}
      />

    </div>
  );
}

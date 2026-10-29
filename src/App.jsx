import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsultingMethodology from './components/ConsultingMethodology';
import Disciplines from './components/Disciplines';
import IsometricLabSection from './components/IsometricLabSection';
import MembershipCalculator from './components/MembershipCalculator';
import ScheduleSection from './components/ScheduleSection';
import SocialProof from './components/SocialProof';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LeadCaptureModalOrSection from './components/LeadCaptureModalOrSection';
import MobileStickyBar from './components/MobileStickyBar';
import ExitIntentModal from './components/ExitIntentModal';

export default function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadInitialData, setLeadInitialData] = useState(null);

  const handleOpenLeadModal = (source = 'Direct CTA', initialData = null) => {
    setLeadInitialData(initialData);
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
    setLeadInitialData(null);
  };

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlanFromCalculator = (planData) => {
    handleOpenLeadModal('Calculator Plan Match', {
      goal: planData.goal,
      level: planData.level,
      plan: planData.plan,
    });
  };

  const handleBookSlotFromSchedule = (slotData) => {
    handleOpenLeadModal('Schedule Slot Booking', {
      day: slotData.day,
      time: slotData.time,
      discipline: slotData.discipline,
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Fixed Header */}
      <Navbar
        onOpenLeadModal={handleOpenLeadModal}
        onScrollTo={handleScrollTo}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenLeadModal={handleOpenLeadModal}
          onScrollTo={handleScrollTo}
        />

        {/* 2. Consulting Methodology 1-on-1 */}
        <ConsultingMethodology
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 3. Disciplines & Programs */}
        <Disciplines
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 3. Isometric Training Lab */}
        <IsometricLabSection
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 4. Interactive Goal & Membership Calculator */}
        <MembershipCalculator
          onSelectPlanAndLead={handleSelectPlanFromCalculator}
        />

        {/* 4. Interactive Schedules */}
        <ScheduleSection
          onBookSlot={handleBookSlotFromSchedule}
        />

        {/* 5. Social Proof & Transformations */}
        <SocialProof
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 6. Lead Capture Section On-page */}
        <LeadCaptureModalOrSection
          isModal={false}
          initialData={leadInitialData}
        />

        {/* 7. FAQs */}
        <FaqSection
          onOpenLeadModal={handleOpenLeadModal}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLeadModal={handleOpenLeadModal}
        onScrollTo={handleScrollTo}
      />

      {/* Global Conversion Modals & Floating Triggers */}
      <LeadCaptureModalOrSection
        isModal={true}
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        initialData={leadInitialData}
      />

      {/* Persistent Mobile Bottom Sticky Conversion Bar */}
      <MobileStickyBar
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Desktop Exit Intent & VIP Floating Trigger */}
      <ExitIntentModal
        onClaimPass={(src) => handleOpenLeadModal(src)}
      />

    </div>
  );
}

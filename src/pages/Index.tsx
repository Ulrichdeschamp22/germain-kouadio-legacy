import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import Formations from '@/components/Formations';
import Seminaires from '@/components/Seminaires';
import CorpsProfessoral from '@/components/CorpsProfessoral';

import Gallery from '@/components/Gallery';
import AudioPlayer from '@/components/AudioPlayer';
import Biography from '@/components/Biography';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Track active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => sectionObserver.observe(section));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      sections.forEach(section => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <VisionMission />
        <Formations />
        <Seminaires />
        <CorpsProfessoral />
        
        <Gallery />
        <AudioPlayer />
        <Biography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

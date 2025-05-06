'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import ExperienceSection from 'src/components/ExperienceSection';
import HeroSection from 'src/components/HeroSection';
import ProjectSection from 'src/components/ProjectSection';

const Home: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  const sectionRefs = useMemo(
    () => [heroSectionRef, experienceSectionRef, projectSectionRef],
    []
  );

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    i: number
  ) => {
    if (ref.current) {
      setSelectedIndex(i);
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setSelectedIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <div className="md:h-screen md:overflow-hidden">
      {/* Bullet Navigation */}
      <div className="hidden md:flex fixed top-1/2 left-2 transform -translate-y-1/2 flex-col space-y-4 z-50">
        {sectionRefs.map((sectionRef, i) => (
          <button
            key={`section-ref-${i}`}
            onClick={() => scrollToSection(sectionRef, i)}
            className={`text-4xl hover:scale-150 transition-transform select-none cursor-pointer ${
              i === selectedIndex ? 'text-red-500' : 'text-white'
            }`}
          >
            •
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="py-5 overflow-x-hidden md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
        <HeroSection
          ref={heroSectionRef}
          className="md:h-screen md:snap-start p-4 md:pl-12 md:p-10"
        />
        <ExperienceSection
          ref={experienceSectionRef}
          className="md:h-screen md:snap-start"
        />
        <ProjectSection
          ref={projectSectionRef}
          className="md:h-screen md:snap-start"
        />
      </div>
    </div>
  );
};

export default Home;

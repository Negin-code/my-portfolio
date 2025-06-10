import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosArrowDropupCircle } from "react-icons/io";
import { FaFigma } from 'react-icons/fa';
import { SiCanva, SiGoogleforms, SiZoom } from "react-icons/si";
import { MdAssessment } from "react-icons/md";
import ProjectHero from '../Components/ProjectHero';
import ObjectiveCard from '../Components/ObjectiveCard';
import HMWSection from '../Components/HMWSection';
import UserStudySection from '../Components/UserStudySection';
import SUSScoreSection from '../Components/SUSScoreSection';
import TaskInsightSection from '../Components/TaskInsightSection';
import KeyTakeawaysSection from '../Components/KeyTakeawaysSection';
import ReflectionSection from '../Components/ReflectionSection';
import NextStepsSection from '../Components/NextStepsSection';
import GuardianImage from "../assets/Guardiancard.webp"; // Temporarily using Guardian image
import SolutionsSection from '../Components/SolutionsSection';

const GoodReads = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Project Content Container */}
      <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 ml-20 lg:ml-10">
        <ProjectHero 
          title="GoodReads Website Usability Study"
          image={GuardianImage}
          imageAlt="GoodReads Website Usability Study Preview"
        />

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
          {/* Project Type Card */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">Project Type</h3>
                <p className="text-base sm:text-lg font-medium text-[#493B32]">4-week study</p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">(UX Research)</p>
              </div>
            </div>
          </div>

          {/* Team Size Card */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">Team Size</h3>
                <p className="text-base sm:text-lg font-medium text-[#493B32]">4 members</p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">Team project</p>
              </div>
            </div>
          </div>

          {/* Role Card */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">My Role</h3>
                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-medium text-[#493B32]">UX/UI Designer</p>
                  <p className="text-base sm:text-lg font-medium text-[#493B32]">Research Facilitator</p>
                  <p className="text-base sm:text-lg font-medium text-[#493B32]">Prototype Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Process Card */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-4 sm:mb-5">Tools & Process</h3>
                <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 flex-wrap">
                  {/* Figma Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="Figma">
                    <FaFigma className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                  </div>
                  
                  {/* Canva Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="Canva">
                    <SiCanva className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                  </div>

                  {/* Zoom Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="Zoom">
                    <SiZoom className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                  </div>

                  {/* SUS Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="System Usability Scale (SUS)">
                    <MdAssessment className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                  </div>

                  {/* Google Forms Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="Google Forms">
                    <SiGoogleforms className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview Section */}
        <section id="overview" className="space-y-6 mt-12">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
              Project Overview
            </h2>
          </div>

          <p className="text-[#493B32] leading-relaxed text-lg">
            Goodreads is a well-established platform for book lovers, but key features—like organizing shelves, connecting with readers, and engaging in discussions—have become frustratingly outdated. Through user testing, we identified critical usability gaps and redesigned the experience with more intuitive, modern interactions.
          </p>
        </section>

         {/* How Might We Section */}
         <section className="mt-16 mb-16">
          <HMWSection 
            question="...make Goodreads more intuitive and socially connected, by redesigning key features like shelf creation, friend search, and community discussion?"
          />
        </section>


        {/* Project Objectives Section */}
        <section id="objectives" className="space-y-6 mt-16">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
              Project Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ObjectiveCard
              number="01"
              title="Improve Task Success"
              description="Increase success rate of core Goodreads tasks by 25% through intuitive interface design and streamlined user flows"
            />
            <ObjectiveCard
              number="02"
              title="Enhance Usability"
              description="Raise System Usability Scale (SUS) score from 53 to 70+ by implementing user-centered design improvements"
            />
            <ObjectiveCard
              number="03"
              title="Community Focus"
              description="Create a streamlined, community-first experience that better connects readers and facilitates meaningful discussions"
            />
          </div>
        </section>

        
       
        {/* User Study Section */}
        <section id="study" className="mt-12">
          <UserStudySection />
        </section>

        {/* SUS Score Section */}
        <section id="sus" className="mt-16">
          <SUSScoreSection />
        </section>

        {/* Tasks & Insights Section */}
        <section id="tasks" className="mt-16">
          <TaskInsightSection />
        </section>

        {/* Key Takeaways Section */}
        <section id="takeaways" className="mt-16">
          <KeyTakeawaysSection />
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="mt-16">
          <SolutionsSection />
        </section>

        {/* Prototype Section */}
        <section id="prototype" className="mt-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-tan text-[#493B32]">
                Interactive Prototype
              </h2>
              <a 
                href="https://www.figma.com/proto/your-prototype-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#493B32] text-white rounded-lg hover:bg-[#493B32]/90 transition-colors group"
              >
                <FaFigma className="w-4 h-4" />
                <span className="font-medium">View in Figma</span>
                <svg 
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Reflections Section */}
        <section id="reflections" className="mt-16">
          <ReflectionSection />
        </section>

        {/* Next Steps Section */}
        <section id="next" className="mt-16 mb-16">
          <NextStepsSection />
        </section>
      </div>
    </main>
  );
};

export default GoodReads;
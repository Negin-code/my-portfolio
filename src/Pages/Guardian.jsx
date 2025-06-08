import React, { useState } from "react";
import {
  IoWarningOutline,
  IoLockClosedOutline,
  IoMedkitOutline,
  IoAlertOutline,
  IoLocationOutline,
  IoHeartOutline
} from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import GuardianImage from "../assets/hero.png";
import PersonaImage from "../assets/Persona.jpg";
import WelcomeImageV1 from "../assets/Welcome-V1.svg";
import WelcomeImage from "../assets/Welcome.svg";
import HomeImage from "../assets/Home.svg";
import HomeImageV1 from "../assets/Home-V1.svg";
import TimerImageV1 from "../assets/TimerV1.svg";
import TimerImageV2 from "../assets/TimerV2.svg";
import TimerImage from "../assets/Timer.svg";
import ContactImage from "../assets/AddContact.svg";
import DrugAlertImage from "../assets/DrugAlertFeed.svg";
import ResourceHubImage from "../assets/ResourcesHome.svg";


import "./Guardian.css";
import ProjectHero from '../Components/ProjectHero';

const Guardian = () => {
  const [selectedFeature, setSelectedFeature] = useState(1);
  const [activeVersion, setActiveVersion] = useState(1);

  const updateActiveVersion = (version) => {
    setActiveVersion(version);
  };

  const features = [
    {
      id: 1,
      title: "Timer Setup",
      description: "Set customizable timers based on substance type. Automatic alerts sent if unresponsive.",
      image: TimerImage // Updated here
    },
    {
      id: 2,
      title: "Custom Contacts",
      description: "Add and manage trusted emergency contacts. Choose who gets notified and when.",
      image: ContactImage 
    },
    {
      id: 3,
      title: "Live Alerts Feed",
      description: "Real-time drug contamination alerts from Vancouver Coastal Health, prioritized by severity.",
      image: DrugAlertImage 
    },
    {
      id: 4,
      title: "Resource Hub",
      description: "Access harm reduction guides, naloxone training resources, and mental health support.",
      image: WelcomeImageV1 
    },
    {
      id: 5,
      title: "Anonymous Mode",
      description: "Use the app without registration. Privacy-first approach with no personal data stored.",
      image: WelcomeImageV1 
    }
  ];

  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Project Content Container */}
      <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 ml-20 lg:ml-10">
        <ProjectHero 
          title="Guardian - Overdose Prevention App"
          image={GuardianImage}
          imageAlt="Guardian Project Preview"
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
                <p className="text-base sm:text-lg font-medium text-[#493B32]">5-week design sprint</p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">(Lean UX)</p>
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
                <p className="text-base sm:text-lg font-medium text-[#493B32]">2 members</p>
                <p className="text-xs sm:text-sm text-[#493B32]/80 mt-0.5 sm:mt-1">Collaborative effort</p>
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
                <p className="text-base sm:text-lg font-medium text-[#493B32]">UX/UI Designer</p>
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
                <h3 className="text-xs sm:text-sm font-medium text-[#493B32]/60 mb-0.5 sm:mb-1">Tools & Process</h3>
                <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                  {/* Figma Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="Figma">
                    <FaFigma className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
                  </div>
                  
                  {/* Canva Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#493B32]/5 rounded-lg hover:bg-[#493B32]/10 transition-colors group cursor-pointer" title="Canva">
                    <SiCanva className="w-4 h-4 sm:w-5 sm:h-5 text-[#493B32]" />
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
            Guardian is a harm reduction mobile application designed for
            recreational substance users, particularly young adults like Evelyn
            who use drugs in isolation or in social settings. The app acts as a
            virtual safety companion, offering real-time monitoring, overdose
            alerts, and access to local support resources. This case study
            outlines the UX/UI design process behind Guardian, emphasizing
            empathy, accessibility, and emotional clarity.
          </p>
        </section>

        {/* Problem Section */}
        <section id="problem" className="space-y-6 mt-16">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
              The Problem
            </h2>
          </div>

          <div className="bg-[#493B32]/5 p-8 rounded-lg border border-[#493B32]/10">
            <p className="text-[#493B32] leading-relaxed text-lg">
              Many people who use drugs casually or alone face a high risk of
              fatal overdose, particularly due to the presence of hidden
              substances like fentanyl. Existing harm reduction services such as
              supervised consumption sites are often unavailable, inaccessible,
              or stigmatized. Users need a discreet, tech-based solution that
              provides real-time safety monitoring without judgment or social
              friction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-md border border-red-200 transition-all duration-300 hover:bg-red-100">
              <IoWarningOutline className="text-red-600 text-xl" />
              <span className="text-red-700 font-medium">High Risk</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-md border border-amber-200 transition-all duration-300 hover:bg-amber-100">
              <IoLockClosedOutline className="text-amber-600 text-xl" />
              <span className="text-amber-700 font-medium">Limited Access</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-md border border-purple-200 transition-all duration-300 hover:bg-purple-100">
              <IoMedkitOutline className="text-purple-600 text-xl" />
              <span className="text-purple-700 font-medium">Social Stigma</span>
            </div>
          </div>
        </section>

        {/* Research & discovery section */}
        <section id="research-discovery" className="space-y-6 mt-16">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
              Research & Discovery
            </h2>
          </div>
          {/* User insight Subsection */}
          <div className="space-y-6 mt-8">
            <div className="flex flex-row items-center gap-2 pl-4">
              <div className="w-[2vh] sm:w-[2vh] md:w-[3vh] h-[2px] bg-[#493B32]"></div>
              <h3 className="text-xl sm:text-2xl font-tan text-[#493B32]">
                User Insight
              </h3>
            </div>

            <div className="bg-gradient-to-r from-[#493B32]/10 to-[#493B32]/5 p-8 rounded-lg border-l-4 border-[#493B32] shadow-lg transform hover:scale-[1.01] transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#493B32]/10">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-[#493B32]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-3 flex-grow">
                  <p className="text-[#493B32] text-lg md:text-xl leading-relaxed">
                    Evelyn was created based on firsthand insights from one of
                    our team members with direct experience in the overdose
                    prevention sector. This grounding ensured the persona
                    reflected realistic fears, behaviors, and needs.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-1 w-16 bg-[#493B32]/30 rounded-full"></div>
                    <span className="text-[#493B32]/70 text-sm font-medium uppercase tracking-wider">
                      Research Note
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* User Persona Subsection */}
          <div id="user-persona" className="space-y-6 mt-8">
            <div className="flex flex-row items-center gap-2 pl-4">
              <div className="w-[2vh] sm:w-[2vh] md:w-[3vh] h-[2px] bg-[#493B32]"></div>
              <h3 className="text-xl sm:text-2xl font-tan text-[#493B32]">
                User Persona
              </h3>
            </div>

            <div className="bg-gradient-to-br from-[#FFF7F2] to-[#493B32]/5 p-8 rounded-lg border border-[#493B32]/10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Basic Info & Image */}
                <div className="space-y-6">
                  <div className="w-full h-110 mb-4">
                    <img
                      src={PersonaImage}
                      alt="Evelyn Chen - User Persona"
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>

                  {/* Basic Info Card */}
                  <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#493B32]/10">
                    <h3 className="text-3xl font-tan text-[#493B32] mb-4">
                      Evelyn
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-[#493B32]/70">AGE</p>
                        <p className="text-[#493B32]">23</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#493B32]/70">LOCATION</p>
                        <p className="text-[#493B32]">Vancouver, BC</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#493B32]/70">EDUCATION</p>
                        <p className="text-[#493B32]">College Student</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#493B32]/70">OCCUPATION</p>
                        <p className="text-[#493B32]">Part-time Barista</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-[#493B32] text-lg">
                        ABOUT
                      </h4>
                      <p className="text-[#493B32] leading-relaxed">
                        Evelyn is a social and creative UBC student. She is
                        diligent at her studies and works part time after class.
                        On the weekends, she enjoys letting loose and attending
                        raves and concerts. She and her friends enjoy
                        experimenting with club drugs recreationally. However,
                        with the recent overdose crisis, she is concerned about
                        the risks of a poisoned drug supply.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Goals, Skills & Pain Points */}
                <div className="space-y-6">
                  {/* Pain Points */}
                  <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#493B32]/10">
                    <h4 className="font-medium text-[#493B32] text-lg mb-4">
                      PAIN POINTS
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50/50 rounded-lg border border-red-100">
                        <p className="text-[#493B32]">
                          Fear of overdosing while alone and not being found in
                          time.
                        </p>
                      </div>
                      <div className="p-4 bg-amber-50/50 rounded-lg border border-amber-100">
                        <p className="text-[#493B32]">
                          Feels like Harm Reduction services are often tailored
                          towards street-entrenched drug users rather than a
                          recreational demographic.
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                        <p className="text-[#493B32]">
                          Concerned about exposure and indiscretion.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#493B32]/10">
                    <h4 className="font-medium text-[#493B32] text-lg mb-4">
                      GOALS
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#493B32]"></div>
                        <p className="text-[#493B32]">
                          Stay safe when using substances alone or with friends.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#493B32]"></div>
                        <p className="text-[#493B32]">
                          Avoid emergency medical services unless absolutely
                          necessary.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#493B32]"></div>
                        <p className="text-[#493B32]">
                          Maintain privacy and autonomy.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#493B32]"></div>
                        <p className="text-[#493B32]">
                          Access real-time drug safety alerts.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#493B32]"></div>
                        <p className="text-[#493B32]">
                          Find relevant harm reduction info without feeling
                          stigmatized.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Skills Section */}
                  <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-[#493B32]/10">
                    <h4 className="font-medium text-[#493B32] text-lg mb-4">
                      SKILLS
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[#493B32]">
                            Tech Literacy
                          </span>
                          <span className="text-sm text-[#493B32]">80%</span>
                        </div>
                        <div className="h-2 bg-[#493B32]/10 rounded-full">
                          <div className="h-full w-[80%] bg-[#493B32] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[#493B32]">
                            Responsibility
                          </span>
                          <span className="text-sm text-[#493B32]">50%</span>
                        </div>
                        <div className="h-2 bg-[#493B32]/10 rounded-full">
                          <div className="h-full w-[50%] bg-[#493B32] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[#493B32]">
                            Creativity
                          </span>
                          <span className="text-sm text-[#493B32]">90%</span>
                        </div>
                        <div className="h-2 bg-[#493B32]/10 rounded-full">
                          <div className="h-full w-[90%] bg-[#493B32] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* User Journey map Subsection */}
          <div className="space-y-6 mt-12">
            <div className="flex flex-row items-center gap-2 pl-4">
              <div className="w-[2vh] sm:w-[2vh] md:w-[3vh] h-[2px] bg-[#493B32]"></div>
              <h3 className="text-xl sm:text-2xl font-tan text-[#493B32]">
                User Journey Map
              </h3>
            </div>

            {/* Mobile Notice */}
            <div className="md:hidden p-4 bg-amber-50 rounded-lg border border-amber-200 mb-4">
              <p className="text-sm text-amber-800">
                Scroll horizontally to view the complete journey map →
              </p>
            </div>

            {/* Journey Map Container */}
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <div className="min-w-[1000px] bg-white/50 rounded-lg border border-[#493B32]/10">
                {/* Headers */}
                <div className="grid grid-cols-8 border-b border-[#493B32]/10">
                  <div className="p-4 bg-[#493B32] text-white font-medium rounded-tl-lg">
                    <span className="text-sm uppercase tracking-wider">
                      Stages
                    </span>
                  </div>
                  {[
                    "Awareness",
                    "Download & Set Up",
                    "Add Contacts",
                    "Pre-Use Routine",
                    "Using & Waiting",
                    "Response & Recovery",
                    "Reflection",
                  ].map((stage, index) => (
                    <div
                      key={stage}
                      className={`p-4 bg-[#493B32] text-white font-medium ${
                        index === 6 ? "rounded-tr-lg" : ""
                      }`}
                    >
                      <span className="text-sm uppercase tracking-wider">
                        {stage}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="grid grid-cols-8 border-b border-[#493B32]/10 hover:bg-[#493B32]/5 transition-colors duration-200">
                  <div className="p-4 bg-[#493B32]/5 font-medium sticky left-0">
                    <span className="text-sm font-medium text-[#493B32] uppercase tracking-wider">
                      Actions
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      She learns about app through a friend at a festival
                      harm-reduction service
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Installs the app from App Store, registers with basic
                      info, enables "Anonymous Mode"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Adds roommate and close friends as emergency contacts,
                      enables location sharing
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Opens the app, sets the type of drug she is going to use
                      and timer will set up accordingly
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      App runs timer in background, she continues with her
                      activity
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Roommate receives alert, calls 911 and checks on Jamie
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      She opens the app next day to review incident and read
                      harm-reduction tips
                    </p>
                  </div>
                </div>

                {/* Thoughts Row */}
                <div className="grid grid-cols-8 border-b border-[#493B32]/10 hover:bg-[#493B32]/5 transition-colors duration-200">
                  <div className="p-4 bg-[#493B32]/5 font-medium sticky left-0">
                    <span className="text-sm font-medium text-[#493B32] uppercase tracking-wider">
                      Thoughts
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "This might be a safer way to use if I'm alone or even
                      with friends"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "I like that I don't need to create an account right away"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "I hope they're okay with getting alerts if something
                      happens"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "I just want to relax and know I'm covered if something
                      goes wrong"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "I need to remember to hit 'I'm OK' when I'm done"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "That app probably saved my life"
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      "I need to be more careful — but I'm glad this app was
                      there"
                    </p>
                  </div>
                </div>

                {/* Feelings Row */}
                <div className="grid grid-cols-8 border-b border-[#493B32]/10 hover:bg-[#493B32]/5 transition-colors duration-200">
                  <div className="p-4 bg-[#493B32]/5 font-medium sticky left-0">
                    <span className="text-sm font-medium text-[#493B32] uppercase tracking-wider">
                      Feelings
                    </span>
                  </div>
                  {[
                    { emoji: "🤔", text: "Curious, slightly skeptical" },
                    { emoji: "😌", text: "Reassured, cautious" },
                    { emoji: "😟", text: "Vulnerable but proactive" },
                    { emoji: "😊", text: "Calm, comforted" },
                    { emoji: "😴", text: "Neutral, relaxed" },
                    { emoji: "😥", text: "Grateful (post-event)" },
                    { emoji: "🤗", text: "Reflective, supported" },
                  ].map((feeling, index) => (
                    <div key={index} className="p-4">
                      <div className="flex flex-col items-center gap-2 transform hover:scale-105 transition-transform duration-200">
                        <span className="text-3xl sm:text-4xl">
                          {feeling.emoji}
                        </span>
                        <span className="text-xs sm:text-sm text-[#493B32] text-center font-medium">
                          {feeling.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Opportunities Row */}
                <div className="grid grid-cols-8 hover:bg-[#493B32]/5 transition-colors duration-200">
                  <div className="p-4 bg-[#493B32]/5 font-medium sticky left-0 rounded-bl-lg">
                    <span className="text-sm font-medium text-[#493B32] uppercase tracking-wider">
                      Opportunities
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Peer outreach and education
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Fast onboarding, anonymous entry, optional deeper setup
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Friendly UX, educational tooltips
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Easy timer interface, customizable reminder sounds
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      App notifications, gentle reminders
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#493B32]">
                      Post-alert recap, resources, option to speak with support
                      worker
                    </p>
                  </div>
                  <div className="p-4 rounded-br-lg">
                    <p className="text-sm text-[#493B32]">
                      Offer check-in messages, option to speak to harm-reduction
                      hotline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scenario Planning Subsection */}
          <div className="space-y-6 mt-12">
            <div className="flex flex-row items-center gap-2 pl-4">
              <div className="w-[2vh] sm:w-[2vh] md:w-[3vh] h-[2px] bg-[#493B32]"></div>
              <h3 className="text-xl sm:text-2xl font-tan text-[#493B32]">
                Scenario Planning
              </h3>
            </div>

            {/* Scenario Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {/* Scenario 1: Uses Alone At Home */}
              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-red-900">
                      Scenario 1: Uses Alone At Home
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-red-800">
                          Before (Without Guardian):
                        </p>
                        <p className="text-sm text-red-700">
                          Evelyn uses a pill by herself in a new night to
                          unwind. Experiences the typical set-up alone: finding
                          a comfortable spot, using without any safety measures
                          in place.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-800">
                          After (With Guardian):
                        </p>
                        <p className="text-sm text-red-700">
                          Evelyn opens Guardian, sets up a 15-minute timer,
                          checks in with her roommate, and has location services
                          on for the session.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-red-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Risk Management
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Solo Safety
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Time Control
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scenario 2: At A Rave With Friends */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-purple-900">
                      Scenario 2: At A Rave With Friends
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-purple-800">
                          Before (Without Guardian):
                        </p>
                        <p className="text-sm text-purple-700">
                          Evelyn takes a substance with friends at a crowded
                          venue. Everyone gets separated. There's too much noise
                          to coordinate or check in with each other.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-purple-800">
                          After (With Guardian):
                        </p>
                        <p className="text-sm text-purple-700">
                          She starts a Guardian session noting timing, has GPS
                          and shares it with a designated friend. They can check
                          in on her emergency contact features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-purple-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        Group Safety
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        Location Sharing
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        Friend Network
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scenario 3: Bad Reaction Or Panic Attack */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-amber-900">
                      Scenario 3: Bad Reaction Or Panic Attack
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-amber-800">
                          Before (Without Guardian):
                        </p>
                        <p className="text-sm text-amber-700">
                          Evelyn feels a new substance isn't reacting well with
                          her system. She doesn't want to call 911 but needs
                          help. No one is around.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-amber-800">
                          After (With Guardian):
                        </p>
                        <p className="text-sm text-amber-700">
                          Uses the SOS button to alert her friend. Accesses harm
                          reduction resources and can connect with a counselor
                          if needed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-amber-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                        Emergency Response
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                        Support Access
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scenario 4: Takes Unknown Substance */}
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-green-900">
                      Scenario 4: Takes Unknown Substance
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Before (Without Guardian):
                        </p>
                        <p className="text-sm text-green-700">
                          A friend hands her a pill at a party. She's unsure of
                          its content. Wants to be safe but doesn't want to kill
                          the vibe.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          After (With Guardian):
                        </p>
                        <p className="text-sm text-green-700">
                          Before taking anything, she checks the app's drug
                          safety tips and alerts her trusted contacts of her
                          plans.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-green-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Harm Prevention
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Education
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel Controls - Only visible on mobile */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              <div className="w-2 h-2 rounded-full bg-[#493B32]"></div>
              <div className="w-2 h-2 rounded-full bg-[#493B32]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#493B32]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#493B32]/30"></div>
            </div>
          </div>

          {/* Narrative Arc Subsection */}
          <div className="space-y-6 mt-12">
            <div className="flex flex-row items-center gap-2 pl-4">
              <div className="w-[2vh] sm:w-[2vh] md:w-[3vh] h-[2px] bg-[#493B32]"></div>
              <h3 className="text-xl sm:text-2xl font-tan text-[#493B32]">
                The 4 C's of Guardian's Story
              </h3>
            </div>

            {/* Arc Container */}
            <div className="relative w-full bg-[#FFF7F2] p-8 rounded-lg border border-[#493B32]/10">
              <div className="max-w-4xl mx-auto">
                {/* Title and Description */}
                <div className="text-center mb-8">
                  <p className="text-base font-open text-[#493B32]/70">The journey of Guardian's development through the classic story arc</p>
                </div>

                {/* SVG Arc */}
                <div className="relative h-[500px] w-full">
                  {/* Content Cards - Positioned BEHIND the SVG */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full">
                      {/* Context Content */}
                      <div className="absolute left-[5%] bottom-[5%] max-w-[200px] bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
                        <p className="text-xs text-[#493B32]">After initial research, She downloads the app</p>
                      </div>

                      {/* Conflict Content */}
                      <div className="absolute left-[5%] top-[22%] max-w-[200px] bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
                        <p className="text-xs text-[#493B32]">Evelyn attends a rave on the weekend with friends. They've bought pills from a new source.</p>
                      </div>
                      <div className="absolute left-[5%] top-[40%] max-w-[200px] bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
                        <p className="text-xs text-[#493B32]">She's unsure about the pill's safety due to recent overdose warnings on Instagram.</p>
                      </div>

                      {/* Climax Content */}
                      <div className="absolute left-[55%] top-[5%] max-w-[200px] bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
                        <p className="text-xs text-[#493B32]"> Decides to use the app. Sets her roommate as a contact, and enters "Pills" as method then the timer activated.</p>
                      </div>
                      <div className="absolute left-[75%] top-[30%] max-w-[200px] bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
                        <p className="text-xs text-[#493B32]"> Evelyn doesn't tap "I'm OK" in time. App sends alert + GPS to roommate. Roommate checks in and revives her. After the event, Evelyn reads resources in the app, finds naloxone training nearby, and shares app with friends</p>
                      </div>

                      {/* Closure Content */}
                      <div className="absolute right-[5%] bottom-[5%] max-w-[200px] bg-white/80 p-3 rounded-lg shadow-sm backdrop-blur-sm">
                        <p className="text-xs text-[#493B32]">App becomes a trusted harm-reduction tool</p>
                      </div>
                    </div>
                  </div>

                  {/* SVG with points and labels - Positioned ABOVE the content cards */}
                  <svg className="w-full h-full absolute top-0 left-0 z-10" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
                    {/* Background Grid - subtle lines */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#493B32" strokeWidth="0.1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Main Arc Path */}
                    <path
                      d="M 50,350 C 200,350 350,100 400,100 C 450,100 600,350 750,350"
                      fill="none"
                      stroke="#493B32"
                      strokeWidth="3"
                      className="animate-draw-line"
                    />

                    {/* Points and Labels */}
                    {/* Context */}
                    <g>
                      <circle cx="50" cy="350" r="6" fill="#493B32"/>
                      <text x="50" y="380" textAnchor="middle" className="text-sm font-medium" fill="#493B32">Research</text>
                      <text x="50" y="395" textAnchor="middle" className="text-xs" fill="#493B32">CONTEXT</text>
                    </g>

                    {/* Conflict */}
                    <g>
                      <circle cx="243" cy="245" r="6" fill="#493B32"/>
                      <text x="250" y="220" textAnchor="middle" className="text-sm font-medium" fill="#493B32">Core Insight</text>
                      <text x="250" y="235" textAnchor="middle" className="text-xs" fill="#493B32">CONFLICT</text>
                    </g>

                    {/* Climax */}
                    <g>
                      <circle cx="400" cy="100" r="6" fill="#493B32"/>
                      <text x="400" y="80" textAnchor="middle" className="text-sm font-medium" fill="#493B32">Solution</text>
                      <text x="400" y="65" textAnchor="middle" className="text-xs" fill="#493B32">CLIMAX</text>
                    </g>

                    {/* Closure */}
                    <g>
                      <circle cx="750" cy="350" r="6" fill="#493B32"/>
                      <text x="750" y="380" textAnchor="middle" className="text-sm font-medium" fill="#493B32">Vision of Future</text>
                      <text x="750" y="395" textAnchor="middle" className="text-xs" fill="#493B32">CLOSURE</text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Design goals section */}
        <section id="design-goals" className="space-y-6 mt-16">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
              Design Goals
            </h2>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Goal 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#493B32]/5 to-[#493B32]/10 transform skew-y-0 -rotate-3 rounded-2xl transition-transform group-hover:-rotate-1"></div>
              <div className="relative bg-gradient-to-br from-white to-[#FFF7F2] p-6 rounded-xl border border-[#493B32]/10 shadow-sm transform transition-transform group-hover:scale-[1.02]">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#493B32]/10 flex items-center justify-center">
                  <IoLockClosedOutline className="w-6 h-6 text-[#493B32]" />
                </div>
                <p className="text-[#493B32] font-medium leading-relaxed">
                  Offer a judgment-free, anonymous experience
                </p>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#493B32]/5 to-[#493B32]/10 transform skew-y-0 -rotate-3 rounded-2xl transition-transform group-hover:-rotate-1"></div>
              <div className="relative bg-gradient-to-br from-white to-[#FFF7F2] p-6 rounded-xl border border-[#493B32]/10 shadow-sm transform transition-transform group-hover:scale-[1.02]">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#493B32]/10 flex items-center justify-center">
                  <IoAlertOutline className="w-6 h-6 text-[#493B32]" />
                </div>
                <p className="text-[#493B32] font-medium leading-relaxed">
                  Enable real-time safety monitoring and emergency alerts
                </p>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#493B32]/5 to-[#493B32]/10 transform skew-y-0 -rotate-3 rounded-2xl transition-transform group-hover:-rotate-1"></div>
              <div className="relative bg-gradient-to-br from-white to-[#FFF7F2] p-6 rounded-xl border border-[#493B32]/10 shadow-sm transform transition-transform group-hover:scale-[1.02]">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#493B32]/10 flex items-center justify-center">
                  <IoLocationOutline className="w-6 h-6 text-[#493B32]" />
                </div>
                <p className="text-[#493B32] font-medium leading-relaxed">
                  Provide localized, up-to-date drug alerts and resources
                </p>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#493B32]/5 to-[#493B32]/10 transform skew-y-0 -rotate-3 rounded-2xl transition-transform group-hover:-rotate-1"></div>
              <div className="relative bg-gradient-to-br from-white to-[#FFF7F2] p-6 rounded-xl border border-[#493B32]/10 shadow-sm transform transition-transform group-hover:scale-[1.02]">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#493B32]/10 flex items-center justify-center">
                  <IoHeartOutline className="w-6 h-6 text-[#493B32]" />
                </div>
                <p className="text-[#493B32] font-medium leading-relaxed">
                  Maintain a calm, emotionally supportive interface
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Key Features section */}
        <section id="key-features" className="mt-16 overflow-hidden">
          <div className="flex flex-row items-center gap-2 mb-12">
            <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
            <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
              Key Features
            </h2>
          </div>

          {/* Decorative Frame Container */}
          <div className="relative mx-auto max-w-[1200px] p-4 md:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#FFF7F2] rounded-3xl shadow-lg">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 rounded-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-4 md:p-8 lg:p-12">
              {/* Features Carousel Container */}
              <div className="relative">
                {/* Background Design Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 -left-10 w-40 h-40 bg-[#F75590]/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-[#493B32]/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-b from-transparent via-[#FFF7F2]/50 to-transparent"></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 max-w-6xl mx-auto">
                  {/* Feature Category Label */}
                  <div className="text-center mb-8">
                    <span className="inline-block px-6 py-2 bg-[#493B32]/5 rounded-full text-sm font-medium text-[#493B32]/70 tracking-wider uppercase">
                      Feature {selectedFeature} of {features.length}
                    </span>
                  </div>

                  {/* iPhone Frame Container */}
                  <div className="relative">
                    {/* Left Gradient Overlay */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10"
                      style={{
                        background: 'linear-gradient(to right, #FFF7F2, transparent)'
                      }}
                    ></div>
                    
                    {/* Right Gradient Overlay */}
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10"
                      style={{
                        background: 'linear-gradient(to left, #FFF7F2, transparent)'
                      }}
                    ></div>

                    {/* iPhone Frame */}
                    <div className="w-[240px] md:w-[320px] h-[480px] md:h-[660px] mx-auto relative transform transition-transform duration-700 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-[#F75590] rounded-[45px] md:rounded-[55px] p-4 shadow-xl">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95px] md:w-[126px] h-[26px] md:h-[35px] bg-[#F75590] rounded-b-[18px] md:rounded-b-[24px] flex items-center justify-center">
                          <div className="w-[68px] md:w-[90px] h-[18px] md:h-[24px] bg-black rounded-[15px] md:rounded-[20px] flex items-center">
                            <div className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[30px] md:w-[40px] h-[3px] md:h-[4px] rounded-full bg-[#1a1a1a] ml-2"></div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute top-[83px] md:top-[110px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[143px] md:top-[190px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[180px] md:top-[240px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[98px] md:top-[130px] -right-[2px] w-[3px] md:w-[4px] h-[38px] md:h-[50px] bg-[#2a2a2a] rounded-r-full"></div>

                        {/* Screen Content */}
                        <div className="relative w-full h-full rounded-[38px] md:rounded-[48px] overflow-hidden bg-white">
                          {/* Carousel Container */}
                          <div 
                            className="carousel-container relative w-full h-full flex transition-transform duration-700 ease-in-out" 
                            style={{ transform: `translateX(-${(selectedFeature - 1) * 100}%)` }}
                          >
                            {features.map((feature) => (
                              <div key={feature.id} className="min-w-full h-full">
                                <img
                                  src={feature.image}
                                  alt={feature.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="relative mt-12 text-center max-w-2xl mx-auto">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#493B32]/20 to-transparent"></div>
                    <div className="pt-8 space-y-4">
                      <h3 className="text-2xl font-medium text-[#493B32] transition-all duration-500">
                        {features[selectedFeature - 1].title}
                      </h3>
                      <p className="text-[#493B32]/70 text-lg leading-relaxed transition-all duration-500">
                        {features[selectedFeature - 1].description}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="mt-12 flex flex-col items-center gap-8">
                    {/* Dots */}
                    <div className="flex justify-center items-center gap-4">
                      {features.map((feature, index) => (
                        <button 
                          key={feature.id}
                          className={`group relative w-4 h-4 transition-all duration-300 ${
                            selectedFeature === index + 1 ? 'scale-125' : 'hover:scale-110'
                          }`}
                          aria-label={`Show ${feature.title}`}
                          onClick={() => setSelectedFeature(index + 1)}
                        >
                          <div className={`absolute inset-0 bg-[#493B32] rounded-full transition-all duration-300 ${
                            selectedFeature === index + 1 ? 'opacity-100' : 'opacity-30 group-hover:opacity-50'
                          }`}></div>
                          <div className={`absolute inset-0 bg-[#493B32] rounded-full transform transition-transform duration-300 ${
                            selectedFeature === index + 1 ? 'animate-ping opacity-25' : 'opacity-0'
                          }`}></div>
                        </button>
                      ))}
                    </div>

                    {/* Arrow Navigation */}
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => setSelectedFeature(prev => Math.max(1, prev - 1))}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          selectedFeature === 1 
                            ? 'opacity-30 cursor-not-allowed' 
                            : 'hover:bg-[#493B32]/10'
                        }`}
                        disabled={selectedFeature === 1}
                      >
                        <svg className="w-6 h-6 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setSelectedFeature(prev => Math.min(features.length, prev + 1))}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          selectedFeature === features.length 
                            ? 'opacity-30 cursor-not-allowed' 
                            : 'hover:bg-[#493B32]/10'
                        }`}
                        disabled={selectedFeature === features.length}
                      >
                        <svg className="w-6 h-6 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          {/* User Feedback & Iteration Section */}    
          <section id="user-feedback" className="mt-16">
            <div className="flex flex-row items-center gap-2 px-4 md:px-8 mb-12">
              <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
              <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
                User Feedback & Iterations
              </h2>
            </div>

            {/* Before/After UI Comparisons */}
            <div className="px-4 md:px-8 mb-16">
              <h3 className="text-xl font-medium text-[#493B32] mb-6">UI Evolution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timer Screen Evolution */}
                <div className="bg-white rounded-2xl p-6 overflow-hidden shadow-sm border border-[#493B32]/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-[#493B32]">Welcome Screen</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#493B32]/60">Version 1.0</span>
                      <svg className="w-5 h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="text-sm text-[#493B32]/60">Version 2.0</span>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    {/* Phone Frame */}
                    <div className="w-[240px] md:w-[320px] h-[480px] md:h-[660px] mx-auto relative">
                      <div className="absolute inset-0 bg-[#F75590] rounded-[45px] md:rounded-[55px] p-4 shadow-xl">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95px] md:w-[126px] h-[26px] md:h-[35px] bg-[#F75590] rounded-b-[18px] md:rounded-b-[24px] flex items-center justify-center">
                          <div className="w-[68px] md:w-[90px] h-[18px] md:h-[24px] bg-black rounded-[15px] md:rounded-[20px] flex items-center">
                            <div className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[30px] md:w-[40px] h-[3px] md:h-[4px] rounded-full bg-[#1a1a1a] ml-2"></div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute top-[83px] md:top-[110px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[143px] md:top-[190px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[180px] md:top-[240px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[98px] md:top-[130px] -right-[2px] w-[3px] md:w-[4px] h-[38px] md:h-[50px] bg-[#2a2a2a] rounded-r-full"></div>

                        {/* Screen Content */}
                        <div className="relative w-full h-full rounded-[38px] md:rounded-[48px] overflow-hidden bg-white">
                          {/* Version 1 */}
                          <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                            <img 
                              src={WelcomeImageV1} 
                              alt="Timer Screen Version 1.0" 
                              className="w-full h-full object-cover"
                            />
                            {/* Version 1 Hover Instruction */}
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                              <div className="bg-[#493B32]/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                                Hover to see Version 2.0
                              </div>
                            </div>
                          </div>
                          {/* Version 2 */}
                          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <img 
                              src={WelcomeImage} 
                              alt="Timer Screen Version 2.0" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>

                {/* Contacts Screen Evolution */}
                <div className="bg-white rounded-2xl p-6 overflow-hidden shadow-sm border border-[#493B32]/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-[#493B32]">Adding Contacts Overlay Screen</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#493B32]/60">Version 1.0</span>
                      <svg className="w-5 h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="text-sm text-[#493B32]/60">Version 2.0</span>
                    </div>
                  </div>
                  <div className="relative group cursor-pointer">
                    {/* Phone Frame */}
                    <div className="w-[240px] md:w-[320px] h-[480px] md:h-[660px] mx-auto relative">
                      <div className="absolute inset-0 bg-[#F75590] rounded-[45px] md:rounded-[55px] p-4 shadow-xl">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95px] md:w-[126px] h-[26px] md:h-[35px] bg-[#F75590] rounded-b-[18px] md:rounded-b-[24px] flex items-center justify-center">
                          <div className="w-[68px] md:w-[90px] h-[18px] md:h-[24px] bg-black rounded-[15px] md:rounded-[20px] flex items-center">
                            <div className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[30px] md:w-[40px] h-[3px] md:h-[4px] rounded-full bg-[#1a1a1a] ml-2"></div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute top-[83px] md:top-[110px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[143px] md:top-[190px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[180px] md:top-[240px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[98px] md:top-[130px] -right-[2px] w-[3px] md:w-[4px] h-[38px] md:h-[50px] bg-[#2a2a2a] rounded-r-full"></div>

                        {/* Screen Content */}
                        <div className="relative w-full h-full rounded-[38px] md:rounded-[48px] overflow-hidden bg-white">
                          {/* Version 1 */}
                          <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                            <img 
                              src={HomeImageV1} 
                              alt="Home Screen Version 1.0" 
                              className="w-full h-full object-cover"
                            />
                            {/* Version 1 Hover Instruction */}
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                              <div className="bg-[#493B32]/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                                Hover to see Version 2.0
                              </div>
                            </div>
                          </div>
                          {/* Version 2 */}
                          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <img 
                              src={HomeImage} 
                              alt="Home Screen Version 2.0" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Timer Screen Evolution */}
                <div className="bg-white rounded-2xl p-6 overflow-hidden shadow-sm border border-[#493B32]/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-[#493B32]">Timer Screen</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#493B32]/60">Version 1.0</span>
                      <svg className="w-5 h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="text-sm text-[#493B32]/60">Version 2.0</span>
                      <svg className="w-5 h-5 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="text-sm text-[#493B32]/60">Version 3.0</span>
                    </div>
            </div>

                  <div className="relative group">
                    {/* Phone Frame */}
                    <div className="w-[240px] md:w-[320px] h-[480px] md:h-[660px] mx-auto relative">
                      <div className="absolute inset-0 bg-[#F75590] rounded-[45px] md:rounded-[55px] p-4 shadow-xl">
                        {/* Dynamic Island */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95px] md:w-[126px] h-[26px] md:h-[35px] bg-[#F75590] rounded-b-[18px] md:rounded-b-[24px] flex items-center justify-center">
                          <div className="w-[68px] md:w-[90px] h-[18px] md:h-[24px] bg-black rounded-[15px] md:rounded-[20px] flex items-center">
                            <div className="w-[9px] md:w-[12px] h-[9px] md:h-[12px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full bg-[#1a1a1a] ml-2"></div>
                            <div className="w-[30px] md:w-[40px] h-[3px] md:h-[4px] rounded-full bg-[#1a1a1a] ml-2"></div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute top-[83px] md:top-[110px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[143px] md:top-[190px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[180px] md:top-[240px] -left-[2px] w-[3px] md:w-[4px] h-[30px] md:h-[40px] bg-[#2a2a2a] rounded-l-full"></div>
                        <div className="absolute top-[98px] md:top-[130px] -right-[2px] w-[3px] md:w-[4px] h-[38px] md:h-[50px] bg-[#2a2a2a] rounded-r-full"></div>

                        {/* Screen Content */}
                        <div className="relative w-full h-full bg-white rounded-[38px] md:rounded-[48px] overflow-hidden">
                          {/* Carousel Container */}
                          <div className="carousel-container relative w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(activeVersion - 1) * 100}%)` }}>
                            {/* Version 1 */}
                            <div className="min-w-full transition-opacity duration-300">
                              <img 
                                src={TimerImageV1} 
                                alt="Timer Screen Version 1.0" 
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Version 2 */}
                            <div className="min-w-full transition-opacity duration-300">
                              <img 
                                src={TimerImageV2} 
                                alt="Timer Screen Version 2.0" 
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Version 3 */}
                            <div className="min-w-full transition-opacity duration-300">
                              <img 
                                src={TimerImage} 
                                alt="Timer Screen Version 3.0" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center items-center gap-3 mt-12 ">
                    <button 
                      className="w-5 h-5 rounded-full bg-[#493B32] shadow-lg hover:scale-125"
                      style={{ boxShadow: '0 0 0 2px #493B32' }}
                      aria-label="Show Version 1"
                      onClick={() => updateActiveVersion(1)}
                    ></button>
                    <button 
                      className="w-5 h-5 rounded-full bg-[#493B32] shadow-lg hover:scale-125"
                      style={{ boxShadow: '0 0 0 2px #493B32',}}
                      aria-label="Show Version 2"
                      onClick={() => updateActiveVersion(2)}
                    ></button>
                    <button 
                      className="w-5 h-5 rounded-full bg-[#493B32] shadow-lg hover:scale-125"
                      style={{ boxShadow: '0 0 0 2px #493B32' }}
                      aria-label="Show Version 3"
                      onClick={() => updateActiveVersion(3)}
                    ></button>
                  </div>

                  {/* Version Label */}
                  <div className="text-center mt-6">
                    <span className="text-lg font-medium text-[#493B32]">Version {activeVersion}.0</span>
                  </div>
                </div>
              </div>
            </div>


          </section>
          {/* Design system Section */}
         <section id="design-system" className="mt-16 mb-24">
            <div className="flex flex-row items-center gap-2 px-4 md:px-8 mb-12">
              <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
              <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
                Design System
              </h2>
            </div>

            {/* Figma Design Container */}
            <div className="px-4 md:px-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#493B32]/10">
                {/* Figma Embed */}
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://embed.figma.com/design/7rSfnfAkZTMI3ttCdej9n1/Design-Jam?node-id=87-254&embed-host=share" 
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Figma Link */}
                <div className="mt-6 flex justify-center">
                  <a 
                    href="https://www.figma.com/file/yourFigmaFileID" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#493B32] text-white rounded-xl hover:bg-[#493B32]/90 transition-colors"
                  >
                    <span>View Full Design System in Figma</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
            {/* Reflection Section */}
            <section id="reflection" className="mt-16 mb-24">
              <div className="flex flex-row items-center gap-2 px-4 md:px-8 mb-12">
                <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
                <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
                  Reflection
                </h2>
              </div>

              <div className="px-4 md:px-8">
                <div className="bg-gradient-to-br from-[#493B32]/5 via-white to-[#493B32]/5 rounded-2xl p-8 md:p-12 shadow-sm border border-[#493B32]/10">
                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Reflection Text */}
                    <div className="flex-1 space-y-6">
                      {/* Quote Mark */}
                      <div className="flex justify-center lg:justify-start mb-8">
                        <svg className="w-12 h-12 text-[#493B32]/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Reflection Text */}
                      <div className="space-y-6">
                        <p className="text-lg md:text-xl text-[#493B32] leading-relaxed">
                          Designing Guardian required blending empathy with usability. It was about more than UI—it was about creating emotional trust. By focusing on micro-interactions, accessible patterns, and real user voices, we built a product that could genuinely save lives.
                        </p>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#493B32]/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-[#493B32]">Empathy-Driven</h3>
                          <p className="text-[#493B32]/70 mt-2">Design decisions based on real user experiences</p>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#493B32]/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-[#493B32]">Trust-Building</h3>
                          <p className="text-[#493B32]/70 mt-2">Focus on creating a safe experience</p>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#493B32]/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#493B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-medium text-[#493B32]">User-Centered</h3>
                          <p className="text-[#493B32]/70 mt-2">Every feature crafted with safety in mind</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Figma Prototype */}
                    <div className="flex-1">
                      <div className="relative w-full rounded-xl overflow-hidden bg-white shadow-lg" style={{ paddingTop: '100%' }}> {/* Square Aspect Ratio */}
                        <iframe 
                          className="absolute top-0 left-0 w-full h-full"
                          style={{ border: '1px solid rgba(73, 59, 50, 0.1)' }}
                          src="https://embed.figma.com/proto/7rSfnfAkZTMI3ttCdej9n1/Design-Jam?page-id=148%3A3413&node-id=148-3414&p=f&viewport=278%2C88%2C0.5&scaling=scale-down&starting-point-node-id=148%3A3414&content-scaling=0.5&embed-host=share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </div>
    </main>
  );
};

export default Guardian;

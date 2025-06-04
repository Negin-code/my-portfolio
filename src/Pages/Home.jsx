import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiCodeAlt, BiPalette } from "react-icons/bi";

import Button from '../Components/Button';
import AnimatedThreads from '../Components/AnimatedThreads';
import CategoryCard from '../Components/CategoryCard';

const Home = () => {
  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 min-h-screen relative w-full pt-20 lg:pt-40 lg:px-0 overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-16 md:left-20 top-0 sm:h-[40rem] h-[38rem] md:h-[40rem] lg:h-[40rem] xl:h-[50rem] w-[2px] bg-[#493b32]">
        <span className="absolute -left-6 md:-left-9 top-[40rem] sm:top-[43rem] md:top-[45rem] lg:top-[45rem] xl:top-[54rem] -translate-y-1/2 rotate-[-90deg] text-md md:text-xl text-[#493B32] font-tan">
          2025
        </span>
      </div> 
      
    
      {/* Right vertical line */}
      <div className="absolute right-10 top-0 sm:h-[35rem] h-[30rem] md:h-[38rem] lg:h-[38rem] xl:h-[45rem] w-[2px] bg-[#493b32]">
        {/* Social links */}
        <div className="absolute -right-3 sm:top-[42rem] top-[36rem] md:top-[42rem] lg:top-[45rem] xl:top-[52rem] -translate-y-1/2 flex flex-col items-center justify-evenly gap-7 z-20 text-[#493b32]">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:iamneginasem@gmail.com"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <MdEmail size={32}/>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-120"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>

      {/* Content container */}
    <section className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
        {/* Title section - full width */}
        <div className="col-span-4 md:col-span-6 lg:col-span-11 text-right mt-20 md:mt-20 px-6 md:px-10 lg:px-0">
          
          <h1 className="font-tan text-[1.4rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-relaxed mb-6 mr-8 lg:mr-0">
            <span 
              className="block text-transparent"
              style={{
                background: 'linear-gradient(to right, #493B32, #F75590)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              UI/UX Designer
            </span>
            <span className="block text-[#493B32] mt-2">&</span>
            <span 
              className="block text-transparent"
              style={{
                background: 'linear-gradient(to right, #493B32, #F75590)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Frontend Developer
            </span>
          </h1>

          <div className="max-w-2xl ml-auto mt-10">
            <p className="text-lg sm:text-2xl md:text-3xl font-open text-[#493B32] mb-6 leading-relaxed sm:leading-tight mr-8 lg:mr-0">
            Bridging the gap between
              <span className="block sm:inline text-[#F75590] font-bold"> logic and empathy</span>
            </p>
            
            
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end sm:mr-8 lg:mr-0 gap-8 sm:gap-6 mt-20 sm:mt-10">
            <Button 
              href="/assets/resume/resume.pdf"
              variant="primary"
              className="w-[225px] sm:w-auto text-center"
              showArrow={true}
            >
              View My Resume
            </Button>
            <Button 
              href="#contact" 
              variant="outline"
              className="w-[225px] sm:w-auto text-center"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Animated Threads Section */}
      <section className="col-span-full mt-20 sm:mt-15">
      <AnimatedThreads />
      </section>

      <section className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">

        {/* Category Spotlight Section */}
        <section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 col-span-full py-5 sm:py-20 px-6 md:px-10 lg:px-20 bg-[#FFF7F2]">
          {/* Section Title */}
          <div className="col-span-full flex items-center gap-4 mb-12">
            <div 
              className="w-[4vh] md:w-[9vh] h-[2px]"
              style={{
                background: 'linear-gradient(to right, #493B32, #F75590)'
              }}
            ></div>
            <h2 className="text-3xl md:text-5xl font-tan text-[#493B32]">
              What I Do
            </h2>
          </div>

          {/* Category Cards */}
          <div className="col-span-full lg:col-start-2 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* UX/UI Design Card */}
            <CategoryCard
              icon={BiPalette}
              title="UX/UI Design"
              description="Creating intuitive interfaces with a focus on user experience, wireframing, prototyping, and visual design that connects with users."
              buttonText="View UX/UI Projects"
              buttonHref="/projects?category=design#top"
              gradientFrom="#F75590"
              gradientTo="#493B32"
            />

            {/* Frontend Development Card */}
            <CategoryCard
              icon={BiCodeAlt}
              title="Frontend Development"
              description="Building responsive, interactive web applications with modern frameworks and best practices for optimal performance."
              buttonText="View Frontend Projects"
              buttonHref="/projects?category=coding#top"
              gradientFrom="#493B32"
              gradientTo="#F75590"
            />
          </div>
        </section>

      </section>
    </main>
  );
};

export default Home;


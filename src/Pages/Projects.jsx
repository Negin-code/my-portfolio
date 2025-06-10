import React from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import CrimsonPlateImage from "../assets/CrimsonPlate.webp";
import AlzcareImage from "../assets/Alzcare.svg";
import ListeningLabImage from "../assets/LLCover.png";
import CultureCafeImage from "../assets/CCCover.png";
import GuardianImage from "../assets/Guardiancard.webp";

import ChromaGridCard from "../components/ChromaGridCard";
import "./Projects.css";

const Projects = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const { selectedCategory = categoryFromUrl || "all" } = useOutletContext() || {};
  
  const projects = [
    {
      image: GuardianImage,
      imageAlt: "Overdose Prevention App",
      category: "UI/UX Design",
      categoryType: "design",
      title: "Guardian",
      description: "Guardian is a harm reduction mobile application designed for recreational substance users, particularly young adults like Evelyn who use drugs in isolation or in social settings.",
      technologies: ["Figma", "Canva"],
      projectLink: "/projects/guardian#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF8C94"
    },
    {
      image: GuardianImage,
      imageAlt: "GoodReads Website",
      category: "UI/UX Design",
      categoryType: "design",
      title: "GoodReads Website usability study",
      description: "The goal of the GoodReads website usability study was to evaluate the effectiveness of the website's design and functionality in meeting the needs of its users.",
      technologies: ["Figma", "Canva"],
      projectLink: "/projects/goodreads#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF8C94"
    },
    {
      image: CrimsonPlateImage,
      imageAlt: "Crimson Plate Website",
      category: "Front-end",
      categoryType: "coding",
      title: "Crimson Plate Website",
      description: "The goal was to create a responsive, visually engaging, and user-friendly restaurant website that delivers an intuitive, interactive digital experience while accurately reflecting the restaurant's brand, ensuring seamless navigation, performance, and accessibility.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      projectLink: "/projects/crimson-plate#top",
      gradientFrom: "#F75590",
      gradientTo: "#FF6B6B"
    },
    
    {
      image: CultureCafeImage,
      imageAlt: "Culture Cafe",
      category: "Service Design",
      categoryType: "design",
      title: "Culture Cafe",
      description: "A digital platform designed to connect people through cultural experiences and foster community engagement.",
      technologies: ["Research", "Prototyping"],
      projectLink: "/projects/culture-cafe#top",
      gradientFrom: "#7B6F63",
      gradientTo: "#493B32"
    },
    
    {
      image: AlzcareImage,
      imageAlt: "AlzCare App Design",
      category: "UI/UX Design",
      categoryType: "design",
      title: "AlzCare App",
      description: "The goal of AlzCare is to create a user-friendly mobile app that integrates with a smart medication container, helping caregivers monitor medication adherence for individuals with Alzheimer's.",
      technologies: ["Figma", "Illustrator"],
      projectLink: "/projects/alzcare#top",
      gradientFrom: "#493B32",
      gradientTo: "#7B6F63"
    },
    {
      image: ListeningLabImage,
      imageAlt: "Listening Lab Service Design",
      category: "Service Design",
      categoryType: "design",
      title: "Listening Lab",
      description: "The goal of the Listening Lab was to enhance the effectiveness of listening practices within the immigrant services sector by fostering trust, cultural understanding, and empathy.",
      technologies: ["Zoom", "Miro", "Canva"],
      projectLink: "/projects/listening-lab#top",
      gradientFrom: "#FF6B6B",
      gradientTo: "#F75590"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.categoryType === selectedCategory);

  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 min-h-screen relative w-full pt-30 sm:pt-45 lg:pt-50 lg:px-0 overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-16 md:left-20 top-0 sm:h-[90rem] h-[190rem] md:h-[115rem] lg:h-[80rem] w-[2px] bg-[#493b32]"></div>

      {/* Right vertical line */}
      <div className="absolute right-10 top-0 sm:h-[35rem] h-[190rem] md:h-[115rem] lg:h-[80rem] w-[2px] bg-[#493b32]"></div>

      {/* Content container */}
      <section className="col-span-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 ml-20 lg:ml-10">
        <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2 pr-15 sm:pr-15 lg:pl-0 lg:pr-0">
          {/* Project Title */}
          <div className="flex flex-row items-start justify-start gap-1 mb-8">
            <div className="w-[4vh] sm:w-[4vh] md:w-[5vh] h-[3px] bg-gradient-to-r from-[#493B32] to-[#F75590] mt-4"></div>
            <h1 id="top" className="text-2xl sm:text-5xl font-tan text-[#493B32]">
              My Projects
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-20 mx-auto max-w-7xl">
            {filteredProjects.map((project, index) => (
              <ChromaGridCard
                key={index}
                {...project}
                index={index}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#493B32]/60 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects; 
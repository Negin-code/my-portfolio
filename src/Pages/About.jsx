import React, { useState } from "react";
import {
  FaFigma,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobeaudition,
  SiAdobeaftereffects,
  SiCanva,
  SiTailwindcss,
  SiMiro,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { VscCode } from "react-icons/vsc";
import ProfileImage from "../Components/ProfileImage";
import HeroContent from "../Components/HeroContent";
import AccordionSection from "../Components/AccordionSection";
import Value from "../Components/Value";
import GlassIcon from "../Components/GlassIcon";
import NeginImage1 from "../assets/profilephoto.png";
import styles from "../Components/Scroll.module.css";
import Button from '../Components/Button';

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const values = [
    {
      title: "Empathy",
      description:
        "I start every project by listening—carefully understanding the needs, emotions, and behaviors of the people I'm designing for. This user-first mindset underpins all of my work and ensures inclusivity, accessibility, and meaningful interactions.",
    },
    {
      title: "Collaboration & Adaptability",
      description:
        "Great solutions emerge when diverse perspectives meet. I value an environment of open communication, constructive feedback, and continuous iteration. I embrace new challenges and pivot swiftly when needed, keeping the project's goals and the user's needs at the forefront.",
    },
    {
      title: "Continuous Learning",
      description:
        "The tech and design landscapes are always shifting. That's why I thrive on exploring the latest tools, methodologies, and frameworks to push creative boundaries. By staying curious, I remain ready to innovate and evolve my craft.",
    },
  ];

  const designPhilosophy = {
    description:
      "I believe the best designs come from listening first. My goal is always to create solutions that not only work — but feel right. I combine structured problem-solving with a warm, human approach to create inclusive, intuitive experiences.",
  };

  const softwareTools = [
    { icon: FaFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiAdobexd, name: "Adobe XD", color: "#FF61F6" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
    { icon: SiAdobeillustrator, name: "Illustrator", color: "#FF9A00" },
    { icon: SiAdobeindesign, name: "InDesign", color: "#FF3366" },
    { icon: SiAdobepremierepro, name: "Premiere", color: "#9999FF" },
    { icon: SiAdobeaudition, name: "Audition", color: "#00E4BB" },
    { icon: SiAdobeaftereffects, name: "After Effects", color: "#9999FF" },
    { icon: SiCanva, name: "Canva", color: "#00C4CC" },
    { icon: VscCode, name: "VS Code", color: "#007ACC" },
    { icon: DiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaWordpress, name: "WordPress", color: "#21759B" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: FaSass, name: "Sass", color: "#CC6699" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiMiro, name: "Miro", color: "#FFD02F" },
    { icon: FaGithub, name: "GitHub", color: "#181717" },
  ];

  const loopedTools = [...softwareTools, ...softwareTools];

  return (
    <main className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 min-h-screen bg-[#FFF7F2] pt-20 lg:pt-50 lg:px-0 md:px-8 relative overflow-hidden">
      {/* Left vertical line */}
      <div className="absolute left-17 md:left-20 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Right border line */}
      <div className="absolute right-10 top-0 bottom-8 h-[calc(100%-5rem)] w-[2px] bg-[#493b32]"></div>

      {/* Main content container */}
      <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-1 md:col-span-6 lg:col-span-10 lg:col-start-2">
        {/* Hero Section */}
        <section className="pl-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            <ProfileImage imageSrc={NeginImage1} altText="Negin Asem" />

            <div className="lg:col-span-7">
              <HeroContent
                title="Hi, I'm Negin"
                description="A UX/UI designer and front-end developer blending logic with empathy to create meaningful digital experiences. With a foundation in software engineering and a passion for human-centered design, I thrive at the intersection of creativity and functionality. I am in the last steps of studying New Media Design and Web Development at BCIT, where I’ve built strong foundations in everything from brand strategy and UI systems to creative coding. Beyond the classroom, I’ve collaborated with community organizations and innovation labs to design services and tools that support real people in meaningful ways."
              />
            </div>
          </div>
        </section>

        <div className="pl-22 lg:pl-0 pr-10 lg:pr-0">
          <p className="text-[#493B32] leading-relaxed text-base md:text-lg mt-2 sm:mt-4 lg:mt-6">
          When I’m not designing, you’ll likely find me enjoying a good coffee, reading a book, capturing a moment through photography, or reflecting on how small details shape big experiences.
          </p>
        </div>

        {/* Resume button section */}
        <section className="pl-22 lg:pl-0 pr-10 lg:pr-0 pt-8 sm:pt-10">
          <Button 
            href="/assets/resume/resume.pdf"
            variant="primary"
            showArrow={true}
          >
            View My Resume
          </Button>
        </section>

        {/* glass icons of the softwares I know */}
        <section className="pl-22 lg:pl-0 pr-12 lg:pr-0  pt-12 col-start-1 mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#493B32] xl:text-5xl font-tan leading-tight mb-6 sm:mb-8">
            Software & Tools
          </h3>

          <div className={`${styles.scrollContainer} mt-12`}>
            <div className={styles.scrollTrack}>
              {softwareTools.map((tool, index) => (
                <div key={index} className={styles.item}>
                  <GlassIcon
                    icon={tool.icon}
                    name={tool.name}
                    color={tool.color}
                  />
                </div>
              ))}
              {softwareTools.map((tool, index) => (
                <div key={`clone-${index}`} className={styles.item}>
                  <GlassIcon
                    icon={tool.icon}
                    name={tool.name}
                    color={tool.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <section className=" space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20">
          <AccordionSection
            title="My Core Values"
            isExpanded={expandedSection === "value"}
            onToggle={() => toggleSection("value")}
          >
            <div className="space-y-4 sm:space-y-6">
              {values.map((val, index) => (
                <Value
                  key={index}
                  title={val.title}
                  description={val.description}
                />
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            title="My Design Philosophy"
            isExpanded={expandedSection === "howIDesign"}
            onToggle={() => toggleSection("howIDesign")}
          >
            <div className="space-y-4 sm:space-y-6">
              <Value description={designPhilosophy.description} />
            </div>
          </AccordionSection>
        </section>
      </div>
    </main>
  );
};

export default About;

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoWarningOutline,
  IoRocketOutline,
  IoEyeOutline,
  IoSearchOutline,
  IoLocateOutline,
  IoListOutline,
  IoChatboxOutline,
  IoColorPaletteOutline,
  IoCodeSlashOutline,
  IoBarChartOutline,
  IoReaderOutline,
  IoBulbOutline ,
  IoConstructOutline,
  IoChatboxEllipsesOutline,
  IoLayersOutline ,
  IoFolderOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';



const SideNav = ({ onCategoryChange, selectedCategory }) => {
  const [isHovered, setIsHovered] = useState(null);
  const location = useLocation();

  // Hide SideNav on home and about pages
  if (location.pathname === '/' || location.pathname === '/about') {
    return null;
  }


  const mainNavItems = [
  ];

  const projectCategoryItems = [
    { path: '/projects?category=all', icon: IoFolderOutline, label: 'All Projects' },
    { path: '/projects?category=design', icon: IoPhonePortraitOutline, label: 'UX/UI Design' },
    { path: '/projects?category=coding', icon: IoCodeSlashOutline, label: 'Development' }
  ];

  const projectNavItems = {
    '/projects/guardian': [
      { path: '/projects/guardian#overview', icon: IoEyeOutline, label: 'Project Overview' },
      { path: '/projects/guardian#problem', icon: IoWarningOutline, label: 'The Problem' },
      { path: '/projects/guardian#research-discovery', icon: IoSearchOutline, label: 'Research And Discovery' },
      { path: '/projects/guardian#design-goals', icon: IoLocateOutline, label: 'Design Goals' },
      { path: '/projects/guardian#key-features', icon: IoListOutline, label: 'Key Features' },
      { path: '/projects/guardian#user-feedback', icon: IoChatboxOutline, label: 'User Feedback & Iterations' },
      { path: '/projects/guardian#design-system', icon: IoLayersOutline, label: 'Design System' },
      { path: '/projects/guardian#reflection', icon: IoChatboxEllipsesOutline, label: 'Reflection' }
    ],
    '/projects/crimson-plate': [
      { path: '/projects/crimson-plate#overview', icon: IoEyeOutline, label: 'Project Overview' },
      { path: '/projects/crimson-plate#technologies', icon: IoCodeSlashOutline, label: 'Technologies Used' },
      { path: '/projects/crimson-plate#accessibility', icon: IoColorPaletteOutline, label: 'Accessibility & Performance' }
    ],
    '/projects/goodreads': [
      { path: '/projects/goodreads#overview', icon: IoEyeOutline, label: 'Project Overview' },
      { path: '/projects/goodreads#objectives', icon: IoLocateOutline, label: 'Objectives' },
      { path: '/projects/goodreads#study', icon: IoSearchOutline, label: 'User Study' },
      { path: '/projects/goodreads#sus', icon: IoBarChartOutline, label: 'SUS Score' },
      { path: '/projects/goodreads#tasks', icon: IoReaderOutline, label: 'User Task & Insights' },
      { path: '/projects/goodreads#takeaways', icon: IoBulbOutline , label: 'Key Takeaways' },
      { path: '/projects/goodreads#solutions', icon: IoConstructOutline , label: 'Solutions' },
      { path: '/projects/goodreads#reflections', icon: IoChatboxEllipsesOutline , label: 'Reflection' },
      { path: '/projects/goodreads#next', icon: IoRocketOutline , label: 'Next Steps' }
    ]
  };

  const handleNavClick = (e, path) => {
    const [route, hash] = path.split('#');
    if (hash && location.pathname === route) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 200;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const isActive = (path) => {
    if (path.includes('?category=')) {
      const category = path.split('?category=')[1];
      return selectedCategory === category;
    }
    if (path === '/') {
      return location.pathname === '/';
    }
    const [route, hash] = path.split('#');
    if (hash) {
      return location.pathname === route && location.hash === `#${hash}`;
    }
    return location.pathname.startsWith(path);
  };

  const isProjectPage = location.pathname.startsWith('/projects/');
  const isProjectsListPage = location.pathname === '/projects';
  const currentProjectNavItems = projectNavItems[location.pathname] || [];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block fixed left-10 top-1/2 transform -translate-y-1/2 z-[100]"
    >
      <div className="flex flex-col items-center gap-4 bg-[#FFF7F2] p-4 rounded-full shadow-lg border border-[#493B32]/20">
        {/* Back to Projects Link when on project page */}
        {isProjectPage && (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered('back')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <NavLink
              to="/projects"
              className="block p-3 rounded-full transition-all duration-300 text-[#493B32] hover:bg-[#493B32]/10"
            >
              <IoFolderOutline size={20} />
            </NavLink>
            
            {/* Label tooltip */}
            <AnimatePresence>
              {isHovered === 'back' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#493B32] text-[#FFF7F2] px-3 py-1.5 rounded-md whitespace-nowrap text-sm shadow-md"
                >
                  Back to Projects
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Regular navigation items */}
        {isProjectPage && (
          <>
            <div className="w-full h-[1px] bg-[#493B32]/20 mx-auto"></div>
            {currentProjectNavItems.map((item, index) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <NavLink
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`block p-3 rounded-full transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-[#FFF7F2] text-[#493B32] shadow-md'
                      : 'text-[#493B32] hover:bg-[#493B32]/10'
                  }`}
                >
                  <item.icon size={20} />
                </NavLink>
                
                {/* Label tooltip */}
                <AnimatePresence>
                  {isHovered === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#493B32] text-[#FFF7F2] px-3 py-1.5 rounded-md whitespace-nowrap text-sm shadow-md"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </>
        )}

        {/* Show category filters on projects list page */}
        {isProjectsListPage && onCategoryChange && (
          <>
            {projectCategoryItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => onCategoryChange(item.path.split('?category=')[1])}
                    className={`block p-3 rounded-full transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-[#493B32]'
                        : 'text-[#493B32] hover:bg-[#493B32]/10'
                    }`}
                  >
                    <Icon size={22} />
                  </NavLink>
                  
                  {/* Label tooltip */}
                  <AnimatePresence>
                    {isHovered === index && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#493B32] text-[#FFF7F2] px-3 py-1.5 rounded-md whitespace-nowrap text-sm shadow-md"
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default SideNav; 
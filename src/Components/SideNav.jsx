import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoGridOutline, 
  IoWarningOutline,
  IoRocketOutline,
  IoEyeOutline,
  IoSearchOutline,
  IoLocateOutline,
  IoListOutline,
  IoChatboxOutline,
  IoColorPaletteOutline,
  IoCodeSlashOutline,
  IoBrushOutline,
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
    { id: 'all', icon: IoGridOutline, label: 'All Projects' },
    { id: 'design', icon: IoBrushOutline, label: 'UX/UI Design' },
    { id: 'coding', icon: IoCodeSlashOutline, label: 'Development' }
  ];

  const projectNavItems = [
    { path: '/projects/guardian#overview', icon: IoEyeOutline, label: 'Project Overview' },
    { path: '/projects/guardian#problem', icon: IoWarningOutline, label: 'The Problem' },
    { path: '/projects/guardian#research-discovery', icon: IoSearchOutline, label: 'Research And Discovery' },
    { path: '/projects/guardian#design-goals', icon: IoLocateOutline, label: 'Design Goals' },
    { path: '/projects/guardian#key-features', icon: IoListOutline, label: 'Key Features' },
    { path: '/projects/guardian#user-feedback', icon: IoChatboxOutline, label: 'User Feedback & Iterations' },
    { path: '/projects/guardian#design-system', icon: IoColorPaletteOutline, label: 'Design System' },
    { path: '/projects/guardian#reflection', icon: IoRocketOutline, label: 'Reflection' }
  ];

  const handleNavClick = (e, path) => {
    const [route, hash] = path.split('#');
    if (hash && location.pathname === route) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 200; // Adjust this value based on your header height
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
  const navItems = isProjectPage ? projectNavItems : mainNavItems;

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-10 top-1/2 transform -translate-y-1/2 z-[100]"
    >
      <div className="flex flex-col items-center gap-4 bg-[#FFF7F2] p-4 rounded-full shadow-lg border border-[#493B32]/20">
        {/* Show category filters on projects list page */}
        {isProjectsListPage && onCategoryChange && (
          <>
            {projectCategoryItems.map((item, index) => {
              const Icon = item.icon;
              const isActiveCategory = selectedCategory === item.id;
              
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setIsHovered(`category-${index}`)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button
                    onClick={() => onCategoryChange(item.id)}
                    className={`block p-3 rounded-full transition-all duration-300 ${
                      isActiveCategory
                        ? 'bg-[#493B32]/20 text-[#493B32]'
                        : 'text-[#493B32] hover:bg-[#493B32]/10'
                    }`}
                  >
                    <Icon size={25} />
                  </button>
                  
                  {/* Label tooltip */}
                  <AnimatePresence>
                    {isHovered === `category-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#493B32] text-[#FFF7F2] px-3 py-1.5 rounded-md whitespace-nowrap text-sm"
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

        {/* Regular navigation items */}
        {navItems.map((item, index) => (
          item.divider ? (
            <div key={`divider-${index}`} className="w-full h-[1px] bg-[#493B32]/20 mx-auto" />
          ) : (
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
          )
        ))}

        {/* Separator and Projects Link when on project page */}
        {isProjectPage && (
          <>
            <div className="w-full h-[1px] bg-[#493B32]/20 mx-auto"></div>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered('back')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <NavLink
                to="/projects"
                className="block p-3  transition-all duration-300 text-[#493B32] hover:bg-[#493B32]/10"
              >
                <IoGridOutline size={20} />
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
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default SideNav; 
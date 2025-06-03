import React, { useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Reset category when navigating away from projects page or handle URL params
  React.useEffect(() => {
    if (location.pathname === '/projects') {
      const categoryFromUrl = searchParams.get('category');
      if (categoryFromUrl && ['all', 'design', 'coding'].includes(categoryFromUrl)) {
        setSelectedCategory(categoryFromUrl);
      } else {
        // Default to 'all' if no category param or invalid category
        setSelectedCategory("all");
      }
    } else {
      setSelectedCategory("all");
    }
  }, [location.pathname, searchParams]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Side Navigation */}
      <SideNav 
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* Main Content */}
      <main className="flex-1 w-full min-h-screen bg-[#FFF7F2] flex items-center justify-center">
        <Outlet context={{ selectedCategory, setSelectedCategory }} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

'use client';

import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MobileView } from "./Views/MobileView";
import { DesktopView } from "./Views/DesktopView";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className="fixed top-0 w-full bg-transparent z-50">
    //   <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       <div className="shrink-0">
    //         <a href="#" className="text-3xl font-bold text-blue-400">
    //           YourBrand 
    //         </a>
    //       </div>

    //       {/* Desktop Navigation */}
    //       {!isMobile && (
    //         <div className="flex space-x-8 font-extrabold text-3xl">
    //           <a href="#home" className="text-white hover:text-blue-400 transition-colors">
    //             Home
    //           </a>
    //           <a href="#features" className="text-white hover:text-blue-400 transition-colors">
    //             Features
    //           </a>
    //           <a href="#about" className="text-white hover:text-blue-400 transition-colors">
    //             About
    //           </a>
    //           <a href="#contact" className="text-white hover:text-blue-400 transition-colors">
    //             Contact
    //           </a>
    //           <div>
    //             <Link
    //               href="/login"
    //               className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
    //             >
    //               Login
    //             </Link>
    //           </div>
    //         </div>
    //       )}

    //       {/* Mobile Hamburger Icon */}
    //       {isMobile && (
    //         <div>
    //           <button
    //             onClick={toggleMenu}
    //             className="text-white hover:text-blue-400 focus:outline-none focus:text-blue-400"
    //             aria-label="Toggle menu"
    //           >
    //             {isMenuOpen ? (
    //               <IoMdClose className="h-8 w-8" />
    //             ) : (
    //               <RxHamburgerMenu className="h-8 w-8" />
    //             )}
    //           </button>
    //         </div>
    //       )}
    //     </div>

    //     {/* Mobile Menu */}
    //     {isMobile && isMenuOpen && (
    //       <div>
    //         <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
    //           <a
    //             href="#home"
    //             className="block text-white hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-xl font-bold transition-colors"
    //             onClick={toggleMenu}
    //           >
    //             Home
    //           </a>
    //           <a
    //             href="#features"
    //             className="block text-white hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-xl font-bold transition-colors"
    //             onClick={toggleMenu}
    //           >
    //             Features
    //           </a>
    //           <a
    //             href="#about"
    //             className="block text-white hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-xl font-bold transition-colors"
    //             onClick={toggleMenu}
    //           >
    //             About
    //           </a>
    //           <a
    //             href="#contact"
    //             className="block text-white hover:text-blue-400 hover:bg-gray-800 px-3 py-2 rounded-md text-xl font-bold transition-colors"
    //             onClick={toggleMenu}
    //           >
    //             Contact
    //           </a>
    //           <Link
    //             href="/login"
    //             className="block bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-700 text-xl font-bold transition-colors text-center"
    //             onClick={toggleMenu}
    //           >
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>
    isMobile ? (
      <MobileView />
    ) : (
      <DesktopView />
    )

  );
};

export default Navbar;
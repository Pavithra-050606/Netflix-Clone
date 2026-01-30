'use client';

import { useState, useEffect } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out px-4 md:px-16 py-4 flex items-center justify-between",
      isScrolled ? "bg-[#141414]/90 backdrop-blur-md shadow-md" : "bg-gradient-to-b from-black/80 to-transparent"
    )}>
       <div className="flex items-center gap-4 md:gap-8">
         <div className="relative h-4 w-24 md:h-7 md:w-32">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="Logo" 
              fill
              className="object-contain"
            />
         </div>
         
         {/* Desktop Menu */}
         <ul className="hidden md:flex gap-4 text-sm text-gray-300">
           <li className="hover:text-white cursor-pointer font-medium transition-colors">Home</li>
           <li className="hover:text-white cursor-pointer transition-colors">TV Shows</li>
           <li className="hover:text-white cursor-pointer transition-colors">Movies</li>
           <li className="hover:text-white cursor-pointer transition-colors">New & Popular</li>
           <li className="hover:text-white cursor-pointer transition-colors">My List</li>
         </ul>

         {/* Mobile Menu Trigger */}
         <div 
           className="md:hidden flex items-center gap-2 cursor-pointer text-white"
           onClick={() => setShowMobileMenu(!showMobileMenu)}
         >
           <span className="text-sm font-medium">Browse</span>
           <Menu className="w-4 h-4" />
         </div>
         
         {/* Mobile Menu Dropdown */}
         {showMobileMenu && (
           <div className="absolute top-16 left-0 w-full bg-black/95 border-t border-gray-800 flex flex-col items-center py-4 gap-4 text-sm text-gray-300 md:hidden animate-in fade-in slide-in-from-top-2">
             <span className="hover:text-white cursor-pointer" onClick={() => setShowMobileMenu(false)}>Home</span>
             <span className="hover:text-white cursor-pointer" onClick={() => setShowMobileMenu(false)}>TV Shows</span>
             <span className="hover:text-white cursor-pointer" onClick={() => setShowMobileMenu(false)}>Movies</span>
             <span className="hover:text-white cursor-pointer" onClick={() => setShowMobileMenu(false)}>New & Popular</span>
             <span className="hover:text-white cursor-pointer" onClick={() => setShowMobileMenu(false)}>My List</span>
           </div>
         )}
       </div>

       <div className="flex items-center gap-6 text-gray-300">
         <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
         <Bell className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
         <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <div className="relative w-8 h-8 rounded bg-blue-600 overflow-hidden">
                <Image 
                  src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" 
                  alt="Profile" 
                  fill
                  className="object-cover"
                />
            </div> 
         </div>
       </div>
    </nav>
  )
}

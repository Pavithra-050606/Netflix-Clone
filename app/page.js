'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryRow from '@/components/CategoryRow';
import VideoModal from '@/components/VideoModal';
import { featuredMovie, categories } from '@/lib/data';
import { useListStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function Home() {
  const { myList } = useListStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen pb-20 bg-netflix-black overflow-x-hidden">
      <Navbar />
      <Hero movie={featuredMovie} />
      
      <div className="px-4 md:px-16 space-y-8 -mt-24 relative z-10 pb-10">
         {mounted && myList.length > 0 && (
           <CategoryRow category={{ title: "My List", movies: myList }} />
         )}
         
         {categories.map((category, index) => (
           <CategoryRow key={index} category={category} />
         ))}
      </div>

      <VideoModal />
    </main>
  );
}

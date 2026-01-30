import MovieCard from './MovieCard';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryRow({ category }) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 mb-8">
      <h2 className="text-lg md:text-2xl font-bold text-gray-200 hover:text-white cursor-pointer transition-colors px-4 md:px-0">
        {category.title}
      </h2>
      
      <div className="relative group md:-ml-2">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`} 
          onClick={() => handleClick('left')}
        />
        
        <div 
          ref={rowRef}
          className="flex flex-nowrap items-center space-x-0.5 md:space-x-2.5 overflow-x-scroll no-scrollbar px-4 md:px-0 scroll-smooth"
        >
           {category.movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie} categoryId={category.title} />
           ))}
        </div>

        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" 
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

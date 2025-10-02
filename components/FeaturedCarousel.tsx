import React, { useState } from 'react';
import { Movie } from '../types.ts';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon.tsx';
import { ChevronRightIcon } from './icons/ChevronRightIcon.tsx';
import { PlayIcon } from './icons/PlayIcon.tsx';

interface FeaturedCarouselProps {
  items: Movie[];
  onItemSelect: (item: Movie) => void;
  onItemPlay: (item: Movie) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ items, onItemSelect, onItemPlay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full h-80 group">
      <div
        style={{ backgroundImage: `url(${currentItem.posterUrl})` }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-500 cursor-pointer"
        onClick={() => onItemSelect(currentItem)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h2 className="text-3xl font-bold">{currentItem.title}</h2>
          <p className="text-sm">{currentItem.genre} &middot; {currentItem.releaseYear}</p>
          <button
            onClick={(e) => { e.stopPropagation(); onItemPlay(currentItem); }}
            className="mt-4 flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <PlayIcon className="w-5 h-5 mr-2 fill-current" />
            Play Now
          </button>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} className="w-6 h-6" />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} className="w-6 h-6" />
      </div>
    </div>
  );
};
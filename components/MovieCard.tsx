import React from 'react';
import { Movie } from '../types';
import { PlayIcon } from './icons/PlayIcon';

interface MovieCardProps {
  movie: Movie;
  onSelect: () => void;
  onPlay: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onSelect, onPlay }) => {
  return (
    <div className="flex-shrink-0 w-40 cursor-pointer group" onClick={onSelect}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => { e.stopPropagation(); onPlay(); }}
        >
          <PlayIcon className="w-12 h-12 text-white" />
        </div>
      </div>
      <h3 className="mt-2 font-semibold text-sm truncate text-gray-800 dark:text-gray-200">{movie.title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">{movie.releaseYear}</p>
    </div>
  );
};
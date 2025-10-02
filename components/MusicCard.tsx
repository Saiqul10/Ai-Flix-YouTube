import React from 'react';
import { Music } from '../types.ts';
import { PlayIcon } from './icons/PlayIcon.tsx';

interface MusicCardProps {
  music: Music;
  onSelect: () => void;
  onPlay: () => void;
}

export const MusicCard: React.FC<MusicCardProps> = ({ music, onSelect, onPlay }) => {
  return (
    <div className="flex-shrink-0 w-40 cursor-pointer group" onClick={onSelect}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={music.thumbnailUrl} alt={music.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => { e.stopPropagation(); onPlay(); }}
        >
          <PlayIcon className="w-10 h-10 text-white" />
        </div>
      </div>
      <h3 className="mt-2 font-semibold text-sm truncate text-gray-800 dark:text-gray-200">{music.title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">{music.artist}</p>
    </div>
  );
};
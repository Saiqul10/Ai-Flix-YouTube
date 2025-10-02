import React from 'react';
import { Music } from '../types.ts';
import { SkipBackIcon } from './icons/SkipBackIcon.tsx';
import { PlayIcon } from './icons/PlayIcon.tsx';
import { PauseIcon } from './icons/PauseIcon.tsx';
import { SkipForwardIcon } from './icons/SkipForwardIcon.tsx';

interface MusicPlayerProps {
  music: Music;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ music, isPlaying, onPlayPause }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-xl shadow-lg p-6 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <img src={music.thumbnailUrl} alt={music.title} className="w-64 h-64 rounded-lg shadow-2xl mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{music.title}</h2>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-6">{music.artist}</p>
        
        <div className="w-full">
          <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded-full">
            <div className="w-1/3 h-1 bg-red-500 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>1:05</span>
            <span>3:15</span>
          </div>
        </div>

        <div className="flex items-center space-x-8 mt-6">
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <SkipBackIcon className="w-8 h-8" />
          </button>
          <button onClick={onPlayPause} className="p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600">
            {isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <SkipForwardIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};
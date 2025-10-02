import React from 'react';
import { Video } from '../types';
import { PlayIcon } from './icons/PlayIcon';

interface VideoCardProps {
  video: Video;
  onSelect: () => void;
  onPlay: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect, onPlay }) => {
  return (
    <div className="flex-shrink-0 w-40 cursor-pointer group" onClick={onSelect}>
      <div className="relative overflow-hidden rounded-lg">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105" />
         <div 
            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={(e) => { e.stopPropagation(); onPlay(); }}
        >
          <PlayIcon className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm truncate text-gray-800 dark:text-gray-200">{video.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{video.channel}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{video.views}</p>
      </div>
    </div>
  );
};
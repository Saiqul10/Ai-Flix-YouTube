import React from 'react';
import { ContentItem, ContentType, Movie } from '../types';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon';
import { PlayIcon } from '../components/icons/PlayIcon';
import { HeartIcon } from '../components/icons/HeartIcon';
import { MessageCircleIcon } from '../components/icons/MessageCircleIcon';
import { ShareIcon } from '../components/icons/ShareIcon';
import { DownloadIcon } from '../components/icons/DownloadIcon';
import { ContentSection } from '../components/ContentSection';
import { VIDEOS } from '../constants';

interface PlayerPageProps {
  item: ContentItem;
  onBack: () => void;
}

export const PlayerPage: React.FC<PlayerPageProps> = ({ item, onBack }) => {
  const thumbnailUrl = 'thumbnailUrl' in item ? item.thumbnailUrl : (item as Movie).posterUrl;

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col">
      <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
        <img src={thumbnailUrl} alt={item.title} className="absolute top-0 left-0 w-full h-full object-contain" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <PlayIcon className="w-20 h-20 text-white opacity-75 cursor-pointer" />
        </div>
        <button onClick={onBack} className="absolute top-4 left-4 p-2 bg-black/50 rounded-full text-white">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto no-scrollbar">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h1>
          {'channel' in item && <p className="text-sm text-gray-500 dark:text-gray-400">{(item as any).channel}</p>}
          {'artist' in item && <p className="text-sm text-gray-500 dark:text-gray-400">{(item as any).artist}</p>}
          {'releaseYear' in item && <p className="text-sm text-gray-500 dark:text-gray-400">{(item as Movie).releaseYear}</p>}
        </div>

        <div className="p-4 flex justify-around items-center text-sm">
          <button className="flex flex-col items-center space-y-1 text-gray-600 dark:text-gray-300">
            <HeartIcon className="w-6 h-6" />
            <span>Like</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600 dark:text-gray-300">
            <MessageCircleIcon className="w-6 h-6" />
            <span>Comment</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600 dark:text-gray-300">
            <ShareIcon className="w-6 h-6" />
            <span>Share</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-600 dark:text-gray-300">
            <DownloadIcon className="w-6 h-6" />
            <span>Download</span>
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <ContentSection
            title="Up Next"
            items={VIDEOS}
            type={ContentType.Video}
            onItemSelect={() => {}}
            onItemPlay={() => {}}
            onViewAllClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
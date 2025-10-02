import React from 'react';
import { ContentItem, ContentType } from '../types';
import { MovieCard } from './MovieCard';
import { MusicCard } from './MusicCard';
import { VideoCard } from './VideoCard';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
  type: ContentType;
  onItemSelect: (item: ContentItem) => void;
  onItemPlay: (item: ContentItem) => void;
  onViewAllClick: () => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, items, type, onItemSelect, onItemPlay, onViewAllClick }) => {
  const renderCard = (item: ContentItem) => {
    switch (type) {
      case ContentType.Movie:
        return <MovieCard movie={item as any} onSelect={() => onItemSelect(item)} onPlay={() => onItemPlay(item)} />;
      case ContentType.Music:
        return <MusicCard music={item as any} onSelect={() => onItemSelect(item)} onPlay={() => onItemPlay(item)} />;
      case ContentType.Video:
        return <VideoCard video={item as any} onSelect={() => onItemSelect(item)} onPlay={() => onItemPlay(item)} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <button onClick={onViewAllClick} className="flex items-center text-sm font-semibold text-red-600">
          See All <ChevronRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="flex overflow-x-auto space-x-4 px-4 no-scrollbar">
        {items.map(item => (
          <div key={item.id}>
            {renderCard(item)}
          </div>
        ))}
      </div>
    </section>
  );
};
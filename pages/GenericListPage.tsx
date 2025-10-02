import React from 'react';
import { ContentItem, Page, ContentType } from '../types';
import { MovieCard } from '../components/MovieCard';
import { MusicCard } from '../components/MusicCard';
import { VideoCard } from '../components/VideoCard';

interface GenericListPageProps {
  page: Page;
  items: ContentItem[];
  onItemSelect: (item: ContentItem) => void;
  onItemPlay: (item: ContentItem) => void;
}

export const GenericListPage: React.FC<GenericListPageProps> = ({ page, items, onItemSelect, onItemPlay }) => {
  const getContentType = (): ContentType => {
    switch (page) {
      case Page.Movies: return ContentType.Movie;
      case Page.Music: return ContentType.Music;
      case Page.YouTube: return ContentType.Video;
      default: return ContentType.Movie;
    }
  };

  const contentType = getContentType();

  const renderCard = (item: ContentItem) => {
    switch (contentType) {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{page}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map(item => (
          <div key={item.id}>
            {renderCard(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
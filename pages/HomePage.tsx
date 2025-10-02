import React from 'react';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { ContentSection } from '../components/ContentSection';
import { MOVIES, MUSIC, VIDEOS } from '../constants';
import { ContentItem, ContentType, Page } from '../types';

interface HomePageProps {
  setActivePage: (page: Page) => void;
  onItemSelect: (item: ContentItem) => void;
  onItemPlay: (item: ContentItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onItemSelect, onItemPlay }) => {
  return (
    <div className="space-y-4">
      <div className="px-4">
        <FeaturedCarousel items={MOVIES} onItemSelect={onItemSelect} onItemPlay={onItemPlay} />
      </div>
      <ContentSection
        title="Trending Movies"
        items={MOVIES}
        type={ContentType.Movie}
        onItemSelect={onItemSelect}
        onItemPlay={onItemPlay}
        onViewAllClick={() => setActivePage(Page.Movies)}
      />
      <ContentSection
        title="New Music"
        items={MUSIC}
        type={ContentType.Music}
        onItemSelect={onItemSelect}
        onItemPlay={onItemPlay}
        onViewAllClick={() => setActivePage(Page.Music)}
      />
      <ContentSection
        title="Popular on YouTube"
        items={VIDEOS}
        type={ContentType.Video}
        onItemSelect={onItemSelect}
        onItemPlay={onItemPlay}
        onViewAllClick={() => setActivePage(Page.YouTube)}
      />
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { GenericListPage } from './pages/GenericListPage.tsx';
import { DetailPage } from './pages/DetailPage.tsx';
import { ProfilePage } from './pages/ProfilePage.tsx';
import { Page, ContentItem } from './types.ts';
import { MOVIES, MUSIC, VIDEOS } from './constants.ts';
import { PlayerPage } from './pages/PlayerPage.tsx';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [nowPlayingItem, setNowPlayingItem] = useState<ContentItem | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleItemSelect = (item: ContentItem) => {
    setSelectedContent(item);
  };
  
  const clearSelectedContent = () => {
    setSelectedContent(null);
  };

  const handleItemPlay = (item: ContentItem) => {
    setNowPlayingItem(item);
  };

  const handleClosePlayer = () => {
    setNowPlayingItem(null);
  };

  const renderPage = () => {
    if (nowPlayingItem) {
      return <PlayerPage item={nowPlayingItem} onBack={handleClosePlayer} />;
    }
    if (selectedContent) {
      return <DetailPage item={selectedContent} onBack={clearSelectedContent} onPlay={handleItemPlay} />;
    }

    switch (activePage) {
      case Page.Home:
        return <HomePage setActivePage={setActivePage} onItemSelect={handleItemSelect} onItemPlay={handleItemPlay} />;
      case Page.Movies:
        return <GenericListPage page={Page.Movies} items={MOVIES} onItemSelect={handleItemSelect} onItemPlay={handleItemPlay} />;
      case Page.Music:
        return <GenericListPage page={Page.Music} items={MUSIC} onItemSelect={handleItemSelect} onItemPlay={handleItemPlay} />;
      case Page.YouTube:
        return <GenericListPage page={Page.YouTube} items={VIDEOS} onItemSelect={handleItemSelect} onItemPlay={handleItemPlay} />;
      case Page.Profile:
        return <ProfilePage theme={theme} toggleTheme={toggleTheme} />;
      default:
        return <HomePage setActivePage={setActivePage} onItemSelect={handleItemSelect} onItemPlay={handleItemPlay} />;
    }
  };

  const showHeaderAndNav = !selectedContent && !nowPlayingItem;

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-lg mx-auto">
        {showHeaderAndNav && <Header setActivePage={setActivePage} />}
        <main className={`transition-all duration-300 ${showHeaderAndNav ? 'pt-16 pb-16' : ''}`}>
          {renderPage()}
        </main>
        {showHeaderAndNav && <BottomNav activePage={activePage} setActivePage={setActivePage} />}
      </div>
    </div>
  );
};

export default App;
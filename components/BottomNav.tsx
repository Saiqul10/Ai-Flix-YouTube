import React from 'react';
import { HomeIcon } from './icons/HomeIcon.tsx';
import { MovieIcon } from './icons/MovieIcon.tsx';
import { MusicIcon } from './icons/MusicIcon.tsx';
import { YouTubeIcon } from './icons/YouTubeIcon.tsx';
import { Page } from '../types.ts';
import { ProfileIcon } from './icons/ProfileIcon.tsx';

interface BottomNavProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { page: Page.Home, icon: HomeIcon, label: 'Home' },
    { page: Page.Movies, icon: MovieIcon, label: 'Movies' },
    { page: Page.Music, icon: MusicIcon, label: 'Music' },
    { page: Page.YouTube, icon: YouTubeIcon, label: 'YouTube' },
    { page: Page.Profile, icon: ProfileIcon, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 max-w-lg mx-auto">
      <div className="flex justify-around h-16">
        {navItems.map(({ page, icon: Icon, label }) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`flex flex-col items-center justify-center w-full text-xs transition-colors duration-200 ${
              activePage === page ? 'text-red-600' : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
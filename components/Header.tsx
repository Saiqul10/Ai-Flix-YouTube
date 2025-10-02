import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { ProfileIcon } from './icons/ProfileIcon';
import { Page } from '../types';

interface HeaderProps {
    setActivePage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ setActivePage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md max-w-lg mx-auto">
      <div className="flex items-center justify-between p-4 h-16 border-b border-gray-200 dark:border-transparent">
        <h1 className="text-2xl font-bold text-red-600">AI Flix</h1>
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Movies, Music, YouTube..."
              className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <SearchIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <button onClick={() => setActivePage(Page.Profile)} className="text-gray-800 dark:text-gray-200">
            <ProfileIcon className="w-8 h-8 p-1 rounded-full bg-gray-200 dark:bg-gray-700" />
        </button>
      </div>
    </header>
  );
};
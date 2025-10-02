import React from 'react';
import { ProfileIcon } from '../components/icons/ProfileIcon.tsx';

interface ProfilePageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="p-4 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <ProfileIcon className="w-16 h-16 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Doe</h1>
      <p className="text-gray-500 dark:text-gray-400">alex.doe@example.com</p>

      <div className="mt-8 space-y-4 text-left">
         <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                <button
                onClick={toggleTheme}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                    theme === 'dark' ? 'bg-red-600' : 'bg-gray-300'
                }`}
                >
                <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
                </button>
            </div>
        </div>
        <button className="w-full text-left p-4 rounded-lg bg-gray-100 dark:bg-gray-800">Account Settings</button>
        <button className="w-full text-left p-4 rounded-lg bg-gray-100 dark:bg-gray-800">Subscription</button>
        <button className="w-full text-left p-4 rounded-lg bg-gray-100 dark:bg-gray-800">Help & Support</button>
        <button className="w-full text-left p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-red-500">Log Out</button>
      </div>
    </div>
  );
};
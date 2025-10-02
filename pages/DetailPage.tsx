import React from 'react';
import { ContentItem, Movie, Music, Video } from '../types.ts';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon.tsx';
import { HeartIcon } from '../components/icons/HeartIcon.tsx';
import { ShareIcon } from '../components/icons/ShareIcon.tsx';
import { DownloadIcon } from '../components/icons/DownloadIcon.tsx';
import { PlayIcon } from '../components/icons/PlayIcon.tsx';

interface DetailPageProps {
  item: ContentItem;
  onBack: () => void;
  onPlay: (item: ContentItem) => void;
}

const isMovie = (item: ContentItem): item is Movie => 'releaseYear' in item;
const isMusic = (item: ContentItem): item is Music => 'artist' in item;
const isVideo = (item: ContentItem): item is Video => 'channel' in item;

export const DetailPage: React.FC<DetailPageProps> = ({ item, onBack, onPlay }) => {

  const renderDetails = () => {
    if (isMovie(item)) {
      return (
        <>
          <img src={item.posterUrl} alt={item.title} className="w-full h-96 object-cover" />
          <div className="p-4 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{item.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{item.releaseYear}</span>
              <span>{item.genre}</span>
              <span>{item.duration}</span>
              <span>Rating: {item.rating}/10</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{item.summary}</p>
          </div>
        </>
      );
    }
    if (isMusic(item)) {
      return (
         <div className="p-4 flex flex-col items-center text-center">
            <img src={item.thumbnailUrl} alt={item.title} className="w-64 h-64 rounded-lg shadow-lg mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{item.title}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">{item.artist}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">from album: {item.album}</p>
         </div>
      );
    }
    if (isVideo(item)) {
       return (
        <>
          <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
            <img src={item.thumbnailUrl} alt={item.title} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer" onClick={() => onPlay(item)}>
              <PlayIcon className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{item.channel}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.views}</p>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="relative">
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
            <button onClick={onBack} className="p-2 bg-black/30 rounded-full text-white">
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
                <button className="p-2 bg-black/30 rounded-full text-white"><HeartIcon className="w-6 h-6" /></button>
                <button className="p-2 bg-black/30 rounded-full text-white"><ShareIcon className="w-6 h-6" /></button>
            </div>
        </header>

        {renderDetails()}
        
        <div className="p-4 flex flex-col space-y-4">
             <button onClick={() => onPlay(item)} className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full">
                <PlayIcon className="w-6 h-6 mr-2 fill-current" />
                Play
            </button>
             <button className="w-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold py-3 px-4 rounded-full">
                <DownloadIcon className="w-6 h-6 mr-2" />
                Download
            </button>
        </div>
    </div>
  );
};
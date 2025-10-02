import { Movie, Music, Video } from './types';

export const MOVIES: Movie[] = [
  {
    id: 'm1',
    title: 'Inception',
    releaseYear: 2010,
    posterUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Inception',
    summary: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: 'Sci-Fi',
    duration: '2h 28m',
    rating: 8.8,
  },
  {
    id: 'm2',
    title: 'The Dark Knight',
    releaseYear: 2008,
    posterUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=The+Dark+Knight',
    summary: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: 'Action',
    duration: '2h 32m',
    rating: 9.0,
  },
  {
    id: 'm3',
    title: 'Interstellar',
    releaseYear: 2014,
    posterUrl: 'https://placehold.co/400x600/000000/FFFFFF/png?text=Interstellar',
    summary: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Sci-Fi',
    duration: '2h 49m',
    rating: 8.6,
  },
];

export const MUSIC: Music[] = [
  {
    id: 'mu1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    thumbnailUrl: 'https://placehold.co/400x400/1DB954/FFFFFF/png?text=Queen',
    album: 'A Night at the Opera',
  },
  {
    id: 'mu2',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    thumbnailUrl: 'https://placehold.co/400x400/1DB954/FFFFFF/png?text=Led+Zeppelin',
    album: 'Led Zeppelin IV',
  },
  {
    id: 'mu3',
    title: 'Hotel California',
    artist: 'Eagles',
    thumbnailUrl: 'https://placehold.co/400x400/1DB954/FFFFFF/png?text=Eagles',
    album: 'Hotel California',
  },
];

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Learn React in 30 Minutes',
    channel: 'Web Dev Simplified',
    thumbnailUrl: 'https://placehold.co/400x225/FF0000/FFFFFF/png?text=React',
    views: '1.2M views',
  },
  {
    id: 'v2',
    title: 'CSS Grid Tutorial | A Complete Guide',
    channel: 'Traversy Media',
    thumbnailUrl: 'https://placehold.co/400x225/FF0000/FFFFFF/png?text=CSS+Grid',
    views: '2.5M views',
  },
  {
    id: 'v3',
    title: 'The Future of AI',
    channel: 'MKBHD',
    thumbnailUrl: 'https://placehold.co/400x225/FF0000/FFFFFF/png?text=AI',
    views: '5M views',
  },
];


export interface Movie {
  id: string;
  title: string;
  releaseYear: number;
  posterUrl: string;
  summary: string;
  genre: string;
  duration: string;
  rating: number;
}

export interface Music {
  id: string;
  title: string;
  artist: string;
  thumbnailUrl: string;
  album: string;
}

export interface Video {
  id: string;
  title: string;
  channel: string;
  thumbnailUrl: string;
  views: string;
}

export type ContentItem = Movie | Music | Video;

export enum Page {
  Home = 'Home',
  Movies = 'Movies',
  Music = 'Music',
  YouTube = 'YouTube',
  Profile = 'Profile',
}

export enum ContentType {
  Movie = 'Movie',
  Music = 'Music',
  Video = 'Video',
}

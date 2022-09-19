export type EpisodeInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type EpisodeResults = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type Episode = {
  info: EpisodeInfo;
  results: EpisodeResults[];
};

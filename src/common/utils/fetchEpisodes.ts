import type { EpisodeResults } from '../types/Episode';

const fetchEpisodes = async (episodes: string[]) => {
  return await Promise.all(
    episodes.map(async url => {
      const response = await fetch(url);
      const data: EpisodeResults = await response.json();
      return data;
    })
  );
};

export default fetchEpisodes;

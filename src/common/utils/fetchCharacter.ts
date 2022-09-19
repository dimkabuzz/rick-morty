import type { CharacterResults } from '@/types/Character';
import { API } from '@/utils/constants';

const fetchCharacter = async (id: number) => {
  const api = `${API}${id}`;
  const response = await fetch(api);
  const data: CharacterResults = await response.json();

  return data;
};

export default fetchCharacter;

import type { Character } from '@/types/Character';
import { API } from '@/utils/constants';

const fetchCharacters = async (nameQuery?: string) => {
  const api = `${API}${nameQuery ? `?name=${nameQuery}` : ''}`;

  const response = await fetch(api);
  const data: Character = await response.json();

  return data;
};

export default fetchCharacters;

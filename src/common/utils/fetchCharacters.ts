import type { Character } from '@/types/Character';
import { API } from '@/utils/constants';

const fetchCharacters = async ({
  name = '',
  page = 1,
}: { name?: string; page?: number } = {}) => {
  const api = `${API}?name=${name}&page=${page}`;

  const response = await fetch(api);
  const data: Character = await response.json();

  return data;
};

export default fetchCharacters;

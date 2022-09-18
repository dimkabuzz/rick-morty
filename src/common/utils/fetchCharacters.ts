import { Character } from '../types/Character';

const fetchCharacters = async (nameQuery?: string) => {
  const api = `https://rickandmortyapi.com/api/character/${
    nameQuery ? `?name=${nameQuery}` : ''
  }`;

  const response = await fetch(api);
  const data: Character = await response.json();

  return data;
};

export default fetchCharacters;

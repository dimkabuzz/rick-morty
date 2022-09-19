import { useState, useEffect } from 'react';

import type { CharacterResults } from '@/types/Character';

type Props = {
  character: CharacterResults;
};

const ButtonFav = ({ character }: Props) => {
  const [isFav, setIsFav] = useState(false);
  const [favorites, setFavorites] = useState<CharacterResults[]>([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites') || '[]');
    const matchedFav = storedFavs.find(
      (storedChar: CharacterResults) => storedChar.id === character.id
    );

    matchedFav && setIsFav(true);
    setFavorites(storedFavs);
  }, [character]);

  const updateLocalFavs = (newFav: CharacterResults[]) => {
    localStorage.setItem('favorites', JSON.stringify(newFav));
    setFavorites(newFav);
    setIsFav(!isFav);
  };

  const toggleHandler = () => {
    if (!isFav) {
      const newFavorites = favorites.concat(character);
      updateLocalFavs(newFavorites);
    } else {
      const newFavorites = favorites.filter(
        (storedChar: CharacterResults) => storedChar.id !== character.id
      );
      updateLocalFavs(newFavorites);
    }
  };

  return (
    <button className="character-modal__fav-btn" onClick={toggleHandler}>
      <svg
        className={`character-modal__fav-icon ${
          isFav ? 'character-modal__fav-icon--filled' : ''
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
};

export default ButtonFav;

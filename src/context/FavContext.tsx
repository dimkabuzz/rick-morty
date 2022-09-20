import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import type { CharacterResults } from '@/types/Character';

type favContextType = {
  favorites: CharacterResults[];
  updateFavorites: (character: CharacterResults) => void;
};

const favContextDefaultValues: favContextType = {
  favorites: [],
  updateFavorites: () => {},
};

const FavContext = createContext<favContextType>(favContextDefaultValues);

export function useFav() {
  return useContext(FavContext);
}

type Props = {
  children: ReactNode;
};

export function FavProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<CharacterResults[]>([]);

  useEffect(() => {
    const storedFavs: CharacterResults[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    setFavorites(storedFavs);
  }, []);

  const updateLocalFavs = (newFav: CharacterResults[]) => {
    localStorage.setItem('favorites', JSON.stringify(newFav));
    setFavorites(newFav);
  };

  const updateFavorites = (character: CharacterResults) => {
    const isFav = favorites.find(storedChar => storedChar.id === character.id);

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

  const value = {
    favorites,
    updateFavorites,
  };

  return (
    <>
      <FavContext.Provider value={value}>{children}</FavContext.Provider>
    </>
  );
}

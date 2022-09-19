import React, { Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterList from '@/elements/CharacterList';
import type { CharacterResults } from '@/types/Character';

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<CharacterResults[]>([]);
  const noData = favorites.length === 0;

  useEffect(() => {
    const storedFavs: CharacterResults[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavs);
  }, []);

  return (
    <Fragment>
      <Metadata
        title="Favorite Characters"
        description="Favorite characters of Ricky and Morty"
      />
      <Container>
        <h1>Favorite Characters</h1>
        <CharacterList dataToRender={favorites} error={noData} />
      </Container>
    </Fragment>
  );
};

export default Favorites;

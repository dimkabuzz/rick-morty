import React, { Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterList from '@/modules/Character/components/CharacterList';
import { useFav } from '@/context/FavContext';

const Favorites: NextPage = () => {
  const { favorites } = useFav();
  const noData = favorites.length === 0;

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

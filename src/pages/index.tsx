import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import Modal from '@/elements/Modal';
import CharacterThumb from '@/elements/CharacterThumb';
import { Character } from '@/types/Character';

const Home: NextPage<Character> = ({ info, results }) => {
  const [moduleIsShown, setModuleIsShown] = useState(false);

  const showModuleHandler = () => {
    setModuleIsShown(true);
  };

  const hideModuleHandler = () => {
    setModuleIsShown(false);
  };

  return (
    <Fragment>
      <Metadata
        title="Ricky and Morty"
        description="Visualization of Ricky and Morty characters using NextJS"
      />
      <Container>
        <h1>Characters</h1>
        <form className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search for characters"
          />
          <button className="search__btn">Search</button>
        </form>
        <div className="character-list">
          {results.map(data => (
            <CharacterThumb
              key={data.id}
              character={data}
              showModal={showModuleHandler}
            />
          ))}
        </div>
        {moduleIsShown && <Modal onClose={hideModuleHandler}>Test</Modal>}
      </Container>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: Character = await response.json();

  return {
    props: {
      info: data.info,
      results: data.results,
    },
  };
};

export default Home;

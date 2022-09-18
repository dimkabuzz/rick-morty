import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterThumb from '@/elements/CharacterThumb';
import { Character } from '@/types/Character';

const Home: NextPage<Character> = ({ info, results }) => {
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
          <button className="btn">Search</button>
        </form>
        <div className="character-list">
          {results.map(data => (
            <CharacterThumb key={data.id} character={data} />
          ))}
        </div>
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

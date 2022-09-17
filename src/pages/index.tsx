import { Fragment } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';

type CharacterInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type CharacterResults = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterData = {
  info: CharacterInfo;
  results: CharacterResults[];
};

const Home: NextPage<CharacterData> = ({ info, results }) => {
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
          {results.map(character => (
            <article className="character" key={character.id}>
              <div className="character__img">
                <Image
                  src={character.image}
                  priority
                  layout="responsive"
                  width={245}
                  height={245}
                  alt=""
                />
              </div>
              <div className="character__text">
                <h3>{character.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data: CharacterData = await res.json();

  return {
    props: {
      info: data.info,
      results: data.results,
    },
    revalidate: 60,
  };
};

export default Home;

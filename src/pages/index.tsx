import { Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterThumb from '@/elements/CharacterThumb';
import Search from '@/elements/Search';
import { Character } from '@/types/Character';

const Home: NextPage<Character> = ({ info, results }) => {
  const [nameQuery, setNameQuery] = useState('');
  const [fetchedData, setFetchedData] = useState<Character>();

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nameQuery}`
      );
      const data: Character = await response.json();
      setFetchedData(data);
    })();
  }, [nameQuery]);

  const dataToRender = fetchedData?.results || results;
  const isNotFound = !fetchedData?.results && nameQuery;

  return (
    <Fragment>
      <Metadata
        title="Ricky and Morty"
        description="Visualization of Ricky and Morty characters using NextJS"
      />
      <Container>
        <h1>Characters</h1>
        <Search query={setNameQuery} />
        <div
          className="character-list"
          style={{
            maxWidth:
              dataToRender.length < 4
                ? dataToRender.length * 200 +
                  (dataToRender.length - 1) * 20 +
                  'px'
                : '100%',
          }}
        >
          {!isNotFound &&
            dataToRender.map(data => (
              <CharacterThumb key={data.id} character={data} />
            ))}
          {isNotFound && <p>No Characters Found</p>}
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

  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const data: Character = await response.json();

  return {
    props: {
      info: data.info,
      results: data.results,
    },
  };
};

export default Home;

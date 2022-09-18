import { Fragment, useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterList from '@/elements/CharacterList';
import Search from '@/elements/Search';
import { Character } from '@/types/Character';
import fetchCharacters from '@/utils/fetchCharacters';

const Home: NextPage<Character> = ({ info, results }) => {
  const [nameQuery, setNameQuery] = useState('');
  const [fetchedData, setFetchedData] = useState<Character>();

  useEffect(() => {
    (async function () {
      setFetchedData(await fetchCharacters(nameQuery));
    })();
  }, [nameQuery]);

  const data = fetchedData?.results || results;
  const noData = !fetchedData?.results && nameQuery.length > 0;

  return (
    <Fragment>
      <Metadata
        title="Ricky and Morty"
        description="Visualization of Ricky and Morty characters using NextJS"
      />
      <Container>
        <h1>Characters</h1>
        <Search query={setNameQuery} />
        <CharacterList dataToRender={data} error={noData} />
      </Container>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const data = await fetchCharacters();

  return {
    props: {
      info: data.info,
      results: data.results,
    },
  };
};

export default Home;

import { Fragment, useState, useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterList from '@/elements/CharacterList';
import Search from '@/elements/Search';
import type {
  Character,
  CharacterInfo,
  CharacterResults,
} from '@/types/Character';
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
        title="Rick and Morty"
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

type DataProps = {
  info: CharacterInfo;
  results: CharacterResults[];
};

export const getStaticProps: GetStaticProps<DataProps> = async () => {
  const { info, results } = await fetchCharacters();

  return {
    props: {
      info: info,
      results: results,
    },
  };
};

export default Home;

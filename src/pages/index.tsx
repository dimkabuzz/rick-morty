import React, { Fragment, useState, useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import CharacterList from '@/modules/Character/components/CharacterList';
import Pagination from '@/elements/Pagination';
import Search from '@/elements/Search';
import type {
  Character,
  CharacterInfo,
  CharacterResults,
} from '@/types/Character';
import fetchCharacters from '@/utils/fetchCharacters';

const Home: NextPage<Character> = ({ info, results }) => {
  const [nameQuery, setNameQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchedData, setFetchedData] = useState<Character>();

  const pageInfo = fetchedData?.info || info;
  const data = fetchedData?.results || results;
  const noData = !fetchedData?.results && nameQuery.length > 0;

  useEffect(() => {
    (async function () {
      setFetchedData(
        await fetchCharacters({ name: nameQuery, page: currentPage })
      );
    })();
  }, [nameQuery, currentPage]);

  const handleSearchQuery = (query: string) => {
    setNameQuery(query);
    setCurrentPage(1);
  };

  return (
    <Fragment>
      <Metadata
        title="Rick and Morty"
        description="Visualization of Ricky and Morty characters using NextJS"
      />
      <Container>
        <h1>Characters</h1>
        <Search query={handleSearchQuery} />
        <CharacterList dataToRender={data} error={noData} />
        {pageInfo.pages > 1 && !noData && (
          <Pagination
            info={pageInfo}
            current={currentPage}
            setCurrent={setCurrentPage}
          />
        )}
      </Container>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { info, results } = await fetchCharacters();

  return {
    props: {
      info: info,
      results: results,
    },
  };
};

export default Home;

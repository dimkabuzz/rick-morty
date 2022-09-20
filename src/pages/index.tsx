import React, { Fragment, useState, useEffect } from 'react';
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(+e.target.value);
  };

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
        {pageInfo.pages > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3px',
              margin: '30px 0',
            }}
          >
            {pageInfo.prev && (
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                {`<<`}
              </button>
            )}
            {pageInfo.pages > 1 && (
              <Fragment>
                <span>Page </span>
                <select
                  name="pages"
                  id="pages"
                  value={currentPage}
                  onChange={handleSelectChange}
                >
                  {Array.from({ length: pageInfo.pages }, (_, i) => i + 1).map(
                    page => (
                      <option
                        key={page}
                        value={page}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </option>
                    )
                  )}
                </select>
                <span> of {pageInfo.pages}</span>
              </Fragment>
            )}
            {pageInfo.next && (
              <button onClick={() => setCurrentPage(currentPage + 1)}>
                {`>>`}
              </button>
            )}
          </div>
        )}
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

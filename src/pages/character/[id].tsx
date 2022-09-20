import React, { Fragment } from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';
import ButtonFav from '@/elements/ButtonFav';
import type { CharacterResults } from '@/types/Character';
import type { EpisodeResults } from '@/types/Episode';
import fetchCharacters from '@/utils/fetchCharacters';
import fetchCharacter from '@/utils/fetchCharacter';
import fetchEpisodes from '@/utils/fetchEpisodes';

type Props = {
  character: CharacterResults;
  episodes: EpisodeResults[];
};

const CharacterDetails: NextPage<Props> = ({ character, episodes }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Metadata
        title={character.name}
        description={`Detailed description of character '${character.name}' using NextJS`}
      />
      <Container>
        <h1>{character.name}</h1>
        <article className="character-details">
          <div className="character-details__desc">
            <div className="character-details__img">
              <Image
                src={character.image}
                layout="responsive"
                width={300}
                height={300}
                alt={`${character.name} character`}
              />
            </div>
            <div className="character-details__text">
              <h2>Character Description</h2>
              <p>
                <span>Status:</span> {character.status}
              </p>
              <p>
                <span>Gender:</span> {character.gender}
              </p>
              {character.type && (
                <p>
                  <span>Type:</span> {character.type}
                </p>
              )}
              <p>
                <span>Location:</span> {character.location.name}
              </p>
              <p>
                <span>Origin:</span> {character.origin.name}
              </p>
              <p>
                <span>Species:</span> {character.species}
              </p>
              <ButtonFav character={character} />
            </div>
          </div>
        </article>
        {episodes && (
          <div className="character-details__episodes">
            <h2>Episodes</h2>
            {episodes.map(episode => (
              <p key={episode.id}>{episode.name}</p>
            ))}
          </div>
        )}
      </Container>
    </Fragment>
  );
};

type PathProps = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const data = await fetchCharacters();
  const idArr = Array.from({ length: data.info.count - 1 }, (_, i) => i + 1);

  return {
    fallback: 'blocking',
    paths: idArr.map(id => ({
      params: {
        id: id.toString(),
      },
    })),
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params as IParams;

  const characterData = await fetchCharacter(id);
  const episodesData = await fetchEpisodes(characterData.episode);

  return {
    props: {
      character: characterData,
      episodes: episodesData,
    },
  };
};

export default CharacterDetails;

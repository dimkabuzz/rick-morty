import Image from 'next/image';

import { CharacterResults } from '@/types/Character';

type Props = {
  character: CharacterResults;
  showModal: () => void;
};

export default function CharacterThumb({ character, showModal }: Props) {
  return (
    <article className="character" onClick={showModal}>
      <div className="character__img">
        <Image
          src={character.image}
          priority
          layout="responsive"
          width={245}
          height={245}
          alt={`${character.name} thumbnail`}
        />
      </div>
      <div className="character__text">
        <h3>{character.name}</h3>
      </div>
    </article>
  );
}

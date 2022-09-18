import Image from 'next/image';
import { CharacterResults } from '@/types/Character';

type Props = {
  character: CharacterResults;
  closeModal: () => void;
};

export default function CharacterModal({ character, closeModal }: Props) {
  return (
    <article className="character-modal">
      <div className="character-modal__img">
        <Image
          src={character.image}
          priority
          layout="responsive"
          width={245}
          height={245}
          alt={`${character.name} character`}
        />
      </div>
      <div className="character-modal__text">
        <h1>{character.name}</h1>
        <p>
          <span>Gender:</span> {character.gender}
        </p>
        <p>
          <span>Location:</span> {character.location.name}
        </p>
        <p>
          <span>Origin:</span> {character.origin.name}
        </p>
        <p>
          <span>Species:</span> {character.species}
        </p>
      </div>
      <button className="btn btn--more">Show More</button>
      <button className="character-modal__close-btn" onClick={closeModal}>
        &#10006;
      </button>
    </article>
  );
}

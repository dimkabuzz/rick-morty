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
        <button className="character-modal__fav-btn">
          <svg
            className="character-modal__fav-icon"
            width="21"
            height="21"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <button className="btn btn--more">Show More</button>
      <button className="character-modal__close-btn" onClick={closeModal}>
        &#10006;
      </button>
    </article>
  );
}

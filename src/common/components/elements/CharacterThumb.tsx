import { Fragment, useState } from 'react';
import Image from 'next/image';

import Modal from '@/elements/Modal';
import CharacterModal from '@/elements/CharacterModal';
import { CharacterResults } from '@/types/Character';

type Props = {
  character: CharacterResults;
};

export default function CharacterThumb({ character }: Props) {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      <article className="character-thumb" onClick={showModalHandler}>
        <div className="character-thumb__img">
          <Image
            src={character.image}
            priority
            layout="responsive"
            width={245}
            height={245}
            alt={`${character.name} thumbnail`}
          />
        </div>
        <div className="character-thumb__text">
          <h3>{character.name}</h3>
        </div>
      </article>
      {modalIsShown && (
        <Modal onClose={hideModalHandler}>
          <CharacterModal character={character} closeModal={hideModalHandler} />
        </Modal>
      )}
    </Fragment>
  );
}

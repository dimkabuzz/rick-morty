import { Fragment } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import Metadata from '@/layouts/Metadata';
import Container from '@/layouts/Container';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Metadata
        title="Ricky and Morty"
        description="Visualization of Ricky and Morty characters using NextJS"
      />
      <Container>
        <h1>Characters</h1>
        <form className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search for characters"
          />
          <button className="search__btn">Search</button>
        </form>
        <div className="character-list">
          <article className="character">
            <div className="character__img">
              <Image
                src="/images/1.jpeg"
                layout="responsive"
                width={245}
                height={245}
                alt=""
              />
            </div>
            <div className="character__text">
              <h3>Rick Sanchez</h3>
            </div>
          </article>

          <article className="character">
            <div className="character__img">
              <Image
                src="/images/1.jpeg"
                layout="responsive"
                width={245}
                height={245}
                alt=""
              />
            </div>
            <div className="character__text">
              <h3>Rick Sanchez</h3>
            </div>
          </article>

          <article className="character">
            <div className="character__img">
              <Image
                src="/images/1.jpeg"
                layout="responsive"
                width={245}
                height={245}
                alt=""
              />
            </div>
            <div className="character__text">
              <h3>Rick Sanchez</h3>
            </div>
          </article>

          <article className="character">
            <div className="character__img">
              <Image
                src="/images/1.jpeg"
                layout="responsive"
                width={245}
                height={245}
                alt=""
              />
            </div>
            <div className="character__text">
              <h3>Rick Sanchez</h3>
            </div>
          </article>
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;

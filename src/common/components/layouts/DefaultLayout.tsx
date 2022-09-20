import { Fragment } from 'react';

import Header from '@/elements/Header';
import Footer from '@/elements/Footer';

type Props = {
  children?: React.ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Default;

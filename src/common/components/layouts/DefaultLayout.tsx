import { Fragment } from 'react';

import Header from '@/elements/Header';

type Props = {
  children?: React.ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Default;

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import ClientOnlyPortal from './ClientOnlyPortal';

import classes from './Modal.module.scss';

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <Fragment>
      <ClientOnlyPortal selector="#overlays">
        <Backdrop onClose={onClose} />

        <ModalOverlay>{children}</ModalOverlay>
      </ClientOnlyPortal>
    </Fragment>
  );
};

export default Modal;

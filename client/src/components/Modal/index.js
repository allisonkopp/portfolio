import React from 'react';
import Modal from 'react-responsive-modal';
// import { Portal } from 'react-portal';

const ModalLayout = ({ open, title, description, onClose }) => (
  <div>
    <Modal open={open} onClose={onClose} center>
      <h1>{title}</h1>
      <p>{description}</p>
    </Modal>
  </div>
);

export default ModalLayout;

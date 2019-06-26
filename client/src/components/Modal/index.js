import React from 'react';
import Modal from 'react-responsive-modal';
// import { Portal } from 'react-portal';

const ModalLayout = ({ open, title, description, icons, onClose }) => (
  <div>
    <Modal open={open} onClose={onClose} center>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Technologies used: </p>
      {icons.map(icon => (
        <img src={icon.src} alt={icon.alt}/>
      ))}
    </Modal>
  </div>
);

export default ModalLayout;

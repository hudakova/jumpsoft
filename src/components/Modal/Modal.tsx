import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
  onClick: () => void;
  closeOnClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClick, closeOnClick }) => (
  <div className={styles.modal_wrapper}>
    <div className={styles.modal}>{children}</div>
  </div>
);

export default Modal;

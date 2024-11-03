import React from 'react';
import { ReactComponent as BinIcon } from '../../assets/icons/bin1.svg';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>
    <BinIcon width="32px" height="32px" />
  </button>
);

export default DeleteButton;

import React from 'react';
import styles from './TodoBlock.module.css';
import { Button, DeleteButton } from '../Button';
import { Todo, TodoStatus } from '../../model';

interface Props {
  data: Todo;
  onClick: () => void;
  deleteOnClick: () => void;
}

const TodoBlock: React.FC<Props> = ({ data, onClick, deleteOnClick }) => {
  const buttonText = (state?: TodoStatus) => {
    switch (state) {
      case 'todo':
        return 'Start';
      case 'in-progress':
        return 'Dokoncit';
      case 'done':
        return 'Odznova';
    }
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo_items}>
        <h3>{data.title}</h3>
        <DeleteButton onClick={deleteOnClick} />
      </div>
      <p>{data.text}</p>
      <Button text={buttonText(data.status)} onClick={onClick} />
    </div>
  );
};

export default TodoBlock;

import React, { FormEvent, useState } from 'react';
import { Todo } from '../../model';
import * as uuid from 'uuid';
import { Input } from '../Input';
import { Button } from '../Button';

interface Props {
  onSubmit: (values: Todo) => void;
  onClose: () => void;
}

const TodoForm: React.FC<Props> = ({ onSubmit, onClose }) => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoText, setTodoText] = useState<string>('');

  const [titleError, setTitleError] = useState<boolean>(false);
  const [textError, setTextError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodoTitle('');
    setTodoText('');
    onSubmit({ title: todoTitle, text: todoText, status: 'todo', id: uuid.v4() });
  };

  return (
    <div className="modal_inputs">
      <form onSubmit={handleSubmit}>
        <h3>Zadajte názov</h3>
        <Input
          type="text"
          label="Zadajte názov úlohy"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
            setTitleError(!e.target.value || e.target.value.length <= 3 ? true : false);
          }}
          error={titleError}
        />
        <h3>Zadajte text</h3>
        <Input
          type="text"
          label="Zadajte popis"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
            setTextError(!e.target.value || e.target.value.length <= 3 ? true : false);
          }}
          error={textError}
        />
        <div className="modal_buttons">
          <Button text="Zatvoriť" onClick={onClose} type="button" />
          <Button text="Pridať úlohu" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

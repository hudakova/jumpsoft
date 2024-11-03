import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { Todo, TodoStatus } from './model';
import TodoBlock from './components/TodoBlock/TodoBlock';
import './App.css';

const LOCAL_STORAGE_KEY = 'todos';

function App() {
  const getTodosInitialState = () => {
    const initialValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return initialValue !== null ? JSON.parse(initialValue) : [];
  };
  const [todos, setTodos] = useState<Todo[]>(getTodosInitialState());

  const [modalVisible, setModalVisible] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleStatusChange = (id: string, status: TodoStatus) => {
    const index = todos.findIndex((e) => e.id === id);
    if (index !== -1) {
      const newTodos = [...todos];
      newTodos[index].status = status;
      setTodos(newTodos);
    }
  };

  const handleDelete = (id: string) => {
    setTodos((s) => s.filter((todo) => todo.id !== id));
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  const handleSubmit = (todo: Todo) => {
    setTodos([...todos, todo]);
    setModalVisible(true);
  };

  const handleToggleModalVisibility = () => {
    setModalVisible((s) => !s);
  };

  return (
    <>
      {!modalVisible && (
        <Modal onClick={handleToggleModalVisibility} closeOnClick={() => setModalVisible(true)}>
          <TodoForm onSubmit={handleSubmit} onClose={handleToggleModalVisibility} />
        </Modal>
      )}
      <div className="layout">
        <h1>Zoznam úloh</h1>
        <div className="buttons">
          <Button type="button" text="Odstrániť všetky úlohy" secondary onClick={handleRemoveAll} />
          <Button text="Pridať úlohu" onClick={() => setModalVisible(false)} type="button" />
        </div>
        <div className="wrapper">
          <div className="todos-container">
            <h2>To do</h2>
            {todos
              .filter((e) => e.status === 'todo')
              .map((item, index) => (
                <TodoBlock
                  data={item}
                  key={index}
                  onClick={() => {
                    handleStatusChange(item.id, 'in-progress');
                  }}
                  deleteOnClick={() => {
                    handleDelete(item.id);
                  }}
                />
              ))}
          </div>
          <div className="todos-container">
            <h2>In progress</h2>
            {todos
              .filter((e) => e.status === 'in-progress')
              .map((item, index) => (
                <TodoBlock
                  data={item}
                  key={index}
                  onClick={() => {
                    handleStatusChange(item.id, 'done');
                  }}
                  deleteOnClick={() => {
                    handleDelete(item.id);
                  }}
                />
              ))}
          </div>
          <div className="todos-container">
            <h2>Done</h2>
            {todos
              .filter((e) => e.status === 'done')
              .map((item, index) => (
                <TodoBlock
                  data={item}
                  key={index}
                  onClick={() => {
                    handleStatusChange(item.id, 'todo');
                  }}
                  deleteOnClick={() => handleDelete(item.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

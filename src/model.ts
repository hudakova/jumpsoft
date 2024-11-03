export type TodoStatus = 'todo' | 'in-progress' | 'done';

export interface Todo {
  title: string;
  text: string;
  id: string;
  status: TodoStatus;
}

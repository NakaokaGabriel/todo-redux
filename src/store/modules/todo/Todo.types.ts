export enum TodoActions {
  addTodoRequest = 'ADD/TODO_REQUEST',
  addTodoSuccess = 'ADD/TODO_SUCCESS',
  addTodoFailure = 'ADD/TODO_FAILURE'
}

export type TodoItem = {
  id: number;
  name: string;
  current_tasks: number;
  total_tasks: number;
  comments: number;
}

export type TodoList = {
  todoList: TodoItem[];
}

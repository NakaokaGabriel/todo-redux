export type TodoItem = {
  name: string;
  current_tasks: number;
  total_tasks: number;
  comments: number;
}

export type TodoList = {
  todoList: TodoItem[];
}

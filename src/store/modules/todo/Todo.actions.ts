import { TodoItem, TodoActions } from "./Todo.types";

export function addTodoRequest(todo: TodoItem) {
  return {
    type: TodoActions.addTodoRequest,
    payload: {
      todo
    }
  }
}

export function addTodoSuccess(todo: TodoItem) {
  return {
    type: TodoActions.addTodoSuccess,
    payload: {
      todo
    }
  }
}

export function addTodoFailure(todoId: number) {
  return {
    type: TodoActions.addTodoFailure,
    payload: {
      todoId
    }
  }
}
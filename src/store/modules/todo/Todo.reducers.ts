import produce from 'immer';
import { Reducer } from 'redux';
import { TodoList, TodoActions } from './Todo.types';

const INITIAL_STATE: TodoList = {
  todoList: []
};

const todo: Reducer<TodoList> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case TodoActions.addTodoRequest: {
        const todoList = action.payload;

        draft.todoList.push({
          ...todoList
        });

        break;
      }
      default:
        return draft;
    }
  })
}

export default todo;

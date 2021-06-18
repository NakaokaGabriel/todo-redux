import produce from 'immer';
import { Reducer } from 'redux';
import { TodoList } from './types';

const INITIAL_STATE: TodoList = {
  todoList: []
};

const todo: Reducer<TodoList> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      default:
        return draft;
    }
  })
}

export default todo;

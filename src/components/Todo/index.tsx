import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FaEllipsisH,
  FaRocketchat,
  FaShareSquare,
  FaSortAmountDownAlt,
} from 'react-icons/fa';

import * as Style from './styles'; 

import TodoList from '../TodoList';

import { addTodoRequest } from '../../store/modules/todo/Todo.actions';
import { TodoItem } from '../../store/modules/todo/Todo.types';

const Todo = () => {
  const dispatch = useDispatch();

  function handleAddTodoList(todo: TodoItem) {
    dispatch(addTodoRequest(todo));
  }

  const todoList = {
    id: 1,
    name: 'Alguma coisa',
    comments: 3,
    current_tasks: 3,
    total_tasks: 6
  }

  return (
    <Style.Container>
      <Style.Header>
        <h1>Martonis</h1>

        <Style.HeaderActions>
          <button type="button">
            <FaRocketchat />
            <span>Comments</span>
          </button>
          <button type="button">
            <FaShareSquare />
            <span>Share</span>
          </button>
          <button type="button">
            <FaSortAmountDownAlt />
            <span>Sort</span>
          </button>
          <button type="button">
            <FaEllipsisH />
            <span>Sort</span>
          </button>
        </Style.HeaderActions>
      </Style.Header>

      <TodoList />

      <button type="button" onClick={() => handleAddTodoList(todoList)}><h1>teste</h1></button>
    </Style.Container>
  );
}

export default Todo;

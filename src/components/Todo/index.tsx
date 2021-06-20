import React from 'react';
import {
  FaEllipsisH,
  FaRocketchat,
  FaShareSquare,
  FaSortAmountDownAlt,
  FaAngleDown,
  FaCodeBranch
} from 'react-icons/fa';

import * as Style from './styles';

const Todo = () => {
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

      <Style.TodoList>
        <button type="button">
          <FaAngleDown />
        </button>

        <Style.ItemChecked htmlFor="item-1">
          <input type="checkbox" name="item-1" id="item-1" />
        </Style.ItemChecked>
        
        <Style.ItemContent>
          <p>Alert Page</p>
          <Style.ContentAction>
            <button type="button">
              <FaCodeBranch />
              0/2
            </button>
            <button type="button">
              <FaRocketchat />
              4
            </button>
          </Style.ContentAction>
        </Style.ItemContent>
      </Style.TodoList>
    </Style.Container>
  );
}

export default Todo;

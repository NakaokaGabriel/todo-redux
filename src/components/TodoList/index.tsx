import React from 'react';
import { FaAngleDown, FaCodeBranch, FaRocketchat } from 'react-icons/fa';
import * as Style from './styles';

const TodoList = () => {
  return (
    <Style.Container>
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
    </Style.Container>
  );
}

export default TodoList;
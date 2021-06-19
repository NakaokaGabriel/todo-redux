import React from 'react';
import { 
  FaEllipsisH, 
  FaRocketchat, 
  FaShareSquare, 
  FaSortAmountDownAlt 
} from 'react-icons/fa';

import * as Style from './styles';

const Todo = () => {
  return (
    <Style.Container>
      <Style.Header>
        <h1>Title</h1>

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
    </Style.Container>
  );
}

export default Todo;

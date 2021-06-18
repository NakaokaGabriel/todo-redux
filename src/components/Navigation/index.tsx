import React from 'react';
import { 
  FaBars, 
  FaHome, 
  FaPlus, 
  FaSearch, 
  FaUps, 
  FaQuestion,
  FaBell
} from 'react-icons/fa';

import * as Style from './styles';

const Navigation = () => {
  return (
    <Style.Nav>
      <Style.LeftControl>
        <button type="button">
          <FaBars />
        </button>
        <button type="button">
          <FaHome />
        </button>
        
        <Style.Search htmlFor="search">
          <input type="text" name="search" id="search" />
          <FaSearch />
        </Style.Search>
      </Style.LeftControl>
      
      <Style.Menu>
        <button type="button">
          <FaPlus />
        </button>
        <button type="button">
          <FaUps />
        </button>
        <button type="button">
          <FaQuestion />
        </button>
        <button type="button">
          <FaBell />
        </button>
      </Style.Menu>
    </Style.Nav>
  );
}

export default Navigation;

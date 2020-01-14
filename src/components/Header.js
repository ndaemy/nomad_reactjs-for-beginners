import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

export default () => (
  <header>
    <Ul>
      <li>
        <Link to='/'>Movies</Link>
      </li>
      <li>
        <Link to='/tv'>TV</Link>
      </li>
      <li>
        <Link to='/search'>Search</Link>
      </li>
    </Ul>
  </header>
);

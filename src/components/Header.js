import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  width: 80px;
  border-bottom: 3px solid
    ${props => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Ul>
      <Li current={pathname === '/'}>
        <SLink to='/'>Movies</SLink>
      </Li>
      <Li current={pathname === '/tv'}>
        <SLink to='/tv'>TV</SLink>
      </Li>
      <Li current={pathname === '/search'}>
        <SLink to='/search'>Search</SLink>
      </Li>
    </Ul>
  </Header>
));

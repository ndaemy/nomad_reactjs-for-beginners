import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-top: 24px;
`;

export default function Loader() {
  return (
    <Container>
      <span role='img' aria-label='loading'>
        ⏰
      </span>
    </Container>
  );
}

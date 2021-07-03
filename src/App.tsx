import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Components/GlobalStyle';
import Movie from './Components/MovieList/MovieList.Container';
// import * as types from 'styled-components/cssprop';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 50px;
  background: #4d4c49;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Movie />
    </Container>
  );
}

export default App;

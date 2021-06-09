import React from 'react';
import styled from 'styled-components';
import * as types from 'styled-components/cssprop';

function App() {
  const Container = styled.div`
    height: 100%;
    background-color: aqua;
  `;

  return (
    <Container>
      <div className="App">Hello React!</div>
    </Container>
  );
}

export default App;

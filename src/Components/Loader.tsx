import React from 'react';
import styled from 'styled-components';

const LoaderDiv: React.FC = styled.div`
  font-weight: 500;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader: React.FC = () => <LoaderDiv>Now Loading...</LoaderDiv>;

export default Loader;

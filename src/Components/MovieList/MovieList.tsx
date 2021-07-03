import React from 'react';
import styled from 'styled-components';
import { MovieProps } from './types';

const Item: React.FC = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`;

const Image = styled.img``;

const Data = styled.div`
  display: flex;
`;

const MovieList: React.FC<MovieProps> = ({
  medium_cover_image,
  year,
  rating,
  title,
  summary,
}) => (
  <Item>
    <Data>
      <Image src={medium_cover_image} alt={title} title={title} />
      <div>{year}</div>
      <div>{rating}</div>
      <div>{title}</div>
      <div>{summary}</div>
    </Data>
  </Item>
);

export default MovieList;

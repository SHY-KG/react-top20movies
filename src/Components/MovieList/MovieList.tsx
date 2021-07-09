import React from 'react';
import styled from 'styled-components';
import { MovieProps } from './types';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  width: 550px;
  border-radius: 25px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 190px;
  height: 280px;
  margin-right: 30px;
  border-radius: 10px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  word-break: break-all;
  padding-bottom: 20px;
`;

const MovieGerensList = styled.div`
  color: grey;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const MovieGerens = styled.div`
  padding-left: 5px;
  font-size: 8px;
`;

const MovieRating = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const MovieSummary = styled.div`
  color: #455a64;
  word-break: break-all;
`;

const MovieList: React.FC<MovieProps> = ({
  medium_cover_image,
  year,
  rating,
  title,
  summary,
  genres,
}) => (
  <Item>
    <Image src={medium_cover_image} alt={title} title={title} />
    <Data>
      <MovieTitle>
        {title}({year})
      </MovieTitle>
      <MovieGerensList>
        {genres.map((genres, index) => (
          <MovieGerens key={index}>{genres}</MovieGerens>
        ))}
      </MovieGerensList>
      <MovieRating>{rating}/10.0</MovieRating>
      <MovieSummary>{summary.slice(0, 160)}...</MovieSummary>
    </Data>
  </Item>
);

export default MovieList;

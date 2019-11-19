import React, { useState, useEffect } from 'react';
import axios from "axios";
import MovieList from './MovieList';
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
  const Container = styled.section`
    height: 100%;
  `;

  const Loader = styled.div`
    font-weight: 500;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Movie = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
  `

  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const { data: { data: { movies: movieList } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    setLoading(false)
    setMovieList(movieList)
  };
  useEffect(() => {
    getMovieList()
  }, [])
  return (
    <>
      <Container>
        {loading ? (
          <Loader>
            <span className="loader__text">Now Loading..!</span>
          </Loader>
        ) : (
            <Movie>
              {movieList.map(movie => {
                return (
                  <MovieList
                    key={movie.id}
                    title={movie.title}
                    year={movie.year}
                    summary={movie.summary}
                    image={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                )
              })}
            </Movie>)
        }
      </Container>
      <GlobalStyles />
    </>
  )
}

export default App;

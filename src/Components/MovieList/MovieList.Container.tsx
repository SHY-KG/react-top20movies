import React, { useState, useEffect } from 'react';
import { getMovieList } from '../../api';
import MovieList from './MovieList';
import Loader from '../Loader';
import { IGetMovie } from './types';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  async function getList() {
    try {
      const {
        data: {
          data: { movies: movieList },
        },
      } = await getMovieList();
      setMovieList(movieList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        movieList.map((movie: IGetMovie) => (
          <MovieList key={movie.id} {...movie} />
        ))
      )}
    </>
  );
}

export default Movie;

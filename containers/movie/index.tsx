import React from 'react';
import { FeaturedMovie } from '@/components/feature-movies';
import Movies from "@/mocks/movies.json";

type TypeMovie = (typeof Movies.results[0]);
interface IProps<T> {
  movie: T;
  isCompact?: boolean;
}

const initialMovies = {
  poster_path: "",
  title: "",
  overview: "",
  id: null,
};

const MovieContainer: React.FC<IProps<TypeMovie>> = ({ movie }) => {
  return <FeaturedMovie movie={movie} isCompact={false} />;
};

export default MovieContainer
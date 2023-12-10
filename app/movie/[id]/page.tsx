import { notFound } from "next/navigation";
import React from "react";
import MovieContainer from "@/containers/movie";
import Movies  from '@/mocks/movies.json';

interface IProps {
    params: {
        id: string;
    },
    searchParams: {
        error: string;
    }
}

const delay = async (ms: number) => {
  return new Promise((resolve)=>{
    setTimeout(() => resolve(ms), ms)
  });
};

const MoviePage: React.FC<IProps> = async ({ params, searchParams  }) => {
    await delay(2000);

  const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id);
  if(!movieDetail){
    return notFound();
  };

  if(searchParams.error === 'true'){
    throw new Error("Something went wrong!");
  };

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
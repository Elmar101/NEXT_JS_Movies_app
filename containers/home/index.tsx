import React from "react";
import { FeaturedMovie } from "@/components/feature-movies";
import { Categories } from "@/components/categories";
import Movies  from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json'
import { MoviesSection } from "@/components/movies-section";

interface IProps {
  selectedCategory: {
    id: string;
    movies: typeof Movies.results
  }
}
function HomeContainer({selectedCategory}: IProps) {
  return (
    <div>
     <FeaturedMovie movie={Movies.results[0]} />
     <Categories categories={Genres.genres.slice(1, 6)} />
     {selectedCategory.movies.length ? <MoviesSection 
        title={Genres.genres.find(genre=> genre.id.toString() === selectedCategory.id)?.name ?? ''} 
        movies={selectedCategory.movies?.slice(0, 8)} /> : <></>
      }
     <MoviesSection title="Popular Films" movies={Movies.results.slice(0, 8)} />
     <MoviesSection title="Your favorites" movies={Movies.results.slice(8, 16)} />
    </div>
  );
}

export { HomeContainer };
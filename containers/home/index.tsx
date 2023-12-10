import React from "react";
import { FeaturedMovie } from "@/components/feature-movies";
import { Categories } from "@/components/categories";
import Movies  from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json'
import { MoviesSection } from "@/components/movies-section";
function HomeContainer() {
  return (
    <div>
     <FeaturedMovie movie={Movies.results[0]} />
     <Categories categories={Genres.genres.slice(1, 6)} />
     <MoviesSection title="Popular Films" movies={Movies.results.slice(0, 8)} />
     <MoviesSection title="Your favorites" movies={Movies.results.slice(8, 16)} />
    </div>
  );
}

export { HomeContainer };
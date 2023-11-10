import React from "react";
import { FeaturedMovie } from "@/components/feature-movies";
import { Categories } from "@/components/categories";
import Movies  from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json'

// import { FeaturedMovie } from "@/components/featured-movie";
// import { Categories } from "@/components/categories";
// import { MoviesSection } from "@/components/movies-section";
//  movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
function HomeContainer(/* {
  popularMovies,
  topRatedMovies,
  categories,
  selectedCategory,
} */) {
  return (
    <div>
      <FeaturedMovie
        movie={Movies.results[0]}
      />
     <Categories categories={Genres.genres.slice(1, 6)} />

      {/*{!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      /> */}
    </div>
  );
}

export { HomeContainer };
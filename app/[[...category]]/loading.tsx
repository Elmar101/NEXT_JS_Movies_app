import { CategoriesLoading } from "@/components/categories/loading";
import { FeatureMovieLoading } from "@/components/feature-movies/loading";
import { MoviesSectionLoading } from "@/components/movies-section/loading";
import React from "react";

function MovieLoading() {
  return (
    <div>
      <FeatureMovieLoading/>
      <CategoriesLoading />
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  );
}

export default MovieLoading;
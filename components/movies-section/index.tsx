import React from "react";
import Link from "next/link";
import Image from "next/image";
import Movies from '@/mocks/movies.json'

import styles from "./styles.module.css";

type TypeMovie = (typeof Movies.results)[0];
interface IProps {
 title: string;
 movies: TypeMovie[];
}

export const MoviesSection: React.FC<IProps> = ({ title, movies }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

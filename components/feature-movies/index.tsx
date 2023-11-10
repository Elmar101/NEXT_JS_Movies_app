import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";
import Movies from "@/mocks/movies.json";

type TypeMovie = (typeof Movies.results)[0];
interface IProps {
  movie: TypeMovie;
  isCompact?: boolean;
}

export const FeaturedMovie: React.FC<IProps> = ({
  movie,
  isCompact = true,
}) => {
  const { poster_path, title, overview, id } = movie ?? {
    poster_path: "",
    title: "",
    overview: "",
    id: "",
  };

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${id!}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title!}
          fill
        />
      </div>
    </div>
  );
};

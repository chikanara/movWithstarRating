import React from "react";
import MovieCard from "../MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  if (Array.isArray(movies) && movies.length) {
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard film={movie} key={movie.id} />
        ))}
      </div>
    );
  }
  else {
      return <h3 className="movie-list">No Result 🤪 </h3>
  }
};

export default MovieList;

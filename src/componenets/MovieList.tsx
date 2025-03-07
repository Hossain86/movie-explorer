import React, { useEffect } from "react";
import movieData from "../data/movieData"; // Importing the movieData

const MovieList: React.FC = () => {
  // Filtering movies that belong to Animation or Sci-Fi
  const filteredMovies = movieData.filter((movie) =>
    movie.Genre.includes("Animation") 
  // || movie.Genre.includes("Sci-Fi")
  );

  useEffect(() => {
    // Log only filtered movie titles
    filteredMovies.forEach((movie) => {
      console.log(movie.Title);
    });
  }, [filteredMovies]);

  return (
    <div>
      <h1>Animation & Sci-Fi Movies</h1>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

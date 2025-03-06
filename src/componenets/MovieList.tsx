// MovieList.tsx
import React, { useEffect } from "react";
import  movieData  from "../data/movieData"; // Importing the movieData from movieData.ts

const MovieList: React.FC = () => {
  useEffect(() => {
    // Loop over the movieData and log the titles to the console
    movieData.forEach((movie) => {
      console.log(movie.Title);
    });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movieData.map((movie, index) => (
          <li key={index}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

// MovieSearchSort.tsx
import React, { useState, useEffect } from "react";
import "../styles/moviesearchsort.css";

interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface MovieSearchSortProps {
  movies: Movie[];
  onSortedMoviesChange: (movies: Movie[]) => void;
}

const MovieSearchSort: React.FC<MovieSearchSortProps> = ({
  movies,
  onSortedMoviesChange,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Release Date");

  // Filter movies based on search and dropdowns
  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.Title.toLowerCase().includes(searchQuery);
    const genreMatch =
      selectedGenre === "" ||
      movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase());
    const countryMatch =
      selectedCountry === "" ||
      movie.Country.toLowerCase().includes(selectedCountry.toLowerCase());
    return titleMatch && genreMatch && countryMatch;
  });

  // Sort filtered movies based on the selected sort option
  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortBy === "Release Date") {
      const dateA = new Date(a.Released);
      const dateB = new Date(b.Released);
      return dateA > dateB ? -1 : 1;
    } else if (sortBy === "IMDb Rating") {
      return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
    }
    return 0;
  });

  // Whenever sortedMovies changes, call the callback prop
  useEffect(() => {
    onSortedMoviesChange(sortedMovies);
  }, [sortedMovies, onSortedMoviesChange]);

  // Extract unique genres and countries for the dropdowns
  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.Genre.split(", ")))
  );
  const countries = Array.from(new Set(movies.map((movie) => movie.Country)));

  return (
    <div className="search-sort-bar mb-4 w-100">
      <div className="movie-sort-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search by title"
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />

      <select className="form-select" onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre, idx) => (
          <option key={idx} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select className="form-select" onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">All Countries</option>
        {countries.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select className="form-select" onChange={(e) => setSortBy(e.target.value)}>
        <option value="Release Date">Sort by Release Date</option>
        <option value="IMDb Rating">Sort by IMDb Rating</option>
      </select>
    </div>
    </div>
  );
};

export default MovieSearchSort;

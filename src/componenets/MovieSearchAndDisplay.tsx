// MovieSearchAndDisplay.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/movieBox.css";
import "../styles/moviesearchsort.css";

interface Movie {
  id: number;
  Title: string;
  Year: string;
  Poster: string;
  Genre: string;
  Runtime: string;
  imdbRating: string;
  Type: string;
  Rated: string;
  Country: string;
  Released: string;
}

const MovieSearchAndDisplay = ({ movies }: { movies: Movie[] }) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Release Date");
  const navigate = useNavigate();

  useEffect(() => {
    let updatedMovies = movies.filter((movie) => {
      const titleMatch = movie.Title.toLowerCase().includes(searchQuery);
      const genreMatch = selectedGenre === "" || movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase());
      const countryMatch = selectedCountry === "" || movie.Country.toLowerCase().includes(selectedCountry.toLowerCase());
      return titleMatch && genreMatch && countryMatch;
    });

    updatedMovies = updatedMovies.sort((a, b) => {
      if (sortBy === "Release Date") {
        return new Date(b.Released) > new Date(a.Released) ? 1 : -1;
      } else if (sortBy === "IMDb Rating") {
        return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
      }
      return 0;
    });

    setFilteredMovies(updatedMovies);
  }, [searchQuery, selectedGenre, selectedCountry, sortBy, movies]);

  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const genres = Array.from(new Set(movies.flatMap((movie) => movie.Genre.split(", "))));
  const countries = Array.from(new Set(movies.map((movie) => movie.Country)));

  return (
    <div>
      {/* Search & Filter Section */}
      <div className="search-sort-bar mt-4 w-100">
        <input type="text" className="form-control" placeholder="Search by title" onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
        <select className="form-select" onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres.map((genre, idx) => (
            <option key={idx} value={genre}>{genre}</option>
          ))}
        </select>
        <select className="form-select" onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">All Countries</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>{country}</option>
          ))}
        </select>
        <select className="form-select" onChange={(e) => setSortBy(e.target.value)}>
          <option value="Release Date">Sort by Release Date</option>
          <option value="IMDb Rating">Sort by IMDb Rating</option>
        </select>
      </div>

      {/* Movie Display Section */}
      <div className="movie-box-container d-flex justify-content-around flex-wrap">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-box mb-4" onClick={() => handleMovieClick(movie.id)}>
            <div className="poster-container position-relative sticky loaded">
              <span className="rated-label">{movie.Rated}</span>
              <img src={movie.Poster} alt={movie.Title} className="card-img-top all-responive-img" style={{ cursor: "pointer" }} />
            </div>
            <div className="card-body">
              <h5 className="all-h-text card-title pt-3" style={{ cursor: "pointer" }}>{movie.Title}</h5>
              <p className="all-p-text">{movie.Genre}</p>
              <p className="all-p-text">IMDb: {movie.imdbRating}</p>
              <small className="d-flex justify-content-between align-items-center w-100 pe-1 py-2">
          <button className="btn-grad-blue-ash btn btn-sm px-1 py-0 text-white" style={{ fontSize: "clamp(10px, 1.5vw, 14px)" }}>
            {movie.Year}
          </button>
          <button className="btn btn-sm border rounded-3 px-1 py-0 text-white" style={{ backgroundColor: "#ff5733", fontSize: "clamp(10px, 1.5vw, 14px)" }}>
            {movie.Runtime}
          </button>
          <button className="btn btn-sm border rounded-3 px-1 py-0 text-uppercase text-white" style={{ backgroundColor: "#007bff", fontSize: "clamp(10px, 1.5vw, 14px)" }}>
            {movie.Type}
          </button>
        </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearchAndDisplay;

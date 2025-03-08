// MovieSearchAndDisplay.tsx
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/movieBox.css";
import "../styles/moviesearchsort.css";
import { Movie, processMovies } from "./UniversalSearchAndSort";

const MovieSearchAndDisplay = ({ movies }: { movies: Movie[] }) => {
  const location = useLocation(); // Get the location object to access passed state
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [sortBy, setSortBy] = useState<keyof Movie>("imdbRating"); // 🔥 Default to IMDb rating
  const navigate = useNavigate();

  const memoizedMovies = useMemo(() => movies as Movie[], [movies]);
   // Access filteredMovies from the location state
   useEffect(() => {
    if (location.state && location.state.filteredMovies) {
      setFilteredMovies(location.state.filteredMovies);
    } else {
      setFilteredMovies(movies); // Default to all movies if no filtered state is passed
    }
  }, [location.state, movies]);

  useEffect(() => {
    const sortedMovies = processMovies(
      memoizedMovies,
      searchQuery,
      selectedGenre,
      selectedCountry,
      sortBy,
      "desc" // Default sorting order
    );
    setFilteredMovies(sortedMovies);
  }, [searchQuery, selectedGenre, selectedCountry, sortBy, memoizedMovies]);

  useEffect(() => {
    // 🚀 Initial sorting by IMDb rating when the page loads
    setFilteredMovies(processMovies(memoizedMovies, "", "", "", "imdbRating", "desc"));
  }, [memoizedMovies]);

  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedGenre("");
    setSelectedCountry("");
    setSortBy("imdbRating"); // 🔥 Reset to IMDb rating sorting
    setFilteredMovies(processMovies(memoizedMovies, "", "", "", "imdbRating", "desc"));
  };

  const genres = Array.from(new Set(movies.flatMap((movie) => movie.Genre.split(", "))));
  const countries = Array.from(new Set(movies.map((movie) => movie.Country)));

  return (
    <div>
      {/* Search & Filter Section */}
      <div className="d-flex gap-1 mt-4 justify-content-center align-items-center">
      <img className="h-7 gif-image" src="https://media.giphy.com/media/rPUKu805RPmCViz5EC/giphy.gif?cid=790b7611oyq49vab4bx4qiirtkpbcu9yaag5oaadlgkktyh3&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="Logo" />
      <h2>Discover Your Favorite Movies & Series</h2>
      </div>
      <div className="search-sort-bar  w-100 d-flex gap-2">
        
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <select className="form-select" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres.map((genre, idx) => (
            <option key={idx} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select className="form-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">All Countries</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          className="form-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value === "Release Date" ? "Released" : "imdbRating")}
        >
          <option value="imdbRating">Sort by IMDb Rating</option>
          <option value="Released">Sort by Release Date</option>
        </select>
        {/* Refresh Button */}
        <button className="btn-grad-orange btn" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
      

      {/* Movie Display Section */}
      <div className="movie-box-container d-flex justify-content-around flex-wrap">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-box mb-4" onClick={() => handleMovieClick(movie.id)}>
            <div className="poster-container position-relative sticky loaded">
              <span className="rated-label">{movie.Rated}</span>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="card-img-top all-responive-img"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="card-body">
              <h5 className="all-h-text card-title pt-3" style={{ cursor: "pointer" }}>
                {movie.Title}
              </h5>
              <p className="all-p-text">{movie.Genre}</p>
              <p className="all-p-text">IMDb: {movie.imdbRating}</p>
              <small className="d-flex justify-content-between align-items-center w-100 pe-1 py-2">
                <button className="btn-grad-blue-ash btn btn-sm px-1 py-0 text-white">
                  {movie.Year}
                </button>
                <button className="btn btn-sm border rounded-3 px-1 py-0 text-white" style={{ backgroundColor: "#ff5733" }}>
                  {movie.Runtime}
                </button>
                <button className="btn btn-sm border rounded-3 px-1 py-0 text-uppercase text-white" style={{ backgroundColor: "#007bff" }}>
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

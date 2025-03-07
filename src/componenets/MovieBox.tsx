import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/movieBox.css";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Genre: string;
  Runtime: string;
  imdbRating: string;
  Type: string;
  Rated: string;
}

const MovieBox = ({ movie }: { movie: Movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMovieClick = () => {
    const encodedTitle = encodeURIComponent(movie.Title);
    navigate(`/movie/${encodedTitle}`); // Smooth navigation without reload
  };

  return (
    <div className="movie-box mb-4">
      <div className={`poster-container position-relative sticky ${isLoaded ? "loaded" : ""}`}>
        {/* Rated Label */}
        <span className="rated-label">{movie.Rated}</span>

        <img
          onClick={handleMovieClick} // Navigate to movie details
          src={movie.Poster}
          alt={movie.Title}
          className="card-img-top all-responive-img"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="card-body">
        <h5 className="all-h-text card-title pt-3" style={{ cursor: "pointer" }} onClick={handleMovieClick}>
          {movie.Title}
        </h5>
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
  );
};

export default MovieBox;

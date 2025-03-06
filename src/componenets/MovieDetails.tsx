import { useParams } from "react-router-dom"; // Import useParams to get the route parameter
import { combineMovieDataWithTrailers } from "../data/combineMovies"; // Import the function to combine data
import "../styles/movieDetails.css"; // Styles for the details page
import { useEffect } from "react";

const MovieDetails = () => {
  const { title } = useParams();
  const combinedMovies = combineMovieDataWithTrailers();
  const movie = combinedMovies.find((movie) => movie.Title === title);
  if (!movie) {
    return <div>Movie not found!</div>;
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="movie-details">
      <div className="upper-part">
        <div className="left-part">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid all-responive-img"
          />
        </div>
        <div className="right-part">
          <h1>{movie.Title}</h1>
          <small className="d-flex flex-wrap align-items-center w-100 ps-2 pe-1 py-2">
          <button
            className=" mt-1 btn-grad-red btn btn-sm py-0 me-2 text-white"
            style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
           IMDB : {movie.imdbRating}
          </button>
          <button
            className=" mt-1 btn-grad-blue-ash btn btn-sm py-0 me-2 text-white"
            style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            {movie.Year}
          </button>
          <button
            className=" mt-1 btn-grad-orange btn btn-sm  rounded-3 px-1 py-0 ms-2 me-2 text-white"
            style={{ backgroundColor: "#ff5733", fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            {movie.Runtime}
          </button>
          <button
            className=" mt-1 btn btn-sm  rounded-3 px-1 py-0 ms-2 me-2 text-uppercase text-white"
            style={{ backgroundColor: "#007bff", fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            {movie.Type}
          </button>
          <button
            className=" mt-1 btn-grad-black btn btn-sm  rounded-3 px-1 py-0 ms-2 me-2 text-uppercase text-white"
            style={{ backgroundColor: "#007bff", fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            {movie.Rated}
          </button>
          <button
            className=" mt-1 btn-grad-blue2 btn btn-sm  rounded-3 px-1 py-0 ms-2 me-2 text-uppercase text-white"
            style={{ backgroundColor: "#007bff", fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            {movie.Language}
          </button>
          </small>
          
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Country:</strong> {movie.Country}
          </p>
          <p>
            <strong>Awards:</strong> {movie.Awards}
          </p>
        </div>
      </div>
      <div className="lower-part">
        <div className="left-part2">
          <h5>Watch Trailer✨</h5>
        {/* Display the trailer if available */}
        {movie.Trailer && (
          <iframe
            width="560"
            height="315"
            src={movie.Trailer}
            title={movie.Title}
            className="movie-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
</div>
<div className="right-part2">
        {/* Ratings */}
        <h5>Ratings:</h5>
        <div className="ratings d-flex align-items-center w-100 ps-2 pe-1 py-2">
          {movie.Ratings.map((rating, index) => (
            <p key={index}>
              <button
            className=" mt-1 btn-grad-red btn btn-sm py-0 me-2 text-white"
            style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
           {rating.Source} : {rating.Value}
          </button>
            </p>
          ))}
        </div>
          <small className="d-flex flex-wrap align-items-center w-100 ps-2 pe-1 py-2">
          <button
            className=" mt-1 btn-grad-blue-ash btn btn-sm py-0 me-2 text-white"
            style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            Metascore : {movie.Metascore}
          </button>
          </small>
        <p>
          <strong>IMDb Votes:</strong> {movie.imdbVotes}
        </p>
        <p>
          <strong>DVD Release:</strong> {movie.DVD}
        </p>
        <button
            className=" mt-1 btn-grad-black btn btn-sm py-0 me-2 text-white"
            style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            BoxOffice : {movie.BoxOffice}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

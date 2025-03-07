import { movieData } from "./movieData"; // Assuming movieData is imported from the correct file
import { movieTrailers, MovieTrailer } from "./movieTrailers"; // Assuming MovieTrailer is typed correctly

// Movie interface updated to allow Trailer to be a string or null
interface Movie {
  id: any;
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
  Trailer: string | null; // Allow null for the Trailer field
}

export const combineMovieDataWithTrailers = (): Movie[] => {
  // For each movie, try to find the matching trailer by Title
  return movieData.map((movie) => {
    // Find trailer by Title (or by a unique ID if available)
    const trailerData: MovieTrailer | undefined = movieTrailers.find(
      (trailer) => trailer.Title === movie.Title
    );

    // Return a new movie object with an extra Trailer property if found
    return { ...movie, Trailer: trailerData ? trailerData.Trailer : null };
  });
};

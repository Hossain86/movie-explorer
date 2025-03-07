import { movieData } from "./movieData";
import { movieTrailers, MovieTrailer } from "./movieTrailers";

interface Movie {
  id: number;
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
  Trailer?: string | null; // Optional Trailer
}

export const combineMovieDataWithTrailers = (): Movie[] => {
  return (movieData || []).map((movie: Movie) => {
    const trailerData: MovieTrailer | undefined = movieTrailers.find(
      (trailer) => trailer.Title === movie.Title
    );

    return { ...movie, Trailer: trailerData?.Trailer || null };
  });
};

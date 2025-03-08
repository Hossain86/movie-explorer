// UniversalSearchAndSort.tsx

// Define the Movie interface based on your movieData structure.
export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string; // Comma separated list (e.g., "Action, Adventure")
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string; // Comma separated if needed
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
  id: number;
}

// Search movies by name (Title)
export const searchMovies = (movies: Movie[], query: string): Movie[] => {
  if (!query.trim()) return movies;
  const lowerQuery = query.toLowerCase();
  return movies.filter((movie) =>
    movie.Title.toLowerCase().includes(lowerQuery)
  );
};

// Filter movies by genre.
// Assumes movie.Genre is a comma-separated string.
export const filterByGenre = (movies: Movie[], genre: string): Movie[] => {
  if (!genre.trim()) return movies;
  const lowerGenre = genre.toLowerCase();
  return movies.filter((movie) =>
    movie.Genre.toLowerCase()
      .split(',')
      .map((g) => g.trim())
      .includes(lowerGenre)
  );
};

// Filter movies by country.
// Assumes movie.Country is a comma-separated string.
export const filterByCountry = (movies: Movie[], country: string): Movie[] => {
  if (!country.trim()) return movies;
  const lowerCountry = country.toLowerCase();
  return movies.filter((movie) =>
    movie.Country.toLowerCase()
      .split(',')
      .map((c) => c.trim())
      .includes(lowerCountry)
  );
};

// Sort movies based on a given key (e.g., 'imdbRating', 'Genre', 'Country')
// The sortBy parameter must be one of the keys of Movie.
export const sortMovies = (
  movies: Movie[],
  sortBy: keyof Movie,
  order: 'asc' | 'desc' = 'asc'
): Movie[] => {
  return [...movies].sort((a, b) => {
    let valueA: any = a[sortBy];
    let valueB: any = b[sortBy];

    // Special handling for numeric values stored as strings (e.g., imdbRating)
    if (sortBy === 'imdbRating') {
      const numA = parseFloat(valueA) || 0;
      const numB = parseFloat(valueB) || 0;
      return order === 'asc' ? numA - numB : numB - numA;
    }

    // If sorting by Year, convert to numbers
    if (sortBy === 'Year') {
      const numA = parseInt(valueA, 10) || 0;
      const numB = parseInt(valueB, 10) || 0;
      return order === 'asc' ? numA - numB : numB - numA;
    }

    // For string-based sorting
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });
};

// A combined processing function: apply search, filtering, and sorting.
// This function can be used if you need to process movies with multiple criteria.
export const processMovies = (
  movies: Movie[],
  searchQuery: string,
  genreFilter: string,
  countryFilter: string,
  sortBy: keyof Movie,
  order: 'asc' | 'desc' = 'asc'
): Movie[] => {
  let processedMovies = movies;

  if (searchQuery) {
    processedMovies = searchMovies(processedMovies, searchQuery);
  }
  if (genreFilter) {
    processedMovies = filterByGenre(processedMovies, genreFilter);
  }
  if (countryFilter) {
    processedMovies = filterByCountry(processedMovies, countryFilter);
  }
  if (sortBy) {
    processedMovies = sortMovies(processedMovies, sortBy, order);
  }

  return processedMovies;
};
// Feature movies based on IMDb rating.
// This will return the top 50 movies sorted by imdbRating in descending order.
export const featureMovies = (movies: Movie[]): Movie[] => {
  // Sort the movies by imdbRating in descending order and take the top 50
  return sortMovies(movies, 'imdbRating', 'desc').slice(0, 50);
};

// App.tsx
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import { ThemeProvider, useTheme } from "./layouts/ThemeContext";
import HomePage from "./componenets/HomePage";
import movieData from "./data/movieData";
import MovieBox from "./componenets/MovieBox"; // Assuming this path for MovieBox
import MovieDetails from "./componenets/MovieDetails"; // Assuming this path for MovieDetails
import MovieList from "./componenets/MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import router components
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieSearchSort from "./componenets/MovieSearchSort";
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <MainApp />
      </ThemeProvider>
    </Router>
  );
}

const MainApp = () => {
  const { isDarkMode } = useTheme();
  const [sortedMovies, setSortedMovies] = useState(movieData);

  // Ensure sortedMovies is initialized with all movies
  useEffect(() => {
    setSortedMovies(movieData);
  }, []); // This effect runs once when the component is mounted

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Sidebar />
      <main
        className={`text-align-center pt-5 ${isDarkMode ? "dark-mode" : "light-mode"}`}
      >
        <Routes>
          {/* HomePage route */}
          <Route path="/" element={<HomePage />} />

          {/* MovieList route */}
          <Route path="/movie-list" element={<MovieList />} />

          {/* Movie route with search/sort controls and movie boxes */}
          <Route
            path="/movie"
            element={
              <div className="movie-box-container d-flex justify-content-around flex-wrap">
                <MovieSearchSort movies={movieData} onSortedMoviesChange={setSortedMovies} />
                {sortedMovies.map((movie, index) => (
                  <MovieBox key={index} movie={movie} />
                ))}
              </div>
            }
          />

          {/* MovieDetails route using imdbID as a parameter */}
          <Route path="/movie/:title" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
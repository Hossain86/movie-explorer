import "./App.css";
import Sidebar from "./layouts/Sidebar";
import { ThemeProvider, useTheme } from "./layouts/ThemeContext";
import HomePage from "./componenets/HomePage";
import movieData from "./data/movieData";
import MovieDetails from "./componenets/MovieDetails"; // Assuming this path for MovieDetails
import MovieList from "./componenets/MovieList";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieSearchAndDisplay from "./componenets/MovieSearchAndDisplay";
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
            element={<MovieSearchAndDisplay movies={movieData} />}
          />

          {/* MovieDetails route using id as a parameter */}
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

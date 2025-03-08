import "./App.css";
import Sidebar from "./layouts/Sidebar";
import { ThemeProvider, useTheme } from "./layouts/ThemeContext";
import HomePage from "./componenets/HomePage";
import movieData from "./data/movieData";
import MovieDetails from "./componenets/MovieDetails"; // Assuming this path for MovieDetails
import MovieList from "./componenets/MovieList";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [, setSortedMovies] = useState(movieData);

  // Ensure sortedMovies is initialized with all movies
  useEffect(() => {
    setSortedMovies(movieData);
  }, []); // This effect runs once when the component is mounted

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Sidebar movies={movieData} />

      <main
        className={`text-align-center pt-5 ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <Routes>
          {/* HomePage route */}
          <Route path="/" element={<HomePage  movies={movieData} />} />

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

/*
    A small details about my MovieZone react +typescript project:
✅App.tsx: All react component called here
✅./layouts/Sidebar.tsx: A sidebar with navbar for all pages
✅./layouts/ThemeContext.tsx: A tsx file for theme change in the website
✅./componenets/HomePage.tsx: A homepage [route path =/] that contsilns small details about the website with a serch option
✅./componenets/MovieSearchAndDisplay.tsx: A page [route path =/movie] with a search and sorting option on the top and then the movie list with a small deatils for every movies. Here Initial display all movies present in the mpvieData.ts file. User can search , sort by genre, rating.
✅./componenets/MovieDetails.tsz: A page[route path =/movie/:id] where the details info of movie displayed
✅./componenets/MovieList.tsx: A simple file [Route path="/movie-list] where all movie name is displayed
✅./data/movieData.ts, ./data/MovieTrailers.ts, ./data/combineMovies.ts[aomibnation of movieData.ts, MovieTrailers.ts file

*/

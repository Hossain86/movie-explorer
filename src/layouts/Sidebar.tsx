import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import { Movie, featureMovies } from "../componenets/UniversalSearchAndSort";

interface SidebarProps {
  movies: Movie[];
}

const Sidebar: React.FC<SidebarProps> = ({ movies }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [, setFilteredMovies] = useState<Movie[]>(movies);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = (e: any) => {
    if (!e.target.closest(".sidebar") && !e.target.closest(".menu-btn")) {
      setIsOpen(false);
    }
  };

  const filterByGenre = (genre: string) => {
    const filtered = movies.filter((movie) =>
      movie.Genre.toLowerCase().includes(genre.toLowerCase())
    );
    setFilteredMovies(filtered);
    navigate("/movie", { state: { filteredMovies: filtered } });
  };

  const filterByType = (type: string) => {
    const filtered = movies.filter((movie) =>
      movie.Type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredMovies(filtered);
    navigate("/movie", { state: { filteredMovies: filtered } });
  };

  const filterByFeatured = () => {
    const topMovies = featureMovies(movies);
    setFilteredMovies(topMovies);
    navigate("/movie", { state: { filteredMovies: topMovies } });
  };

  return (
    <div className="position-relative" onClick={closeSidebar}>
      <div className="btn-grad-blue-ash bg-primary text-white d-flex align-items-center p-3 shadow position-fixed top-element w-100">
        <i
          className="fa fa-bars menu-btn cursor-pointer fs-4 me-3 position-relative"
          onClick={toggleSidebar}
          style={{ zIndex: 1100 }}
        ></i>
        <img
          className="h-7 img-fluid custom-logo cursor-pointer"
          src="https://media.giphy.com/media/Glf4jsOxuHFL2aUojg/giphy.gif?cid=ecf05e47hxlg03d8pzzm23c2glv0cdtm1ptvpeoj49nhuixm&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <h5
          className="all-h-text ms-1 fs-6 cursor-pointer"
          onClick={() => navigate("/movie")}
        >
          MOVIE<span className="text-warning">ZONE</span>
        </h5>

        <button
          className="all-p-text btn-grad-blue btn btn-sm btn-outline-light ms-auto fs-10"
          onClick={toggleTheme}
          style={{ zIndex: 1100 }}
        >
          <b>{isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</b>
        </button>
      </div>

      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav
        className={`sidebar position-fixed top-0 start-0 h-100 bg-white shadow p-3 transition`}
        style={{
          width: "250px",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1050,
        }}
      >
        <div className="d-flex align-items-center border-bottom pb-2">
          <img
            className="h-7 img-fluid custom-logo cursor-pointer"
            src="https://media.giphy.com/media/Glf4jsOxuHFL2aUojg/giphy.gif?cid=ecf05e47hxlg03d8pzzm23c2glv0cdtm1ptvpeoj49nhuixm&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            alt="Logo"
          />
          <strong
            className="ms-2 fs-4 text-warning cursor-pointer"
            onClick={() => navigate("/")}
          >
            MOVIE<span className="text-secondary">ZONE</span>
          </strong>
          <p
            className="cursor-pointer fa fa-times ms-auto fs-4 "
            onClick={() => setIsOpen(false)}
          >
            ✖️
          </p>
        </div>
        <ul className="list-unstyled mt-3">
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => navigate("/movie")}
          >
            <i className="fa fa-home me-2"></i> Home
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByType("movie")}
          >
            <i className="fa fa-film me-2"></i> Movies
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByType("series")}
          >
            <i className="fa fa-tv me-2"></i> Series
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("Animation")}
          >
            <i className="fa fa-heart me-2"></i> Favourites
          </li>
          <li className="p-2 text-uppercase small text-muted">
            Popular Genres
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("Action")}
          >
            <i className="fa fa-bolt me-2"></i> Action
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("Adventure")}
          >
            <i className="fa fa-cogs me-2"></i> Adventure
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("Animation")}
          >
            <i className="fa fa-theater-masks me-2"></i> Anime
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("Thriller")}
          >
            <i className="fa fa-shield-alt me-2"></i> Thriller
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("Comedy")}
          >
            <i className="fa fa-laugh me-2"></i> Comedy
          </li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer"
            onClick={() => filterByGenre("War")}
          >
            <i className="fa fa-heart me-2"></i> War
          </li>
          <li className="p-2 text-uppercase small text-muted">Extra</li>
          <li
            className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer "
            onClick={() => filterByFeatured()}
          >
            <i className="fa fa-star me-2"></i> Featured Movies
          </li>
          <li className="p-2 d-flex align-items-center text-dark hover-bg-light cursor-pointer">
            <i className="fa fa-eye me-2"></i> My Watchlist
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

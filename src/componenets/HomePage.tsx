import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/homePage.css";
import { Movie, searchMovies } from "./UniversalSearchAndSort";

interface HomePageProps {
  movies: Movie[];
}
interface HomePageProps {
  movies: Movie[];
}

const HomePage: React.FC<HomePageProps> = ({ movies }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    const filteredMovies = searchMovies(movies, searchQuery);
    navigate("/movie", { state: { filteredMovies } });
  };

  return (
    <div className="container pt-5">
      <h2 className="text-grad-blue fw-bold text-center">
        🎬 Welcome to MovieZone – Your Ultimate Movie Hub! 🍿
      </h2>
      <p className="text-center">
        Sorry this is not a streaming site 🥲 But you will find your favorite movie info here 😎 <p onClick={() => navigate("/movie-list")}>All movie</p>
      </p>
      

      <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
      <input
          type="text"
          className="form-control w-50 mr-2"
          placeholder="Search Movies ...🔎"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <button
          className="btn btn-primary btn-grad-blue"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="d-flex justify-content-center gap-4 mb-4">
        <button className="btn btn-info btn-grad-blue" onClick={() => navigate("/movie")}>
          Go to HomePage
        </button>
      </div>

      <div className="lower-part row align-items-center">
        <div className="left-part">
          <img
            className="gif-image2"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlscDljMDZtamZvemRpb3E3aTdncmM3ZmlueWdxc2M5NDA3Z3gzNCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2eKfq00HWfb91flICf/giphy.gif"
            alt="MovieZone GIF"
          />
        </div>

        <div className="right-part">
          <p>
            Are you a movie lover searching for the best place to explore,
            discover, and keep track of your favorite films? MovieZone is here
            to enhance your movie-watching experience with an intuitive and
            feature-rich platform.
          </p>

          <h4 className="fw-semibold mt-4">🌟 What is MovieZone?</h4>
          <ul className="list-group list-group-flush list-item">
            <li>✔ Discover trending, top-rated, and upcoming movies 🎥</li>
            <li>✔ Search for any movie with detailed information 🔍</li>
            <li>✔ Get Movie Details – cast, ratings, genres, release dates, and more 📝</li>
            <li>✔ Save Your Favorites – create a personalized watchlist ❤️</li>
            <li>✔ Explore Recommendations based on your preferences 🤩</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import { useNavigate } from "react-router-dom";
import "../styles/homePage.css"
//write tsx code for a movie website home page
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container pt-5">
      <h2 className="text-grad-blue fw-bold text-center">
            🎬 Welcome to MovieZone – Your Ultimate Movie Hub! 🍿
          </h2>
      <p className="text-center">
        Here you can find the latest movies, series, and TV shows.
      </p>

      <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
        <input
          type="text"
          className="form-control w-50 mr-2"
          placeholder="Search Movies ...🔎"
        />
        <button className="btn btn-primary btn-grad-blue">Search</button>
      </div>

      <div className="d-flex justify-content-center gap-4 mb-4">
        {/* <button
          className="btn btn-info btn-grad-blue mr-2"
          onClick={() => navigate("/movie")}
        >
          Sort by Popularity
        </button>
        <button
          className="btn btn-info btn-grad-blue"
          onClick={() => navigate("/movie-list")}
        >
          See Movie List
        </button> */}
       <button
        className="btn btn-info btn-grad-blue"
        onClick={() => navigate("/movie")}
      >
        Go to HomePage
      </button> 
      </div>
      
      <div className="lower-part row align-items-center">
        {/* Image Section */}
        <div className="left-part">
          <img
            className="gif-image2"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlscDljMDZtamZvemRpb3E3aTdncmM3ZmlueWdxc2M5NDA3Z3gzNCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2eKfq00HWfb91flICf/giphy.gif"
            alt="MovieZone GIF"
          />
        </div>

        {/* Text Content Section */}
        <div className="right-part">
          <p className="text-muted">
            Are you a movie lover searching for the best place to explore,
            discover, and keep track of your favorite films? MovieZone is here
            to enhance your movie-watching experience with an intuitive and
            feature-rich platform.
          </p>

          <h4 className="text-dark fw-semibold mt-4">🌟 What is MovieZone?</h4>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">✔ Discover trending, top-rated, and upcoming movies 🎥</li>
            <li className="list-group-item">✔ Search for any movie with detailed information 🔍</li>
            <li className="list-group-item">✔ Get Movie Details – cast, ratings, genres, release dates, and more 📝</li>
            <li className="list-group-item">✔ Save Your Favorites – create a personalized watchlist ❤️</li>
            <li className="list-group-item">✔ Explore Recommendations based on your preferences 🤩</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import { useNavigate } from "react-router-dom";
//write tsx code for a movie website home page
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container pt-5">
      <h1 className="text-center">Welcome to Our Movie Website</h1>
      <p className="text-center">
        Here you can find the latest movies, series, and TV shows.
      </p>

      <div className="d-flex justify-content-center align-items-center mb-4">
        <input
          type="text"
          className="form-control w-50 mr-2"
          placeholder="Search Movies ...🔎"
        />
        <button className="btn btn-primary btn-grad-light-blue">Search</button>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-info btn-grad-light-blue mr-2">
          Sort by Popularity
        </button>
        <button className="btn btn-info btn-grad-light-blue">
          Sort by Release Date
        </button>
      </div>

      <div className="text-center">
        <button
          className="btn btn-warning btn-grad-orange"
          onClick={() => navigate("/movie-list")}
        >
          See Movie List
        </button>
      </div>
      <div className="text-center">
        <button
          className="btn btn-warning btn-grad-orange"
          onClick={() => navigate("/movie")}
        >
          Go to HomePage
        </button>
      </div>
    </div>
  );
}

export default HomePage;

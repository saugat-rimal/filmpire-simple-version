import { useEffect, useState } from "react";
import "./assets/App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard";

// Here is your key: 84a26a5
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=84a26a5

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=84a26a5";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for a movies..."
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search-icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

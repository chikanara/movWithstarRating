import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { moviesData } from "./data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchValue, setSearchValue] = useState("");
  const [searchRate, setSearchRate] = useState(1);
  const handleChange = (e) => setSearchValue(e.target.value);
  const handleSearchRate = (newRate) => setSearchRate(newRate);
  const handleSubmit = (film) => {
    setMovies([...movies, film]);
  };

  return (
    <div>
      <Search
        searchValue={searchValue}
        handleChange={handleChange}
        handleSearchRate={handleSearchRate}
        searchRate={searchRate}
      />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= searchRate
        )}
      />
      <AddMovie handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;

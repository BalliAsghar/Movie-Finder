import React, { useState } from "react";
import Header from "./components/Header";
import Poster from "./components/Poster";
function App() {
  const API_KEY = "Your API KEY";
  const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
  const [movies, setMovies] = useState();
  const handleInput = async (input) => {
    try {
      const response = await fetch(`${SearchUrl}=${input}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header handleInput={handleInput} />
      <Poster movies={movies} />
    </div>
  );
}

export default App;

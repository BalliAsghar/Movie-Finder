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
      const { results } = data;
      const ids = results.map((movie) => movie.id);
      // loop through ids and get the movie details for each id in the array of ids and store them in setMovies
      const movies = await Promise.all(
        ids.map(async (id) => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
          const data = await response.json();
          return data;
        })
      );
      setMovies(movies);
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

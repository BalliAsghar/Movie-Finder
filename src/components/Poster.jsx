import React from "react";
const Poster = ({ movies }) => {
  if (movies !== undefined) {
    return (
      <div className="min-h-screen grid place-items-center font-mono bg-gray-900 gap-9">
        {movies.map((movie) => (
          <div className="rounded-md bg-gray-800 shadow-lg" key={movie.id}>
            <div className="md:flex px-4 leading-none max-w-4xl">
              <div className="flex-none ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="pic"
                  className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
                />
              </div>
              <div className="flex-col text-gray-300">
                <p className="pt-4 text-2xl font-bold">
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </p>
                <hr className="hr-text" data-content={movie.tagline} />
                <div className="text-md flex justify-between px-4 my-2">
                  <span className="font-bold">{movie.runtime}m</span>
                  <span className="font-bold" />
                </div>
                <p className="hidden md:block px-4 my-4 text-sm text-left">{movie.overview} </p>
                <p className="flex text-md px-4 my-2">
                  Rating: {movie.vote_average}
                  <span className="font-bold px-2">|</span>
                  Status: {movie.status}
                </p>
                {movie.genres.map((genre) => (
                  <div className="text-xs inline-grid" key={genre.id}>
                    <button
                      type="button"
                      className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                    >
                      {genre.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
export default Poster;

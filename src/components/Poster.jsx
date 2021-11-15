import React, { useEffect, useState } from "react";
const Poster = ({ movies }) => {
  const [loading, setLoading] = useState(true);
  if (movies !== undefined) {
    return (
      <div className="container grid w-full grid-cols-1 gap-10 mx-auto mt-2 lg:grid-cols-4 lg:grid SourceSansPro">
        {movies.map((movie) => (
          <div className="flex max-w-sm w-full  shadow-md rounded-lg overflow-hidden mx-auto" key={movie.id}>
            <div className="w-2"></div>

            <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
              <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
              <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                <div className="align-self-end w-full">
                  <div className="h-32"></div>
                  <div className="space-y-6 detail_info">
                    <div className="flex flex-col space-y-2 inner">
                      <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">
                        {movie.title}
                      </h3>
                      {/* <div className="mb-0 text-lg text-gray-400">Beyond fear, destiny awaits.</div> */}
                    </div>
                    <div className="flex flex-row justify-between datos">
                      <div className="flex flex-col datos_col">
                        <div className="popularity">{movie.popularity}</div>
                        <div className="text-sm text-gray-400">Popularity:</div>
                      </div>
                      <div className="flex flex-col datos_col">
                        <div className="release">{movie.release_date}</div>
                        <div className="text-sm text-gray-400">Release date:</div>
                      </div>
                      <div className="flex flex-col datos_col">
                        <div className="release">Language:</div>
                        <div className="text-sm text-gray-400">{movie.original_language}:</div>
                      </div>
                    </div>
                    <div className="flex flex-col overview">
                      <div className="flex flex-col"></div>
                      <div className="text-xs text-gray-400 mb-2">Overview:</div>
                      <p className="text-xl text-gray-100 mb-6">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute inset-0 transform w-full -translate-y-4"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                style={{ filter: "grayscale(0)" }}
              />
              <div className="flex flex-row relative pb-10 space-x-4 z-10"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Poster;

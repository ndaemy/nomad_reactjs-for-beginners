import React, { useState, useEffect } from "react";

import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "api";

export default () => {
  const [allMovies, setAllMovies] = useState({
    nowPlaying: [],
    upcoming: [],
    popular: [],
    error: [],
    loading: true
  });

  useEffect(() => {
    try {
      const getMoviesInfo = async () => {
        const [
          {
            data: { results: nowPlaying }
          },
          {
            data: { results: upcoming }
          },
          {
            data: { results: popular }
          }
        ] = await Promise.all([
          moviesApi.nowPlaying(),
          moviesApi.upcoming(),
          moviesApi.popular()
        ]);
        setAllMovies({ ...allMovies, nowPlaying, upcoming, popular });
      };
      getMoviesInfo();
    } catch {
      setAllMovies({ ...allMovies, error: ["Can't find movies information."] });
    } finally {
      setAllMovies({ ...allMovies, loading: false });
    }
  }, []);

  return <MoviePresenter allMovies={allMovies} />;
};

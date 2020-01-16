import React, { useState, useEffect } from 'react';

import HomePresenter from './MoviePresenter';
import { moviesApi } from 'api';

export default () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      };

      getMoviesInfo();
    } catch {
      setError("Can't find movies information.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

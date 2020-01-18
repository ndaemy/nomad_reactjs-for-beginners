import React, { useState, useEffect } from "react";

import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default () => {
  const [allTV, setAllTV] = useState({
    topRated: [],
    popular: [],
    airingToday: [],
    error: [],
    loading: true
  });

  useEffect(() => {
    try {
      const getMoviesInfo = async () => {
        const [
          {
            data: { results: topRated }
          },
          {
            data: { results: popular }
          },
          {
            data: { results: airingToday }
          }
        ] = await Promise.all([
          tvApi.topRated(),
          tvApi.popular(),
          tvApi.airingToday()
        ]);
        setAllTV({ ...allTV, topRated, popular, airingToday });
      };
      getMoviesInfo();
    } catch {
      setAllTV({ ...allTV, error: ["Can't find TV information."] });
    } finally {
      setAllTV({ ...allTV, loading: false });
    }
  }, []);

  return <TVPresenter allTV={allTV} />;
};

import React, { useState, useEffect } from "react";

import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default () => {
  const [allSearch, setAllSearch] = useState({
    movieResults: [],
    tvResults: [],
    searchTerm: "",
    error: [],
    loading: false
  });

  const handleSubmit = () => {
    const { searchTerm } = allSearch;
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };

  const searchByTerm = term => {
    const { searchTerm } = allSearch;
    try {
      const getSearchResult = async () => {
        const [
          {
            data: { results: movieResults }
          },
          {
            data: { results: tvResults }
          }
        ] = await Promise.all([
          moviesApi.search(searchTerm),
          tvApi.search(searchTerm)
        ]);
        setAllSearch({ ...allSearch, movieResults, tvResults });
      };
      setAllSearch({ ...allSearch, loading: true });
      getSearchResult();
    } catch {
      setAllSearch({ ...allSearch, error: ["Can't find results."] });
    } finally {
      setAllSearch({ ...allSearch, loading: false });
    }
  };

  return <SearchPresenter allSearch={allSearch} handleSubmit={handleSubmit} />;
};

import React, { useState, useEffect } from "react";

import DetailPresenter from "./DetailPresenter";

export default props => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = props;

    const parsedInt = parseInt(id);
    if (isNaN(parsedInt)) {
      return push("/");
    }
  }, []);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

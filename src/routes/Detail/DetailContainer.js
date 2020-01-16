import React, { useState } from 'react';

import DetailPresenter from './DetailPresenter';

export default () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return <DetailPresenter result={result} error={error} loading={loading} />;
};

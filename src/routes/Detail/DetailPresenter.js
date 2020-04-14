import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function DetailPresenter({ result, loading, error }) {
  return <div></div>;
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isMovie: PropTypes.bool,
};

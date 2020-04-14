import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function SearchPresenter({
  movieResults,
  tvResults,
  term,
  loading,
  error,
  handleSubmit,
}) {
  return <div></div>;
}

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  term: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HomePresenter({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error,
}) {
  return <div></div>;
}

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

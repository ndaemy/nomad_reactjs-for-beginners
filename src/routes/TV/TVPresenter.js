import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TVPresenter({
  popular,
  topRated,
  airingToday,
  loading,
  error,
}) {
  return <div></div>;
}

TVPresenter.propTypes = {
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

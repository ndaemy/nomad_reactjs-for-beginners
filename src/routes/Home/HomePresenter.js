import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'components/Section';

const Container = styled.div`
  padding: 0px 10px;
`;

export default function HomePresenter({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error,
}) {
  return loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title='Now Playing Movies'>
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title='Upcoming Movies'>
          {upcoming.map(movie => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Movies'>
          {popular.map(movie => movie.title)}
        </Section>
      )}
    </Container>
  );
}

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

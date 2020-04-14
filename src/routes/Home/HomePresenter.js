import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Section from 'components/Section';
import Poster from 'components/Poster';
import Message from 'components/Message';

const Container = styled.div`
  padding: 0px 20px;
`;

export default function HomePresenter({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error,
}) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title='Now Playing Movies'>
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title='Upcoming Movies'>
          {upcoming.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Movies'>
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie
            />
          ))}
        </Section>
      )}
      {error && <Message color='#e74c3c' text={error} />}
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

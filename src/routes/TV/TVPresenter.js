import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Section from 'components/Section';

const Container = styled.div`
  padding: 0px 10px;
`;

export default function TVPresenter({
  popular,
  topRated,
  airingToday,
  loading,
  error,
}) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title='Top Rated Shows'>
          {topRated.map(show => (
            <span>{show.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Shows'>
          {popular.map(show => (
            <span>{show.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title='Airing Today'>
          {airingToday.map(show => (
            <span>{show.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );
}

TVPresenter.propTypes = {
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

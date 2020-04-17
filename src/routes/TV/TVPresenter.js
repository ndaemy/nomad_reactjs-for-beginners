import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Loader from 'components/Loader';
import Section from 'components/Section';
import Poster from 'components/Poster';
import Message from 'components/Message';

const Container = styled.div`
  padding: 0px 20px;
`;

export default function TVPresenter({
  popular,
  topRated,
  airingToday,
  loading,
  error,
}) {
  return (
    <>
      <Helmet>
        <title>TV Shows | Nomflix</title>
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title='Top Rated Shows'>
              {topRated.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title='Popular Shows'>
              {popular.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section title='Airing Today'>
              {airingToday.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color='#e74c3c' text={error} />}
        </Container>
      )}
    </>
  );
}

TVPresenter.propTypes = {
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

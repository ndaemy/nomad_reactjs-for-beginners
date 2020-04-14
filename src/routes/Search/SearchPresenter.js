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

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

export default function SearchPresenter({
  movieResults,
  tvResults,
  term,
  loading,
  error,
  handleSubmit,
  updateTerm,
}) {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Search Movies or TV Shows...'
          value={term}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title='Movie Results'>
              {movieResults.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title='TV Show Results'>
              {tvResults.map(show => (
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
        </>
      )}
      {error && <Message color='#e74c3c' text={error} />}
      {movieResults &&
        tvResults &&
        movieResults.length === 0 &&
        tvResults.length === 0 && (
          <Message color='#95a5a6' text='Nothing found' />
        )}
    </Container>
  );
}

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  term: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

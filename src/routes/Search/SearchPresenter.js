import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from 'components/Loader';
import Section from 'components/Section';

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
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title='TV Show Results'>
              {tvResults.map(show => (
                <span key={show.id}>{show.name}</span>
              ))}
            </Section>
          )}
        </>
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

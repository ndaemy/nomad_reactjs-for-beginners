import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from 'api';

export default class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    term: '',
    loading: false,
    error: null,
  };

  handleSubmit = () => {
    const { term } = this.state;
    if (term !== '') this.searchByTerm();
  };

  searchByTerm = async () => {
    const { term } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(term);
      const {
        data: { results: tvResults },
      } = await tvApi.search(term);

      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <SearchPresenter {...this.state} handleSubmit={this.handleSubmit} />;
  }
}

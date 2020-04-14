import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from 'api';

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const { isMovie } = this.state;

    let result;
    try {
      if (isMovie) {
        const request = await movieApi.detail(id);
        result = request.data;
      } else {
        const request = await tvApi.detail(id);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find information." });
    } finally {
      this.setState({ result, loading: false });
    }
  }

  render() {
    const { result, loading, error } = this.state;

    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}

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

    try {
      if (isMovie) {
        const { data: result } = await movieApi.detail(id);
        this.setState({ result });
      } else {
        const { data: result } = await tvApi.detail(id);
        this.setState({ result });
      }
    } catch {
      this.setState({ error: "Can't find information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(this.state);

    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}

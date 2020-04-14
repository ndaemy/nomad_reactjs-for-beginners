import React, { Component } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

export default class TVContainer extends Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      this.setState({ popular, topRated, airingToday });
    } catch {
      this.setState({ error: "Can't find TV information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <TVPresenter {...this.state} />;
  }
}

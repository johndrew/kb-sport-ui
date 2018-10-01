import React, { Component, Fragment } from 'react';

export default class Results extends Component {
  render() {
    return (
      <Fragment>
        {this.props.loading &&
          <h3 className="results__loading">Loading ...</h3>
        }
        {this.props.ranking &&
          <h3 className="results__ranking">Ranking {this.props.ranking}</h3>
        }
        {this.props.rankingRequestError &&
          <h3 className="results__errorMessage">{this.props.rankingRequestError}</h3>
        }
      </Fragment>
    );
  }
}

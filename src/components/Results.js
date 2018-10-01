import React, { Component, Fragment } from 'react';

export default class Results extends Component {
  render() {
    return (
      <Fragment>
        {this.props.loading &&
          <h3 className={`results__loading ${this.props.className}`}>Loading ...</h3>
        }
        {this.props.ranking &&
          <h3 className={`results__ranking ${this.props.className}`}>Ranking {this.props.ranking}</h3>
        }
        {this.props.rankingRequestError &&
          <h3 className={`results__errorMessage ${this.props.className}`}>{this.props.rankingRequestError}</h3>
        }
      </Fragment>
    );
  }
}

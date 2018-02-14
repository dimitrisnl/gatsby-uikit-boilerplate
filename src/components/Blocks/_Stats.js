import React, { Component } from 'react';

export class Stats extends Component {
  render() {
    return (
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-small">
          <h3 className="uk-heading-line uk-text-center">
            <span>Quickly look at these numbers!</span>
          </h3>
          <div className="uk-panel uk-light uk-margin-medium" />

          <div
            className="uk-child-width-expand@s uk-text-center uk-grid-match"
            data-uk-grid-parallax="translate:50"
            data-uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 300"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-padding-small uk-card-hover">
                <div className="uk-card-header">
                  <h3 className="uk-card-title">456</h3>
                </div>
                <div className="uk-card-body">
                  Completed Projects just last night
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-padding-small uk-card-hover">
                <div className="uk-card-header">
                  <h3 className="uk-card-title">10</h3>
                </div>
                <div className="uk-card-body">Dollars in my pocket</div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-padding-small uk-card-hover">
                <div className="uk-card-header">
                  <h3 className="uk-card-title">12</h3>
                </div>
                <div className="uk-card-body">
                  Pair of white sneakers in my collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;

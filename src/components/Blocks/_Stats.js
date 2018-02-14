import React, { Component } from 'react';

export class Stats extends Component {
  render() {
    return (
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div
            className="uk-child-width-expand@s uk-text-center"
            data-uk-grid-parallax
            data-uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 300"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-grid-margin uk-card-hover">
                <h3 className="uk-card-title">456</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-grid-margin  uk-card-hover">
                <h3 className="uk-card-title">10</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-grid-margin  uk-card-hover">
                <h3 className="uk-card-title">32</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;

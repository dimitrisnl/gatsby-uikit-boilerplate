import React, { Component } from 'react';

export class NewsLetter extends Component {
  render() {
    return (
      <div className="uk-section uk-section-secondary uk-light">
        <div className="uk-container">
          <h3>Section Secondary</h3>

          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;

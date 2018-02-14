import React, { Component } from 'react';

export class CardsRow extends Component {
  render() {
    return (
      <div className="uk-section uk-section-primary uk-preserve-color">
        <div className="uk-container">
          <div className="uk-panel uk-light uk-margin-medium">
            <h3>Section Primary with cards</h3>
          </div>

          <div className="uk-grid-match uk-child-width-expand@m" data-uk-grid>
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsRow;

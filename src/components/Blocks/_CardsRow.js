import React, { Component } from 'react';

export class CardsRow extends Component {
  render() {
    return (
      <div className="uk-section ">
        <div className="uk-container uk-container-small">
          <h3 className="uk-heading-line uk-text-left">
            <span>Something with two columns</span>
          </h3>
          <div className="uk-panel uk-light uk-margin-medium" />

          <div
            className="uk-grid-match uk-child-width-expand@m"
            data-uk-grid-parallax="translate:50"
            data-uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-card-hover">
                <span data-uk-icon="icon: heart; ratio: 1.5" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-card-hover">
                <span data-uk-icon="icon: heart; ratio: 1.5" />
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

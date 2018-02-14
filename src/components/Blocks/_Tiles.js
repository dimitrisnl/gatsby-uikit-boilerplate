import React, { Component } from 'react';

export class Tiles extends Component {
  render() {
    return (
      <div
        className="uk-child-width-1-2@s uk-grid-collapse uk-text-center"
        data-uk-grid
        data-uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500"
      >
        <div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-h4">We do this</p>
          </div>
        </div>
        <div>
          <div className="uk-tile uk-tile-muted">
            <p className="uk-h4">We also do that</p>
          </div>
        </div>
        <div>
          <div className="uk-tile uk-tile-primary">
            <p className="uk-h4">But we definitely do this first</p>
          </div>
        </div>
        <div>
          <div className="uk-tile uk-tile-secondary">
            <p className="uk-h4">On lazy days this too</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tiles;

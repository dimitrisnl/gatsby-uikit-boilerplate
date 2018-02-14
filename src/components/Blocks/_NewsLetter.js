import React, { Component } from 'react';

export class NewsLetter extends Component {
  render() {
    return (
      <div className="uk-section uk-section-primary uk-light">
        <div className="uk-container">
          <h3 className="uk-flex uk-flex-center">Susbcribe</h3>

          <form className="uk-flex uk-flex-center">
            <input
              className="uk-input uk-width-1-2"
              type="text"
              placeholder="Email"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NewsLetter;

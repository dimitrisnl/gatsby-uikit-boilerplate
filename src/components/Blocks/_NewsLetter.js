import React, { Component } from 'react';

export class NewsLetter extends Component {
  render() {
    return (
      <section className="hero is-primary m-t-xl">
        <div className="hero-body">
          <div className="container">
            <h4 className="subtitle is-3 has-text-centered">
              Would you think of the emails
            </h4>
            <div className="columns is-centered">
              <div className="column is-narrow">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input is-rounded"
                      type="text"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="control">
                    <a className="button is-rounded">Send me stuff</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsLetter;

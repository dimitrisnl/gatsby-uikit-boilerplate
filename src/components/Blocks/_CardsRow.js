import React, { Component } from 'react';

export class CardsRow extends Component {
  render() {
    return (
      <section className="section m-t-xl">
        <h4 className="subtitle is-3 has-text-centered">Ok listen here</h4>

        <div className="container">
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="card">
                <div className="card-image columns is-centered">
                  <figure className="image is-128x128 column is-narrow m-t-md">
                    <img
                      src="https://source.unsplash.com/random/128x128"
                      alt="Placeholder image"
                      className="rounded-circle"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="subtitle is-4 has-text-centered">
                    Lorem ipsum dolor
                  </h3>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-image columns is-centered">
                  <figure className="image is-128x128 column is-narrow m-t-md">
                    <img
                      src="https://source.unsplash.com/random/128x128"
                      alt="Placeholder image"
                      className="rounded-circle"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="subtitle is-4 has-text-centered">
                    Lorem ipsum dolor
                  </h3>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-image columns is-centered">
                  <figure className="image is-128x128 column is-narrow m-t-md">
                    <img
                      src="https://source.unsplash.com/random/128x128"
                      alt="Placeholder image"
                      className="rounded-circle"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="subtitle is-4 has-text-centered">
                    Lorem ipsum dolor
                  </h3>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Phasellus nec iaculis mauris.
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

export default CardsRow;

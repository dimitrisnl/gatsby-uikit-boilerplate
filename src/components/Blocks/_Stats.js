import React, { Component } from 'react';

export class Stats extends Component {
  render() {
    return (
      <section className="section m-t-xl">
        <div className="container">
          <h4 className="subtitle is-3 has-text-centered">
            Over the year did this and that
          </h4>
          <nav className="level box">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Something</p>
                <p className="title">3,456</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Another</p>
                <p className="title">123</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Also this</p>
                <p className="title">456K</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Lol what about this</p>
                <p className="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Stats;

import React, { Component } from 'react';
import Link from 'gatsby-link';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-3" to="/">
            Company
          </Link>

          <button className="button navbar-burger">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/page-2/">
              Page 2
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field">
                <p className="control">
                  <a className="button is-primary" href="#">
                    <span>Request a Demo</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

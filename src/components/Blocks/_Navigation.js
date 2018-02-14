import React, { Component } from 'react';
import Link from 'gatsby-link';

export class Navigation extends Component {
  render() {
    return (
      <div
        id="top"
        data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark; top: 200"
      >
        <nav className="uk-navbar-container">
          <div className="uk-container uk-container-expand">
            <div data-uk-navbar>
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown</a>
                    <div className="uk-navbar-dropdown">
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <a href="#">Something</a>
                        </li>
                        <li>
                          <a href="#">Something 2</a>
                        </li>
                        <li>
                          <a href="#">Something 3</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uk-navbar-center">
                <a className="uk-logo" href="#">
                  Company
                </a>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                  <li>
                    <button className="uk-button uk-button-primary">
                      Request a Demo
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

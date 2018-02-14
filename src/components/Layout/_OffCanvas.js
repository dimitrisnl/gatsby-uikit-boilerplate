import React, { Component } from 'react';
import Link from 'gatsby-link';

export class OffCanvas extends Component {
  render() {
    return (
      <div className="uk-offcanvas-content">
        <div id="offcanvas" data-uk-offcanvas="mode: push; overlay: true">
          <div className="uk-offcanvas-bar">
            <div className="uk-panel">
              <ul className="uk-nav uk-nav-default tm-nav">
                <li>
                  <Link to="page-2">Page 2</Link>
                </li>
                <li>
                  <a href="#">Something</a>
                </li>
                <li>
                  <a href="#">Something 2</a>
                </li>
                <li>
                  <a href="#">Something 3</a>
                </li>
                <li>
                  <button className="uk-button uk-button-primary uk-margin-top">
                    Request a Demo
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OffCanvas;

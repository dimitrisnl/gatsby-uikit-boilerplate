import React, { Component } from 'react';

export class Comments extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <h3>Here's what people say</h3>
          <div data-uk-slideshow="autoplay: true; min-height: 200; max-height: 300">
            <ul className="uk-slideshow-items">
              <li>
                <div className="uk-position-center uk-position-small">
                  <div data-uk-slideshow-parallax="x: 100,-100">
                    <article className="uk-comment">
                      <header
                        className="uk-comment-header uk-grid-medium uk-flex-middle"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <img
                            className="uk-comment-avatar"
                            src="https://source.unsplash.com/random/80x80"
                            width="80"
                            height="80"
                            alt=""
                          />
                        </div>
                        <div className="uk-width-expand">
                          <h4 className="uk-comment-title uk-margin-remove">
                            <a className="uk-link-reset" href="#">
                              KoroJohn
                            </a>
                          </h4>
                          <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li>
                              <a href="#">Web Designer</a>
                            </li>
                          </ul>
                        </div>
                      </header>
                      <div className="uk-comment-body">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-position-center uk-position-small">
                  <div data-uk-slideshow-parallax="x: 100,-100">
                    <article className="uk-comment">
                      <header
                        className="uk-comment-header uk-grid-medium uk-flex-middle"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <img
                            className="uk-comment-avatar"
                            src="https://source.unsplash.com/random/80x80"
                            width="80"
                            height="80"
                            alt=""
                          />
                        </div>
                        <div className="uk-width-expand">
                          <h4 className="uk-comment-title uk-margin-remove">
                            <a className="uk-link-reset" href="#">
                              KoroJohn
                            </a>
                          </h4>
                          <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li>
                              <a href="#">Web Designer</a>
                            </li>
                          </ul>
                        </div>
                      </header>
                      <div className="uk-comment-body">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;

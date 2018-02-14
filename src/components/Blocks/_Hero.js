import React, { Component } from 'react';
import styled from 'react-emotion';

export class Hero extends Component {
  render() {
    return (
      <div
        className="uk-height-large uk-background-primary uk-light uk-flex"
        data-uk-parallax="bgy: -200"
      >
        <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h1 className="uk-heading-hero uk-margin">We do stuff</h1>
          <h3 className="">Accept it bro</h3>

          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

import React, { Component } from 'react';
import styled from 'react-emotion';

export class Hero extends Component {
  render() {
    return (
      <div className="uk-section uk-section-default uk-dark">
        <div className="uk-container uk-container-small">
          <h2 className="uk-heading-primary">Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </div>
    );
    // <Cover
    //   className="uk-height-large uk-background-cover uk-light uk-flex"
    //   data-uk-parallax="bgy: -200"
    // >
    //   <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
    //     Headline
    //   </h1>
    // </Cover>
  }
}

export default Hero;

const Cover = styled.div`
  background-image: url(https://images.unsplash.com/photo-1484353371297-d8cfd2895020?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c9d0e98f08ebe1cbabaa3f71e22440&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb);
`;

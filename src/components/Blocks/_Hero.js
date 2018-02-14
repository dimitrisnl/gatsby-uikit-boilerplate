import React, { Component } from 'react';
import styled from 'react-emotion';

export class Hero extends Component {
  render() {
    return (
      <Cover
        className="uk-cover-container uk-height-large uk-background-cover uk-light"
        data-uk-parallax="bgy: -250"
        data-uk-height-viewport="offset-top: true; offset-bottom: 25"
      >
        <Header data-uk-cover>Header</Header>
      </Cover>
    );
  }
}

export default Hero;

const Cover = styled.div`
  background-image: url(https://images.unsplash.com/photo-1484353371297-d8cfd2895020?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c9d0e98f08ebe1cbabaa3f71e22440&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb);
`;
const Header = styled.div`
  background: #00000075;
`;

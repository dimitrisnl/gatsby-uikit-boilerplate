import React, { Component } from 'react';
import styled from 'react-emotion';

export class Hero extends Component {
  render() {
    return (
      <Section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title is-3 has-text-primary">
                  Lorem ipsum dolor sit amet.
                </h1>
                <h3 className="subtitle is-5 has-text-white">
                  Vivamus augue orci, scelerisque non nibh ut, molestie cursus
                  tortor. Nulla in faucibus ipsum.
                </h3>
              </div>
            </div>
          </div>
          {/* <div>
            <img src="https://source.unsplash.com/random/800x600" />
          </div> */}
        </div>
        <Background />
      </Section>
    );
  }
}

export default Hero;

const Background = styled.div`
  background-image: url(https://images.unsplash.com/photo-1484353371297-d8cfd2895020?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c9d0e98f08ebe1cbabaa3f71e22440&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb);
  background-attachment: fixed;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Section = styled.div`
  background: #00000090;
  position: relative;
`;

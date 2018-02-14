import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { Footer, Navigation } from 'Blocks';
// import Icons from 'uikit/dist/js/uikit-icons.min';

// Uikit.use(Icons);

import './styles.scss';

class TemplateWrapper extends Component {
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined';
    isBrowser && require('uikit');
  }
  render() {
    return (
      <Wrapper>
        <Navigation />
        <Main>{this.props.children()}</Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 1;
`;

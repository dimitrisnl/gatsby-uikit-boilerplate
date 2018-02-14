import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { Footer, Navigation } from 'Blocks';

import './styles.scss';

class TemplateWrapper extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
    }
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

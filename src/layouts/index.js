import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { Footer, Navigation } from 'Blocks';

import './styles.scss';

class TemplateWrapper extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.ready && (
          <Wrapper>
            <Navigation />
            <Main>{this.props.children()}</Main>
            <Footer />
          </Wrapper>
        )}
      </div>
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
  animation: appear 0.5s forwards;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Main = styled.div`
  flex: 1;
`;

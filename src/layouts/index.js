import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import { Footer, Navigation } from 'Blocks';

import Uikit from 'uikit/dist/js/uikit.min';
import Icons from 'uikit/dist/js/uikit-icons.min';

Uikit.use(Icons);

import './styles.scss';

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Main>{children()}</Main>
    <Footer />
  </Wrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 1;
`;

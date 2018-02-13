import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Footer, Navigation } from 'Blocks';
import './styles.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Navigation />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

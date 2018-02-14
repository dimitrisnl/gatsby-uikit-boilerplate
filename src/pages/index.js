import React from 'react';

import { Hero, Stats, CardsRow, NewsLetter, Tiles, Comments } from 'Blocks';

const IndexPage = () => (
  <div>
    <Hero />
    <Stats />
    <div className="uk-panel uk-light uk-margin-medium" />
    <hr className="uk-divider-icon" />
    <Tiles />
    <div className="uk-panel uk-light uk-margin-medium" />
    <CardsRow />
    <div className="uk-panel uk-light uk-margin-medium" />
    <Comments />
    <div className="uk-panel uk-light uk-margin-medium" />
    <NewsLetter />
  </div>
);

export default IndexPage;

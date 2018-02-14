import React from 'react';

import { Hero, Stats, CardsRow, NewsLetter, Tiles, Comments } from 'Blocks';

const IndexPage = () => (
  <div>
    <Hero />
    <Stats />
    <Tiles />
    <CardsRow />
    <hr className="uk-divider-icon" />
    <Comments />
    <NewsLetter />
  </div>
);

export default IndexPage;

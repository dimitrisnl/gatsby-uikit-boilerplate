import React from 'react';

import { Hero, Stats, CardsRow, NewsLetter, Tiles, Comments } from 'Blocks';

const IndexPage = () => (
  <div>
    <Hero />
    <Stats />
    {/* <CardsRow /> */}

    <div className="uk-section uk-section-muted">
      <div className="uk-container">
        <h3>Section Muted</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Comments />
    <Tiles />
    <NewsLetter />
  </div>
);

export default IndexPage;

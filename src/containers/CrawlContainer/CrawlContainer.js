import React from 'react';
import './CrawlContainer.css';
import logo from '../../images/swlogo.svg';

const CrawlContainer = (props) => (
    <div className="CrawlContainer">
      <section className="intro">
  A long time ago, in a galaxy far,
        <br />
        {' '}
far away....
      </section>
      <section className="logo">
        <img alt="logo" src={logo} />
      </section>
      <div id="board">
        <div id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">THE CODER'S MENACE</p>
          <br />
          <p>{props.crawlText}</p>
        </div>
      </div>
    </div>
  );

export default CrawlContainer;

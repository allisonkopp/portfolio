import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link, withRouter } from 'react-router-dom';
import './Heading.scss';

import WORKSPACE from '../../assets/images/workspace.jpg';

const Heading = props => (
  <div className="container">
    <div className="container-left">
      <img src={WORKSPACE} alt="workspace" className="heading-img" />
    </div>
    <div className="container-right">
      <h3>My name is</h3>
      <h1>Allison Kopp</h1>
      <h3>and I am a</h3>
      <h1>Software Developer</h1>
      <div className="btn-container">
        <AnchorLink href="#about">
          <button className="btn draw-border">About</button>
        </AnchorLink>
        <AnchorLink href="#projects">
          <button className="btn draw-border">Projects</button>
        </AnchorLink>
      </div>
    </div>
  </div>
);

export default withRouter(Heading);

import React from 'react';
import anime from 'animejs';
import './Heading.scss';
import $ from 'jquery';

import WORKSPACE from '../../assets/images/workspace.jpg';

const heading = 'SOFTWARE ENGINEER';

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
        <button className="btn draw-border">About</button>
        <button className="btn draw-border">Projects</button>
      </div>
    </div>
  </div>
);

export default Heading;

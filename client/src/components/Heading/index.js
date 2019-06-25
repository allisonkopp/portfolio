import React from 'react';
import anime from 'animejs';
import './Heading.css';
import $ from 'jquery';

import WORKSPACE from '../../assets/images/workspace.jpg';

const heading = 'SOFTWARE ENGINEER';

const Heading = props => {
  // $('.ml9 .letters').each(function() {
  //   $(this).html(
  //     $(this)
  //       .text()
  //       .replace(/([^\x00-\x80]|\w)/g, <span class="letter">$&</span>)
  //   );
  // });

  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml1 .letter',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 600,
      delay: function(el, i) {
        return 70 * (i + 1);
      }
    })
    .add({
      targets: '.ml1 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 700,
      offset: '-=875',
      delay: function(el, i, l) {
        return 80 * (l - i);
      }
    })
    .add({
      targets: '.ml1',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    });

  return (
    <div className="container">
      <div className="container-left">
        <img src={WORKSPACE} alt="workspace" className="heading-img" />
      </div>
      <div className="container-right">
        <h1>I am a</h1>
        <h1 className="ml1">
          <span className="text-wrapper">
            <span className="line line1" />
            <span className="letters">SOFTWARE DESIGNER</span>
            <span className="line line2" />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Heading;

import React from 'react';
import { images } from '../../utils';

const Technologies = props => (
  <div>
    <h1>Technologies</h1>
    {images.map(image => (
      <img key={image.id} src={image.src} alt={image.alt} />
    ))}
  </div>
);

export default Technologies;

import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ bgColor, fgColor, text }) => (
  <div style={{ backgroundColor: bgColor, width: '30rem', height: '30rem' }}>
    <p style={{ color: fgColor, fontSize: '5rem' }}>{text}</p>
  </div>
);

ColorDisplay.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ColorDisplay;

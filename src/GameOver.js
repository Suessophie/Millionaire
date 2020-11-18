import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import finishingImage from './images/Group_265.png';

export const GameOver = ({ benefit }) => (
  <div className="gameover">
    <div className="gameover__container">
      <img src={finishingImage} alt="" />
      <div className="gameover__content">
        <div className="gameover__subtitle">
          Total score:
        </div>
        <h2 className="gameover__title">
          {`${benefit} earned`}
        </h2>
        <Link
          className="gameover__link"
          to="/"
        >
          Try again
        </Link>
      </div>
    </div>
  </div>
);

GameOver.propTypes = PropTypes.string.isRequired;

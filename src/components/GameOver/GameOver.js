import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import finishingImage from '../../images/Group_265.png';
import './GameOver.scss';

export const GameOver = ({ benefit }) => (
  <div className="gameover">
    <div className="gameover__container">
      <img
        src=""
        alt="sign class in stars"
      />
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

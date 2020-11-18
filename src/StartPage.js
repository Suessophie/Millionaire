import React from 'react';
import { Link } from 'react-router-dom';
import image from './images/Group_265.png';

export const StartPage = () => (
  <div className="start">
    <div className="start__container">
      <img
        src={image}
        alt="sign class in stars"
      />
      <div className="start__content">
        <div className="start__title">
          Who wants to be a millionaire?
        </div>
        <Link
          className="start__link"
          to="/game"
        >
          Start
        </Link>
      </div>
    </div>
  </div>
);

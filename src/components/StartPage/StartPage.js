import React from 'react';
import { Link } from 'react-router-dom';

import mainImageDesktop from '../../images/main_image_desktop.png';
import mainImageMobile from '../../images/main_image_mobile.png';

/* <img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy"> */

import './StartPage.scss';

export const StartPage = () => (
  <div className="start">
    <div className="start__container">
      <img
        className="start__image"
        srcSet={`${mainImageDesktop} 453w,
          ${mainImageMobile} 198w`}
        sizes="(max-width: 900px) 198px,
          453px"
        src={mainImageDesktop}
        alt="sign class in stars"
      />
      <div className="start__content">
        <div className="start__title">
          Who wants to be a millionaire?
        </div>
        <Link
          className="start__link"
          to="/game/1"
        >
          Start
        </Link>
      </div>
    </div>
  </div>
);

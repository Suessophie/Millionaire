import React from 'react';
import { Link } from 'react-router-dom';
import image from './images/Group_265.png';

export const StartPage = () => (
  <div className="startPage">
    <div className="startPage__container">
      <img
        src={image}
        alt="sign class in stars"
      />
      <div className="startPage__content">
        <div className="startPage__title">
          Who wants to be a millionaire?
        </div>
        <button
          className="staptPage__button button"
          type="button"
        >
          <Link
            className="startPage__link link"
            to="/game"
          >
            Start
          </Link>
        </button>
      </div>
    </div>
  </div>
);

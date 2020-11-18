import React from 'react';
import { Link } from 'react-router-dom';

export const GameOver = () => (
  <div className="gameover">
    <div className="gameover__image">lala</div>
    <div className="gameover__content">
      <div className="gameover__subtitle">
        Total score:
      </div>
      <h2 className="gameover__title">
        $8000 earned
      </h2>
      <button
        type="button"
      >
        <Link to="/">
          Try again
        </Link>
      </button>
    </div>
  </div>
);

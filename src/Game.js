import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import questions from './api/data.json';

export const Game = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{questions[count].title}</div>
      <div>
        {questions[count].options.map(option => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              option.correct
                ? setCount(count + 1)
                : setCount(0);
            }}
          >
            {option.correct ? (
              <Link
                to="/game"
              >
                {option.answer}
              </Link>
            ) : (
              <Link
                to="/gameover"
              >
                {option.answer}
              </Link>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

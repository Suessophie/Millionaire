import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import questions from './api/questions.json';
import benefits from './api/benefits.json';

import { Benefit } from './Benefit';

const letterOfAnswer = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

const preparedBenefits = benefits.map((benefit) => {
  const preparedBenefit = {
    ...benefit,
    achieved: false,
  };

  return { ...preparedBenefit };
});

export const Game = () => {
  const [count, setCount] = useState(0);
  const [benefitsList, setBenefitsList] = useState(preparedBenefits);

  const changesOnClick = (correct, idOfQuestion) => {
    if (correct) {
      const changedBenefitsList = benefitsList.map((benefit) => {
        if (benefit.id === idOfQuestion && correct === true) {
          return {
            ...benefit,
            achieved: correct,
          };
        }

        return { ...benefit };
      });

      setBenefitsList(changedBenefitsList);
      setCount(count + 1);
    } else {
      setBenefitsList(preparedBenefits);
      setCount(0);
    }
  };

  return (
    <div className="game">

      <div className="game__leftBlock">
        <h2 className="game__title">
          {questions[count].title}
        </h2>
        <div className="game__options">
          {questions[count].options.map(option => (
            <div className="option">
              <button
                className="option__button"
                key={option.id}
                type="button"
                onClick={() => changesOnClick(
                  option.correct, questions[count].questionId,
                )}
              >
                {option.correct ? (
                  <Link
                    className="option__link"
                    to="/game"
                  >
                    <span className="option__letter">
                      {letterOfAnswer[questions[count].options.indexOf(option)]}
                    </span>
                    <span className="option__text">
                      {option.answer}
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="option__link"
                    to="/gameover"
                  >
                    <span className="option__letter">
                      {letterOfAnswer[questions[count].options.indexOf(option)]}
                    </span>
                    {option.answer}
                  </Link>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="game__rightBlock">
        {benefitsList.map(benefit => (
          <Benefit
            key={benefit.id}
            benefit={benefit.benefit}
            achieved={benefit.achieved}
            idOfBenefit={benefit.id}
            numberOfQuestion={count + 1}
          />
        ))}
      </div>
    </div>
  );
};

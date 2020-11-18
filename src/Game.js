import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

export const Game = ({ totalBenefit }) => {
  const [count, setCount] = useState(0);
  const [benefitsList, setBenefitsList] = useState(preparedBenefits);

  const clickOnCorrectAnswer = (idOfQuestion) => {
    const changedBenefitsList = benefitsList.map((benefit) => {
      if (benefit.id === idOfQuestion) {
        return {
          ...benefit,
          achieved: true,
        };
      }

      return { ...benefit };
    });

    setBenefitsList(changedBenefitsList);
    setCount(count + 1);
  };

  const clickOnIncorrectOrLastAnswer = (currentBenefit) => {
    totalBenefit(currentBenefit);

    setBenefitsList(preparedBenefits);
    setCount(0);
  };

  return (
    <div className="game">

      <div className="game__leftBlock">
        <h2 className="game__title">
          {questions[count].title}
        </h2>
        <div className="game__options">
          {questions[count].options.map(option => (
            <div
              key={option.id}
              className="option"
            >
              {option.correct && questions[count].questionId < 12 ? (
                <Link
                  className="option__link"
                  to="/game"
                  onClick={() => clickOnCorrectAnswer(
                    questions[count].questionId,
                  )}
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
                  onClick={() => {
                    if (count === questions.length - 1) {
                      clickOnIncorrectOrLastAnswer(
                        benefitsList[0].benefit,
                      );
                    } else {
                      clickOnIncorrectOrLastAnswer(
                        benefitsList[benefitsList.length - count].benefit,
                      );
                    }
                  }}
                >
                  <span className="option__letter">
                    {letterOfAnswer[questions[count].options.indexOf(option)]}
                  </span>
                  <span className="option__text">
                    {option.answer}
                  </span>
                </Link>
              )}
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

Game.propTypes = PropTypes.func.isRequired;

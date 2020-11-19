import React, { useState } from 'react';
import PropTypes from 'prop-types';

import benefits from '../../api/benefits.json';
import questions from '../../api/questions.json';

import { Option } from '../Option';
import { Benefit } from '../Benefit';

import './Game.scss';

const preparedBenefits = benefits.map((benefit) => {
  const preparedBenefit = {
    ...benefit,
    achieved: false,
  };

  return { ...preparedBenefit };
});

export const Game = ({ totalBenefit }) => {
  const [count, setCount] = useState(0);
  const [numberOfQuestion, setNumberOfQuestion] = useState(1);
  const [benefitsList, setBenefitsList] = useState(preparedBenefits);
  const [isShowed, setIsShowed] = useState(true);

  const shownBenefits = () => {
    setIsShowed(!isShowed);
  };

  const clickOnCorrectAnswer = (numberOfCurrentQuestion) => {
    const changedBenefitsList = benefitsList.map((benefit) => {
      if (benefit.id === numberOfCurrentQuestion) {
        return {
          ...benefit,
          achieved: true,
        };
      }

      return { ...benefit };
    });

    setBenefitsList(changedBenefitsList);
    setCount(count + 1);
    setNumberOfQuestion(numberOfQuestion + 1);
  };

  const clickOnIncorrectOrLastAnswer = (currentBenefit) => {
    totalBenefit(currentBenefit);

    setBenefitsList(preparedBenefits);
    setCount(0);
    setNumberOfQuestion(1);
  };

  return (
    <div className="game">
      <button
        className="game__burger"
        type="button"
        onClick={shownBenefits}
      >
        burger
      </button>

      {isShowed && (
        <div className="game__leftBlock">
          <h2 className="game__title">
            {questions[count].title}
          </h2>
          <div className="game__options">
            {questions[count].options.map(option => (
              <Option
                key={option.id}
                clickOnCorrectAnswer={clickOnCorrectAnswer}
                clickOnIncorrectOrLastAnswer={clickOnIncorrectOrLastAnswer}
                count={count}
                numberOfQuestion={numberOfQuestion}
                option={option}
                benefitsList={benefitsList}
              />
            ))}
          </div>
        </div>
      )}

      <div className="game__rightBlock">
        {benefitsList.map(benefit => (
          <Benefit
            key={benefit.id}
            benefit={benefit.benefit}
            achieved={benefit.achieved}
            idOfBenefit={benefit.id}
            numberOfQuestion={numberOfQuestion}
          />
        ))}
      </div>
    </div>
  );
};

Game.propTypes = PropTypes.func.isRequired;

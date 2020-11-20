import React from 'react';
import { Link } from 'react-router-dom';

import questions from '../../api/questions.json';

import { OptionShape } from '../../shapes/OptionShape';
import './Option.scss';

const letterOfAnswer = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

export const Option = ({
  clickOnCorrectAnswer,
  clickOnIncorrectOrLastAnswer,
  count,
  numberOfQuestion,
  option,
  benefitsList,
}) => (
  <div className="option">
    {option.correct && numberOfQuestion < 12 ? (
      <Link
        className="option__link"
        to={`/game/${questions[numberOfQuestion].questionId}`}
        onClick={() => clickOnCorrectAnswer(
          numberOfQuestion,
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
          if (numberOfQuestion === questions.length) {
            clickOnIncorrectOrLastAnswer(
              benefitsList[0].benefit,
            );
          } else if (numberOfQuestion === 1) {
            clickOnIncorrectOrLastAnswer('$0');
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
);

Option.propTypes = OptionShape;

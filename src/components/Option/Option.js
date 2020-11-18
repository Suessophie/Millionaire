import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import questions from '../../api/questions.json';

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

Option.propTypes = {
  clickOnCorrectAnswer: PropTypes.func.isRequired,
  clickOnIncorrectOrLastAnswer: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  numberOfQuestion: PropTypes.number.isRequired,
  option: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    correct: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  benefitsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    benefit: PropTypes.string.isRequired,
    achieved: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Benefit.scss';

export const Benefit = ({
  benefit,
  achieved,
  idOfBenefit,
  numberOfQuestion,
}) => (
  <div
    className={cn('benefit', {
      'benefit--achieved': achieved,
      'benefit--nextGoal': idOfBenefit === numberOfQuestion,
    })}
  >
    {benefit}
  </div>
);

Benefit.propTypes = {
  benefit: PropTypes.string.isRequired,
  achieved: PropTypes.bool.isRequired,
  idOfBenefit: PropTypes.number.isRequired,
  numberOfQuestion: PropTypes.number.isRequired,
};

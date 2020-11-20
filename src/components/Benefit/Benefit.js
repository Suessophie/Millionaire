import React from 'react';
import cn from 'classnames';

import './Benefit.scss';
import { BenefitShape } from '../../shapes/BenefitShape';

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

Benefit.propTypes = BenefitShape;

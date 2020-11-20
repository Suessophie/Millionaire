import PropTypes from 'prop-types';

export const BenefitShape = {
  benefit: PropTypes.string.isRequired,
  achieved: PropTypes.bool.isRequired,
  idOfBenefit: PropTypes.number.isRequired,
  numberOfQuestion: PropTypes.number.isRequired,
};

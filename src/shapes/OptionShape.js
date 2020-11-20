import PropTypes from 'prop-types';

export const OptionShape = {
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

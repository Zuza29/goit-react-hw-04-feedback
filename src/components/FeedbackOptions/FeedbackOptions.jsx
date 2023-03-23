import css from './FeedbackOptions.module.css';
import { capitalizeFirstLetter } from 'utils/functions';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, scoreKeys }) => {
  return (
    <>
      <p>asks for your feedback!</p>
      {scoreKeys &&
        scoreKeys.length &&
        scoreKeys.map(scoreKey => (
          <button
            key={scoreKey}
            className={css.button}
            type="button"
            onClick={onLeaveFeedback}
          >
            {capitalizeFirstLetter(scoreKey)}
          </button>
        ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  scoreKeys: PropTypes.array.isRequired,
};





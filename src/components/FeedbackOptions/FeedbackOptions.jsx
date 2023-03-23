import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import { capitalizeFirstLetter } from 'utils/functions';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, scoreKeys } = this.props;
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
  }
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  scoreKeys: PropTypes.array.isRequired,
};





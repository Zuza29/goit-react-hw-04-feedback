import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ total, positiveFeedback, positive, negative, neutral }) => {
  return (
    <div className={css.stats}>
      <p>Positive: {positive}</p>
      <p>Negative: {negative}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback}</p>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number,
  positiveFeedback: PropTypes.string,
  scoreKeys: PropTypes.array.isRequired,
}
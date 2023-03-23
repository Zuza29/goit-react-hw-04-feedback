import React, { Component } from 'react';
import css from './Statistics.module.css';
import { capitalizeFirstLetter } from 'utils/functions';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { total, positiveFeedback, scoreKeys } = this.props;
    return (
      <div className={css.stats}>
        {scoreKeys &&
          scoreKeys.length &&
          scoreKeys.map(scoreKey => (
            <p key={scoreKey}>
              {capitalizeFirstLetter(scoreKey)}: {this.props[scoreKey]}
            </p>
          ))}
        <p>Total: {total}</p>
        <p>Positive feedback: {positiveFeedback}</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
  scoreKeys: PropTypes.array.isRequired,
}
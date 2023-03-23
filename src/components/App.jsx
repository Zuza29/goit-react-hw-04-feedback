import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { scoreKeys } from 'constants/scoreKeys';
import { Section } from './Section/Section';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const App = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = event => {
    if (event.target.textContent === 'Positive') {
      setPositive(positive + 1);
    }
    if (event.target.textContent === 'Negative') {
      setNegative(negative + 1);
    }
    if (event.target.textContent === 'Neutral') {
      setNeutral(neutral + 1);
    }
    setTotal(total + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    const value = Math.round((positive / total) * 100);
    if (positive === 0) {
      return '-';
    } else {
      return value + '%';
    }
  };

  return (
    <div className="App">
      <Section title="Espresso Coffee">
        <FeedbackOptions
          scoreKeys={scoreKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Stats">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            scoreKeys={scoreKeys}
            positive={positive}
            negative={negative}
            neutral={neutral}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

App.propTypes = {
  positive: PropTypes.number,
  negative: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
};

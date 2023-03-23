import React, { Component } from 'react';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { scoreKeys } from 'constants/scoreKeys';
import { Section } from './Section/Section';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    positive: 0,
    neutral: 0,
    negative: 0,
    total: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'Positive') {
      this.setState({ positive: this.state.positive + 1 });
    }
    if (e.target.textContent === 'Negative') {
      this.setState({ negative: this.state.negative + 1 });
    }
    if (e.target.textContent === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }

    this.setState({ total: this.state.total + 1 });
  };

  countPositiveFeedbackPercentage = () => {
    const { positive, total } = this.state;
    const value = Math.round((positive / total) * 100);
    if (positive === 0) {
      return '-';
    } else {
      return value + '%';
    }
  };

  render() {
    const { positive, negative, neutral, total } = this.state;
    return (
      <div className="App">
        <Section title="Espresso Coffee">
          <FeedbackOptions
            scoreKeys={scoreKeys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Stats">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              scoreKeys={scoreKeys}
              positive={positive}
              negative={negative}
              neutral={neutral}
              total={total}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            
            />
          )}
        </Section>
      </div>
    );
  }
}

App.propTypes = {
  positive: PropTypes.number,
  negative: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
};
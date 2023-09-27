import FeedbackOptions from './feedback';
import Notification from './notification';
import { Component } from 'react';
import Statistics from './statistics';
import Section from './section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const feedbackArr = Object.values(this.state);
    let total = feedbackArr.reduce((prev, el) => prev + el, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positive = (good / this.countTotalFeedback()) * 100;
    return Math.floor(positive);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          )}
        </Section>
      </>
    );
  }
}

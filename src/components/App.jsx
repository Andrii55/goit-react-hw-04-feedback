import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
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

  countTotal = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotal();
    const positivePercentage = this.countPositivePercentage();
    return (
      <>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLiveFeedback={this.onLeaveFeedback}
          />
          {total > 0 ? (
            <Statistics
              positivePercentage={positivePercentage}
              {...this.state}
              total={total}
            />
          ) : (
            <Notification message="No feedback" />
          )}
        </Section>
      </>
    );
  }
}

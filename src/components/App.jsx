import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotal = () => {
    return Object.values({ good, neutral, bad }).reduce(
      (acc, item) => acc + item,
      0
    );
  };

  const countPositivePercentage = () => {
    const total = countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotal();
  const positivePercentage = countPositivePercentage();
  return (
    <>
      <Section>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLiveFeedback={onLeaveFeedback}
        />
        {total > 0 ? (
          <Statistics
            positivePercentage={positivePercentage}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
          />
        ) : (
          <Notification message="No feedback" />
        )}
      </Section>
    </>
  );
};

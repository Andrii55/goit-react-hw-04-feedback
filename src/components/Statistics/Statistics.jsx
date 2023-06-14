import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Statistics</h2>
      <ul>
        <li>
          <p className={css.items}>Good: {good}</p>
        </li>
        <li>
          <p className={css.items}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.items}>Bad: {bad}</p>
        </li>
        <li>
          <p className={css.items}>total: {total}</p>
        </li>
        <li>
          <p className={css.items}>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

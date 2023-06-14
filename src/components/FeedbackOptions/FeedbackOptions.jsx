import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLiveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.btn}
            type="button"
            onClick={() => onLiveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

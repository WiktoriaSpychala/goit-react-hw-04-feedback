import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={() => handleClick(option)}
            key={option}
            className={css.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func,
}.isRequired;


import { FeedbackButton, FeedbackContainer } from './FeedbackContainer.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <FeedbackButton
          option={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};

export default FeedbackOptions;

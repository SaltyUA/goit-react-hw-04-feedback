import styled from 'styled-components';

export const FeedbackContainer = styled('div')(() => {
  return {
    display: `flex`,
    gap: 10,
    justifyContent: `center`,
    alignItems: `center`,
  };
});

export const FeedbackButton = styled('button')(({ option }) => {
  let color;
  if (option === 'good') {
    color = `#3dad4e`;
  } else {
    color = option === 'neutral' ? `#c5cc3d` : `#ad3d3d`;
  }
  return {
    backgroundColor: color,
    cursor: 'pointer',
    padding: `5px 10px`,
    borderRadius: 10,
    fontWeight: 700,
    textTransform: 'capitalize',
  };
});

const { default: styled } = require('styled-components');

export const SectionContainer = styled('section')(() => {
  return {
    margin: `0 auto`,
    maxWidth: `50vw`,
    minWidth: 320,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(139,94,86,0.5) 48%, rgba(0,0,0,0.8) 100%)`,
    backgroundSize: 'cover',
    padding: 20,
  };
});

export const SectionText = styled('h2')(() => {
  return {
    color: `#fff`,
    marginBottom: `1rem`,
  };
});

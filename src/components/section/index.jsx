import { SectionContainer, SectionText } from './SectionContainer.styled';

const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <SectionText>{title}</SectionText>
      {children}
    </SectionContainer>
  );
};

export default Section;

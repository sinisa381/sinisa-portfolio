import styled from 'styled-components';
import Text from '../../components/Text';
import { Title } from '../../components/Card';
import { Space } from '../../components/Space';
import Container from '../../components/Container';
import Computers from '../../components/Computers';
const CARDS = [
  'React (Hooks and Context)',
  'Javascript',
  'SCSS',
  'HTML',
  'Styled Components',
  'Material UI',
  'Tailwind',
  'Redux',
  'Bootstrap',
];
console.log(CARDS.slice(0, 5));
console.log(CARDS.slice(5));
function About() {
  return (
    <>
      <Container>
        <StyledTitle>About Sinisa</StyledTitle>
      </Container>
      <StyledSpace height={40} />
      <Wrapper>
        <TextWrapper>
          <Container>
            <StyledText>
              Hi! I am a self taught front-end developer. I have around four
              years of experience coding responsive and user-friendly websites.
              Curious by nature, I have always been oriented on tasks that
              require problem solving and thinking out of the box solutions.
            </StyledText>
            <Space height={23} />
            <StyledText>
              Focused on clients needs by creating robust websites with a
              complex functionality and applying various animations. Working
              both as a freelancer and employee has taught me what it really
              means to have a good collaboration and a strong teamwork.
            </StyledText>
            <Space height={23} />
            <StyledText>
              Besides development, I am passionate about basketball and
              cryptocurrency.
              <br />
              At the moment, I am working on some projects on the side and
              looking for new work opportunities.
            </StyledText>
          </Container>
        </TextWrapper>
        <StyledSpace width={50} maxHeight={100} height={0} />
        <ImageWrapper bg={'rgba(49, 49, 49, 0.4)'}>
          <Image src={'/ofish.png'} />
        </ImageWrapper>
      </Wrapper>
      <StyledSpace height={90} maxHeight={50} />
      <Container>
        <div>
          <Title>Technologies</Title>
        </div>
        <StyledSpace height={63} maxHeight={30} />
        <Wrapper>
          <ul>
            {CARDS.slice(0, 5).map((tech, i, arr) => (
              <StyledText
                key={i}
                style={{ marginBottom: i !== arr.length && '25px' }}
              >
                {tech}
              </StyledText>
            ))}
          </ul>
          <ul>
            {CARDS.slice(5).map((tech, i, arr) => (
              <StyledText
                key={i}
                style={{ marginBottom: i !== arr.length && '25px' }}
              >
                {tech}
              </StyledText>
            ))}
          </ul>
          <Computers />
        </Wrapper>
        <StyledSpace height={145} maxHeight={90} />
      </Container>
    </>
  );
}

export default About;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 465px;
`;

export const StyledTitle = styled(Text)`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const StyledSpace = styled(Space)`
  @media (max-width: 1000px) {
    height: ${({ maxHeight }) => maxHeight && maxHeight}px;
  }
`;

const StyledText = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #313131;
`;

const Image = styled.img`
  max-width: 520px;
  width: 100%;
  /* height: 269px; */
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg && bg};
  padding: 67px 56px;
  @media (max-width: 1024px) {
    padding: 47px 36px;
  }
`;

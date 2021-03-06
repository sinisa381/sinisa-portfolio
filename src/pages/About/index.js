import { useContext } from "react";
import styled from "styled-components";
import Computers from "../../components/Computers";
import Container from "../../components/Container";
import Margin from "../../components/Margin";
import { Space } from "../../components/Space";
import Text, { Title as CardTitle } from "../../components/Text";
import { ViewportContext } from "../../context";
const CARDS = [
  "React",
  "Javascript",
  "SCSS",
  "HTML",
  "Styled Components",
  "Material UI",
  "Tailwind",
  "Redux",
  "Bootstrap",
];
function About() {
  const { width } = useContext(ViewportContext);
  const isMobile = width < 900;
  return (
    <>
      <Container>
        <Margin>
          <Wrapper>
            <TextWrapper>
              <Container>
                <StyledTitle style={{ position: "relative" }} textAlign="left">
                  About Sinisa
                </StyledTitle>
                <StyledSpace height={60} maxHeight={40} />
                <StyledText>
                  Hi! I am a front-end developer coding responsive and
                  user-friendly websites and web applications. Curious by
                  nature, I have always been oriented on tasks that require
                  problem solving and thinking out of the box solutions.
                </StyledText>
                <Space height={23} />
                <StyledText>
                  Focused on clients' needs by creating robust websites with a
                  complex functionality and applying various animations. The
                  experience working in this area has taught me how important it
                  is to have a good collaboration, strong teamwork and
                  opportunities to bring projects into reality.
                </StyledText>
                <Space height={23} />
                <StyledText>
                  <br />
                </StyledText>
              </Container>
            </TextWrapper>
            <StyledSpace width={50} maxHeight={40} height={60} />
            <Image src="/tech.png" />
          </Wrapper>
        </Margin>
        <StyledSpace height={60} maxHeight={40} />
      </Container>
      <Container>
        <Margin>
          <Title>Technologies</Title>
        </Margin>
        <StyledSpace height={60} maxHeight={40} />
        <Container>
          <Margin>
            <Wrapper>
              <ul>
                {CARDS.slice(0, 5).map((tech, i, arr) => (
                  <StyledText
                    key={i}
                    style={{ marginBottom: i !== arr.length && "25px" }}
                  >
                    {tech}
                  </StyledText>
                ))}
              </ul>
              {isMobile && <div style={{ margin: "0 auto" }}></div>}
              <ul>
                {CARDS.slice(5).map((tech, i, arr) => (
                  <StyledText
                    key={i}
                    style={{ marginBottom: i !== arr.length && "25px" }}
                  >
                    {tech}
                  </StyledText>
                ))}
              </ul>
              <Computers />
            </Wrapper>
          </Margin>
        </Container>
      </Container>
      <StyledSpace height={145} maxHeight={90} />
    </>
  );
}

export default About;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
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
  color: #000000;
  text-align: left;
  margin: 0;
  padding: 0;
  width: 100%;
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
  max-height: 483px;
  height: 100%;
  align-self: flex-end;
  object-fit: contain;
  max-width: 522px;
  width: 100%;
`;

const Title = styled(CardTitle)`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #000000;
`;

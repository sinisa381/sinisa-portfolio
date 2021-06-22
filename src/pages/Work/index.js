import styled from "styled-components";
import Text from "../../components/Text";
import { Space } from "../../components/Space";
import { CardRight, CardLeft } from "../../components/Card";
import Container from "../../components/Container";
import Margin from "../../components/Margin";

const CARDS = [
  {
    src: "/ofish.png",
    title: "O Fish",
    text: "O Fish, designed to be a fish shop, is one of the projects I coded when working at Creative Development Hub - TheHive.",
    href: "https://ofish.thehive.rs/",
    bg: "rgba(135, 198, 255, 0.5)",
  },
  {
    src: "/packman.png",
    title: "Packman",
    text: "Website coded as a presentation for app which can easily and quickly deliver packages throughout the city and much more. This project was done as being a part of the team at Creative Development Hub - TheHive.",
    href: "https://vibrant-borg-fc07a5.netlify.app/",
    bg: "rgba(253, 213, 40, 0.5)",
  },
  {
    src: "/marija.png",
    title: "Gift Shop",
    text: "Initial idea of the website was to help users customize gifts for loved ones. I was involved in the project during my freelance time.",
    href: "https://60cd14c1bc28c9949d0ff968--gallant-noether-78913e.netlify.app/",
    bg: "#A5D2AF",
  },
];
function Work() {
  return (
    <FullWidth>
      <Container>
      <Margin>
        <CodeText>HELLO</CodeText>
      </Margin>
      </Container>
        <Space height={25} />
      <Container>
        <Margin>
        <Copy>
          <StyledTitle>
            Sinisa Colic is a front-end developer,
            <br /> building functional and intuitive websites.
          </StyledTitle>
        </Copy>
        </Margin>
      </Container>
      <StyledSpace height={40} />
      <Container>
        <Margin>
          <SkillsWrapper>
            <SkillsText>REACT</SkillsText>
            <Line />
            <SkillsText>JAVASCRIPT</SkillsText>
            <Line />
            <SkillsText>SCSS</SkillsText>
          </SkillsWrapper>
        </Margin>
      </Container>
      <StyledSpace height={219} maxHeight={120} />
      <Flex>
        {CARDS.map((card, i) => {
          if (i % 2 === 0) {
            return <CardLeft key={i} {...card} />;
          } else {
            return <CardRight key={i} {...card} />;
          }
        })}
      </Flex>
    </FullWidth>
  );
}

const Flex = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Work;

const Copy = styled.div`
  max-width: 900px;
  width: 100%;
`;

const CodeText = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2em;
  color: rgba(49, 49, 49, 0.6);
  width: 100%;
`;

const SkillsText = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color:rgba(49, 49, 49, 0.6);
`;

const StyledTitle = styled(Text)`
  /* margin: 0 15px; */
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const SkillsWrapper = styled.div`
  display: flex;
  font-family: Poppins;
  justify-content: flex-start;
  align-items: center;
  max-width: 296px;
  width: 100%;
  align-self: flex-start;
`;

const Line = styled.div`
  height: 1px;
  width: 30px;
  background: rgba(49, 49, 49, 0.5);
  margin: 0px 15px;
  @media (max-width: 900px) {
    margin: 0px 15px;
  }
`;

const StyledSpace = styled(Space)`
  @media (max-width: 900px) {
    height: ${({ maxHeight }) => maxHeight && maxHeight}px;
  }
`;

const FullWidth = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
`;

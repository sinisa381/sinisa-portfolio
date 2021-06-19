import styled from "styled-components";
import Text from "../../components/Text";
import { Space } from "../../components/Space";
import Card from "../../components/Card";

const CARDS = [
  {
    src: "/ofish.png",
    title: "O Fish",
    text: "O Fish, designed to be a fish shop, is one of the projects I coded when working at Creative Development Hub - TheHive.rs",
    href: "https://ofish.thehive.rs/",
    bg: "rgba(135, 198, 255, 0.5);",
  },
  {
    src: "/packman.png",
    title: "Podcast Website",
    text: "Website coded as a platform to easily and quickly deliver packages throughout the city and much more. This project was done as a part of the team at Creative Development Hub - TheHive.",
    href: "https://vibrant-borg-fc07a5.netlify.app/",
    bg: "rgba(248, 203, 87, 0.8)",
  },
  {
    src: "/marija.png",
    title: "O Fish",
    text: "Initial idea of the website was to help users to customize gifts for loved ones. I was involved in the project during my freelance time.",
    href: "https://60cd14c1bc28c9949d0ff968--gallant-noether-78913e.netlify.app/",
    bg: "#A5D2AF",
  },
];
function Work() {
  return (
    <div>
      <Padding>
        <CodeText>HELLO</CodeText>
        <Space height={25} />
        <Copy width={"Sinisa Colic is a front-end developer,".length}>
          <StyledTitle>
            Sinisa Colic is a front-end developer,
            <br /> building functional and intuitive websites.
          </StyledTitle>
        </Copy>
      </Padding>
      <StyledSpace height={40} />
      <Padding>
        <SkillsWrapper>
          <SkillsText>REACT</SkillsText>
          <Line />
          <SkillsText>JAVASCRIPT</SkillsText>
          <Line />
          <SkillsText>SCSS</SkillsText>
        </SkillsWrapper>
      </Padding>
      <StyledSpace height={219} maxHeight={120} />
      <Flex>
        {CARDS.map((card, i) => (
          <div key={i}>
            <Card key={i} {...card} order={i % 2} />
            <StyledSpace height={145} maxHeight={90} />
          </div>
        ))}
      </Flex>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 100%;
  max-width: 1150px;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr); */
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
  color: rgba(49, 49, 49, 0.8);
`;

const SkillsText = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: #313131;
`;

const StyledTitle = styled(Text)`
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
`;

const Line = styled.div`
  height: 1px;
  width: 30px;
  background: rgba(49, 49, 49, 0.5);
  margin: 0px 15px;
`;

const StyledSpace = styled(Space)`
  @media (max-width: 900px) {
    height: ${({ maxHeight }) => maxHeight && maxHeight}px;
  }
`;

const Padding = styled.div`
  padding: 0 15px;
`;

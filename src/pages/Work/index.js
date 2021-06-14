import styled from 'styled-components';
import Text from '../../components/Text';
import { Space } from '../../components/Space';
import Card from '../../components/Card';
import Container from '../../components/Container';
const CARDS = [
  {
    src: '/ofish.png',
    title: 'O Fish',
    text: 'Designed to be a fish shop, is one of the projects I made working at Creative Development Hub - TheHive.rs.',
    href: 'https://ofish.thehive.rs',
    bg: 'rgba(135, 198, 255, 0.5);',
  },
  {
    src: '/ofish.png',
    title: 'Podcast Website',
    text: 'Website coded as a platform where users can find  collection of podcasts across globe.',
    href: 'https://ofish.thehive.rs',
    bg: '#FF9B8E',
  },
  {
    src: '/ofish.png',
    title: 'O Fish',
    text: 'Designed to be a fish shop, is one of the projects I made working at Creative Development Hub - TheHive.rs.',
    href: 'https://ofish.thehive.rs',
    bg: '#A5D2AF',
  },
];
function Work() {
  return (
    <div>
      <Container>
        <CodeText>HELLO</CodeText>
        <Space height={25} />
        <Copy width={'Sinisa Colic is a front-end developer,'.length}>
          <StyledTitle>
            Sinisa Colic is a front-end developer,
            <br /> building functional and intuitive websites.
          </StyledTitle>
        </Copy>
        <StyledSpace height={40} />
        <SkillsWrapper>
          <SkillsText>REACT</SkillsText>
          <Line />
          <SkillsText>JAVASCRIPT</SkillsText>
          <Line />
          <SkillsText>SCSS</SkillsText>
        </SkillsWrapper>
      </Container>
      <StyledSpace height={219} maxHeight={120} />
      {CARDS.map((card, i) => (
        <div key={i}>
          <Card key={i} {...card} order={i % 2} />
          <StyledSpace height={145} maxHeight={90} />
        </div>
      ))}
    </div>
  );
}

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

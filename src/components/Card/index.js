import styled from "styled-components";
import Text, { Title as CardTitle } from "../../components/Text";
import Container from "../../components/Container";
import { Space } from "../../components/Space";
export default function Card({ bg, src, title, text, href, order }) {
  return (
    <Wrapper>
      <ImageWrapper bg={bg} order={order}>
        <Image src={src} />
      </ImageWrapper>
      <StyledContainer>
        <Block order={order}>
          <Spacer />
          <Title>{title}</Title>
          <StyledSpace height={60} />
          <StyledText>{text}</StyledText>
          <Space height={20} />
          <Button href={href} target="_blank" rel="noopener noreferrer">
            <ButtonText as="span">View site</ButtonText>
          </Button>
          <StyledSpace height={20} />
        </Block>
      </StyledContainer>
    </Wrapper>
  );
}

const Block = styled.div`
  max-width: 450px;
  width: 100%;
  margin-left: ${({ order }) => order === 0 && "auto"};
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const Image = styled.img`
  max-width: 441px;
  width: 100%;
  /* height: 269px; */
`;
const ImageWrapper = styled.div`
  order: ${({ order }) => order === 1 && 2};
  @media (max-width: 1000px) {
    order: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg && bg};
  padding: 43px 69px;
  @media (max-width: 1024px) {
    padding: 23px 39px;
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  padding: 0px 14px;
  border: 2px solid rgba(49, 49, 49, 0.5);
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.05));
  border-radius: 5px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: rgba(49, 49, 49, 0.6);
  max-width: 100px;
  transition: all 250ms;
  &:hover {
    color: rgba(49, 49, 49, 1);
    border: 2px solid rgba(49, 49, 49, 1);
  }
`;

export const Title = styled(CardTitle)`
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

const StyledText = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #313131;
`;

const ButtonText = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const Spacer = styled.div`
  height: 0;
  height: 20px;
  @media (max-width: 900px) {
    height: 20px;
  }
`;

const StyledSpace = styled(Space)`
  @media (max-width: 900px) {
    height: 40px;
  }
`;

const StyledContainer = styled(Container)`
  @media (max-width: 900px) {
    /* order: ${({ order }) => (order === 1 ? 2 : 0)}; */
    order: -1;
    margin: 0 auto;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

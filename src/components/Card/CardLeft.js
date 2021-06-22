import { useContext } from "react";
import styled from "styled-components";
import Text, { Title as CardTitle } from "../Text";
import { Space } from "../Space";
import { ViewportContext } from "../../context";
import CardMobile from "./CardMobile";
import Container from "../../components/Container";
import Margin from "../Margin";

const CardLeft = (props) => {
  const { width } = useContext(ViewportContext);
  const isMobile = width < 768;
  if (isMobile) {
    return <CardMobile {...props} />;
  } else {
    return (
      <MainContainer>
        <Wrapper>
          <ImageWrapper bg={props.bg}>
            <Image src={props.src} />
          </ImageWrapper>
          <Space width={50} />
          <Margin>
            <StyledContainer>
              <Block>
                <Title>{props.title}</Title>
                <StyledSpace height={60} />
                <StyledText>{props.text}</StyledText>
                <Space height={20} />
                <Button
                  href={props.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonText as="span">View site</ButtonText>
                </Button>
                <StyledSpace height={20} />
              </Block>
            </StyledContainer>
          </Margin>
          <Space width={98} />
        </Wrapper>
        <StyledSpace height={145} />
      </MainContainer>
    );
  }
};

export default CardLeft;

const StyledContainer = styled.div`
  max-width: 446px;
  width: 100%;
`;

const Block = styled.div`
  max-width: 496px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;
const Image = styled.img`
  max-width: 361px;
  width: 100%;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
`;
const ImageWrapper = styled.div`
  background: ${({ bg }) => bg && bg};
  padding: 108px 83px;
  border-radius: 10px;
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

const StyledSpace = styled(Space)`
  @media (max-width: 1000px) {
    height: 40px;
  }
`;

const MainContainer = styled(Container)`
  justify-self: flex-start;
`;

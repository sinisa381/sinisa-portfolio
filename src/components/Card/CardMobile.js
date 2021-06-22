import styled from "styled-components";
import Text, { Title } from "../Text";
import Margin from "../Margin";
import { Space } from "../Space";

const CardMobile = ({ bg, src, title, text, href }) => {
  return (
    <Outer>
      <Wrapper>
        <Margin>
          <Title fontSize={36} fontWeight={500}>
            {title}
          </Title>
          <Space height={20} />
          <StyledText>{text}</StyledText>
          <Space height={15} />
          <StyledContainer></StyledContainer>
        </Margin>
        <Space width={25} />
        <ImageWrapper bg={bg}>
          <Image src={src} />
        </ImageWrapper>
        <Block>
          <Margin>
            <Space height={15} />
            <Button href={href} target="_blank" rel="noopener noreferrer">
              <ButtonText as="span">View site</ButtonText>
            </Button>
          </Margin>
        </Block>
      </Wrapper>
      <Space height={65} />
    </Outer>
  );
};

export default CardMobile;

const Outer = styled.div`
  max-width: 1064px;
  width: 100%;
`;

const StyledContainer = styled.div`
  max-width: 446px;
  width: 100%;
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
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
  flex-wrap: wrap;
`;
const Image = styled.img`
  max-width: 361px;
  width: 100%;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const ImageWrapper = styled.div`
  /* background: ${({ bg }) => bg && bg}; */
  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0px;
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  padding: 0px 44px;
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

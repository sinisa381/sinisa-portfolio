import { useContext } from "react";
import styled from "styled-components";
import Text, { Title as CardTitle } from "../../components/Text";
import { Space } from "../../components/Space";
import { ViewportContext } from "../../context";
export default function Card({ bg, src, title, text, href, order }) {
  const { width } = useContext(ViewportContext);
  const isMobile = width < 1000;
  return (
    <>
      <Outer order={order}>
        <Wrapper>
          <ImageWrapper bg={bg} order={order}>
            <Image src={src} />
          </ImageWrapper>
          <Spacer order={order} width={25} />
          <Padding>
            <StyledContainer>
              <Block order={order}>
                <Title>{title}</Title>
                <StyledSpace height={60} />
                <StyledText>{text}</StyledText>
                {!isMobile && (
                  <>
                    <Space height={20} />
                    <Button
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonText as="span">View site</ButtonText>
                    </Button>
                  </>
                )}
                <StyledSpace height={20} />
              </Block>
            </StyledContainer>
          </Padding>
        </Wrapper>
        {isMobile && (
          <Padding>
            <Space height={20} />
            <Button href={href} target="_blank" rel="noopener noreferrer">
              <ButtonText as="span">View site</ButtonText>
            </Button>
          </Padding>
        )}
      </Outer>
    </>
  );
}

const Outer = styled.div`
  margin-left: ${({ order }) => order === 1 && "auto"};
  margin-right: ${({ order }) => order === 0 && "auto"};
`;

const StyledContainer = styled.div`
  max-width: 446px;
  width: 100%;
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;
const Padding = styled.div`
  padding: 0 15px;
`;

const Block = styled.div`
  max-width: 446px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: ${({ order }) => (order === 0 ? "flex-start" : "flex-end")};
  flex-direction: column;
  text-align: ${({ order }) => (order === 1 ? "right" : "left")};
  @media (max-width: 1000px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const Image = styled.img`
  max-width: 360px;
  width: 100%;
`;
const ImageWrapper = styled.div`
  order: ${({ order }) => order === 1 && 2};
  @media (max-width: 1000px) {
    order: 0;
  }
  background: ${({ bg }) => bg && bg};
  padding: 43px 69px;
  @media (max-width: 1000px) {
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
  @media (max-width: 1000px) {
    /* order: 1; */
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

const Spacer = styled(Space)`
  order: ${({ order }) => order === 1 && order};
`;

const StyledSpace = styled(Space)`
  @media (max-width: 1000px) {
    height: 40px;
  }
`;

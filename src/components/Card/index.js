import styled from 'styled-components';
import Text from '../../components/Text';
import { Space } from '../../components/Space';
export default function Card({ bg, src, title, text, href, order }) {
  return (
    <Wrapper>
      <ImageWrapper bg={bg} order={order}>
        <Image src={src} />
      </ImageWrapper>
      <div>
        <Title>{title}</Title>
        <Space height={60} />
        <StyledText>{text}</StyledText>
        <Space height={20} />
        <Button href={href} target="_blank" rel="noopener noreferrer">
          <ButtonText as="span">View site</ButtonText>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;
const Image = styled.img`
  width: 341px;
  height: 269px;
`;
const ImageWrapper = styled.div`
  order: ${({ order }) => (order === 1 ? 2 : 0)};
  margin-right: ${({ order }) => (order === 0 ? 56 : 0)}px;
  margin-left: ${({ order }) => (order === 1 ? 56 : 0)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg && bg};
  padding: 83px 109px;
  @media (max-width: 1024px) {
    padding: 43px 69px;
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
`;

const Title = styled(Text)`
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
  color: rgba(49, 49, 49, 0.6);
  padding: 5px 0;
`;

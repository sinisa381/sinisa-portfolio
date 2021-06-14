import styled from 'styled-components';
import Container from '../../components/Container';
import Mail from '../../components/Mail';
import Text from '../../components/Text';
import { StyledTitle } from '../About';
import { Space } from '../../components/Space';
function Contact() {
  return (
    <Container>
      <Wrapper>
        <StyledTitle>Lets work together!</StyledTitle>
        <Space height={100} />
        <FlexBox>
          <Mail />
          <Space width={10} />
          <StyledText>sinisa.colic89@gmail.com</StyledText>
        </FlexBox>
      </Wrapper>
    </Container>
  );
}

export default Contact;

const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const StyledText = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

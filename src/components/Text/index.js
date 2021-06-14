import styled from 'styled-components';

function Text({ children, as, ...props }) {
  return (
    <Wrapper {...props}>
      <Content as={as}>{children}</Content>
    </Wrapper>
  );
}

export const Title = ({ children, as, ...props }) => {
  return (
    <Wrapper {...props}>
      <ContentTitle as={as}>{children}</ContentTitle>
    </Wrapper>
  );
};
export default Text;

const Wrapper = styled.div`
  position: relative;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 18)}px;
  color: ${({ color }) => (color ? color : '#000000')};
`;

const Content = styled.p`
  font-size: 100%;
`;

const ContentTitle = styled(Content)`
  @media (max-width: 1024px) {
    font-size: 80%;
  }
  @media (max-width: 1024px) {
    font-size: 60%;
  }
`;

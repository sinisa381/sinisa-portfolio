import styled from "styled-components";

function Text({ children, as, ...props }) {
  return (
    <Wrapper {...props}>
      <Content as={as}>{children}</Content>
    </Wrapper>
  );
}

export default Text;

export const Title = ({ children, as, ...props }) => {
  return (
    <Wrapper {...props}>
      <ContentTitle as={as}>{children}</ContentTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 18)}px;
  color: ${({ color }) => (color ? color : "#000000")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Raleway")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 42)}px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;

const Content = styled.p`
  font-size: 100%;
`;

const ContentTitle = styled(Content)`
  @media (max-width: 1024px) {
    font-size: 80%;
  }
  @media (max-width: 380px) {
    font-size: 70%;
  }
`;

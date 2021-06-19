import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import { Space } from "./components/Space";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Text from "./components/Text";

const NAV_DATA = [
  {
    text: "work",
    linkTo: "/",
  },
  {
    text: "about",
    linkTo: "/about",
  },
  {
    text: "contact",
    linkTo: "/contact",
  },
];

function App() {
  return (
    <Wrapper>
      <Space height={17} />
      <Router>
        <Container>
          <Navigation data={NAV_DATA} />
        </Container>
        <StyledSpace height={167} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Work />
          </Route>
        </Switch>
      </Router>
      <Footer>
        <Container>
          <FooterWrapper>
            <StyledText>&copy; Sinisa Colic</StyledText>
          </FooterWrapper>
        </Container>
      </Footer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  font-family: Poppins, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const StyledText = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #313131;
`;

const StyledSpace = styled(Space)`
  @media (max-width: 900px) {
    height: 100px;
  }
`;

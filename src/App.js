import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Space } from './components/Space';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Text from './components/Text';

const NAV_DATA = [
  {
    text: 'work',
    linkTo: '/',
  },
  {
    text: 'about',
    linkTo: '/about',
  },
  {
    text: 'contact',
    linkTo: '/contact',
  },
];

function App() {
  return (
    <Wrapper>
      <Container>
        <Space height={17} />
        <Router>
          <header>
            <Navigation data={NAV_DATA} />
          </header>
          <Space height={167} />
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
      </Container>
      <Footer>
        <Container>
          <FooterWrapper>
            <StyledText>sinisa.colic89@gmail.com</StyledText>
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

const Container = styled.div`
  width: 100%;
  max-width: 1136px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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

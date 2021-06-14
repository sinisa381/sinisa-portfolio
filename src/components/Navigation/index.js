import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
function Navigation({ data }) {
  const [selected, setSelected] = useState(0);
  return (
    <nav>
      <NavigationContainer>
        <AnimateSharedLayout>
          {data.map((item, i) => (
            <Wrapper animate key={item.text} onClick={() => setSelected(i)}>
              {i === selected && <Underline layoutId="underline" />}
              <StyledLink to={item.linkTo}>
                {item.text.toUpperCase()}
              </StyledLink>
            </Wrapper>
          ))}
        </AnimateSharedLayout>
      </NavigationContainer>
    </nav>
  );
}
export default Navigation;

const NavigationContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    &:not(:last-of-type) {
      margin-right: 50px;
      @media (max-width: 900px) {
        margin-right: 25px;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #000000;
`;

const Underline = styled(motion.div)`
  width: 100%;
  height: 1px;
  border-radius: 4px;
  position: absolute;
  bottom: -4px;
  background: rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled(motion.li)`
  position: relative;
`;

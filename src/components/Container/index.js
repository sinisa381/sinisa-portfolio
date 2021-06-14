import React from 'react';
import styled from 'styled-components';

export default function Container({ children, className }) {
  return (
    <Wrapper className={className}>
      <Margin>{children}</Margin>
    </Wrapper>
  );
}

const Margin = styled.div`
  margin: 0;
  @media (max-width: 1024px) {
    margin: 0 15px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0;
  @media (max-width: 1024px) {
    margin: 0 15px;
  }
`;

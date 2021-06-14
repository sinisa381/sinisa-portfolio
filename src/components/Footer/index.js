import React from 'react';
import styled from 'styled-components';

export default function Footer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.footer`
  background: rgba(228, 227, 227, 0.8);
  min-height: 141px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;
`;

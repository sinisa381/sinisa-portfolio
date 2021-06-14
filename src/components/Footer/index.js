import React from 'react';
import styled from 'styled-components';

export default function Footer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.footer`
  background: #e4e3e3;
  min-height: 241px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;
`;

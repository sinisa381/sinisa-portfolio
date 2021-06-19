import React from "react";
import styled from "styled-components";

export default function Footer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.footer`
  background: rgba(228, 227, 227, 0.8);
  width: 100%;
  display: grid;
  place-items: center;
  padding: 40px 0;
`;

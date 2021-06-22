import React from "react";
import styled from "styled-components";

export default function Container({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1142px;
  /* @media (max-width: 1024px) {
    padding: 0 15px;
  } */
`;

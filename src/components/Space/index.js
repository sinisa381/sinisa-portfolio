import styled from 'styled-components';

export const Space = styled.div`
  height: ${({ height }) => height && height}px;
  width: ${({ width }) => width && width}px;
`;

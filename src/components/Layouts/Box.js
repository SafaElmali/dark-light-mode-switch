import styled from "styled-components/macro";

export const Box = styled.div`
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  transition: ${({ transition }) => transition};
`;

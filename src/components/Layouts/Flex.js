import styled from "styled-components/macro";
import { Box } from "./Box";

const DIRECTIONS = {
  baseline: "baseline",
  center: "center",
  start: "flex-start",
  end: "flex-end",
  stretch: "stretch",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export const Flex = styled(Box)`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ align }) => DIRECTIONS[align]};
  display: flex;
  flex-basis: ${({ basis }) => basis};
  flex-direction: ${({ direction }) => direction};
  flex-flow: ${({ flow }) => flow};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => DIRECTIONS[justify]};
`;

export const HFlex = styled(Flex)`
  flex-direction: row;
`;

export const VFlex = styled(Flex)`
  flex-direction: column;
`;

import styled from "styled-components/macro";
import Light from "./components/Light/Light";
import Dark from "./components/Dark/Dark";

const Switch = ({ theme, setTheme }) => {
  return (
    <Button
      theme={theme}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Circle theme={theme}>
        <Dark theme={theme} />
        <Light theme={theme} />
      </Circle>
    </Button>
  );
};

export default Switch;

const Button = styled.button`
  background: transparent;
  border-radius: 50%;
  border: transparent;
  cursor: pointer;
  height: 150px;
  padding: 4px;
  transition: all 0.4s ease-in-out;
  width: 150px;
  overflow: hidden;
  &:focus {
    background: #fff;
    ${({ theme }) =>
      theme === "light"
        ? `
      box-shadow: 0 0 0 5px #9F8002;
     `
        : `
      box-shadow: 0 0 0 5px #F8BD23;
    `}
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 4px solid #6b7280;
  height: 100%;
  position: relative;
  transition: border-color 0.5s ease-in-out;
  width: 100%;
  ${({ theme }) =>
    theme === "light"
      ? `
      background: #7DD3FC;
      border-color: #6b7280;
        &:hover {
          border-color: #000;
        }
    `
      : `
      background: #000000;
      border-color: #6b7280;
        &:hover {
         border-color: #fff;
    `}
`;

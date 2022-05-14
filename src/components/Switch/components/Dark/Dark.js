import styled from "styled-components/macro";

const Dark = ({ theme }) => {
  const isDarkMode = theme === "dark";

  return (
    <DarkContainer isDarkMode={isDarkMode}>
      <Moon />
      <MiddleStarContainer>
        <SmallStar />
        <BigStar />
        <SmallStar />
      </MiddleStarContainer>
      <BottomStarContainer>
        <SmallStar />
        <BigStar />
        <SmallStar />
      </BottomStarContainer>
    </DarkContainer>
  );
};

export default Dark;

const DarkContainer = styled.div`
  background: #000000;
  border-radius: 50%;
  height: 100%;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  transition: all 0.4s ease-in-out;
  ${({ isDarkMode }) =>
    isDarkMode
      ? `
      opacity:1;
      transform: translate(0%, 0%);
      `
      : `
      opacity: 0;
      transform: translate(100%, 100%);
    `}
  width: 100%;
`;

const Moon = styled.div`
  background: #000;
  border-radius: 50%;
  box-shadow: -10px 10px 0px 4px #fff;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
`;

const BigStar = styled.div`
  color: #fff089;
  background-color: currentColor;
  border-radius: 50%;
  height: 8px;
  position: absolute;
  top: 11px;
  left: 3px;
  width: 20px;
  &::after {
    background-color: currentColor;
    border-radius: 50%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    transform: rotate(90deg);
    width: 100%;
  }
`;

const SmallStar = styled.div`
  background: #fff089;
  border-radius: 15px;
  height: 10px;
  position: absolute;
  width: 3px;
  &::after {
    background: #fff089;
    border-radius: 15px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(90deg);
    width: 100%;
  }
`;

const MiddleStarContainer = styled.div`
  left: 15px;
  position: absolute;
  top: 50px;
  ${SmallStar}:nth-child(1) {
    transform: translateY(20px);
  }
`;

const BottomStarContainer = styled.div`
  bottom: 45px;
  position: absolute;
  right: 55px;
  ${SmallStar}:nth-child(1) {
    transform: translateY(20px);
  }
`;

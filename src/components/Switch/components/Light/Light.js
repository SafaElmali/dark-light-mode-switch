import styled from "styled-components";

const Light = ({ theme }) => {
  const isLightMode = theme === "light";
  const lineList = [
    {
      x: -14,
      y: 9,
      deg: 0,
    },
    {
      x: -9,
      y: -7,
      deg: 45,
    },
    {
      x: 7,
      y: -12,
      deg: 90,
    },
    {
      x: 22,
      y: -8,
      deg: 135,
    },
    {
      x: 27,
      y: 8,
      deg: 180,
    },
    {
      x: 22,
      y: 24,
      deg: 225,
    },
    {
      x: 7,
      y: 28,
      deg: 270,
    },
    {
      x: -8,
      y: 24,
      deg: 325,
    },
  ];

  return (
    <LightContainer isLightMode={isLightMode}>
      <Sun>
        {lineList.map((line, index) => (
          <SunLine key={index} top={line.y} left={line.x} rotation={line.deg} />
        ))}
      </Sun>
      <BottomCloudContainer>
        <CloudTop />
        <CloudBottom />
      </BottomCloudContainer>
      <TopCloudContainer>
        <CloudTop />
        <CloudBottom />
      </TopCloudContainer>
    </LightContainer>
  );
};

export default Light;

const LightContainer = styled.div`
  background: #7dd3fc;
  border-radius: 50%;
  height: 100%;
  opacity: 1;
  position: absolute;
  transition: all 0.4s ease-in-out;
  ${({ isLightMode }) =>
    isLightMode
      ? `
      opacity:1;
      transform: translate(0%, 0%);
      `
      : `
      opacity: 0;
      transform: translate(-100%, 100%);
    `}
  width: 100%;
`;

const Sun = styled.div`
  background-color: currentColor;
  border-radius: 50%;
  color: #facd13;
  height: 24px;
  left: 35px;
  position: absolute;
  top: 30px;
  width: 24px;
`;

const BottomCloudContainer = styled.div`
  bottom: 25px;
  left: 25px;
  position: absolute;
`;

const TopCloudContainer = styled.div`
  bottom: 50px;
  position: absolute;
  right: 30px;
`;

const CloudTop = styled.div`
  background: #fff;
  border-radius: 50%;
  box-shadow: 1.1rem 0.5rem 0px 1px #fff;
  height: 22px;
  left: 3px;
  position: relative;
  top: -5px;
  width: 22px;
`;

const CloudBottom = styled.div`
  background: #fff;
  border-radius: 15px;
  bottom: -5px;
  height: 20px;
  left: -3px;
  position: absolute;
  width: 45px;
`;

const SunLine = styled.div`
  background: #facd13;
  border-radius: 15px;
  height: 8px;
  left: ${({ left }) => left}px;
  position: absolute;
  position: absolute;
  top: ${({ top }) => top}px;
  transform: rotate(${({ rotation }) => rotation}deg);
  width: 11px;
`;

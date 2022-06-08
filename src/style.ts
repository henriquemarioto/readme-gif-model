import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 90px;

  text-shadow: 0px 0px 20px #000;
`;

export const SubTitle = styled.h2`
  color: #03a1fc;
  font-size: 50px;

  border-right: 0.1em solid white;
  width: 19ch;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(21, end),
    blink-caret 0.5s step-end infinite alternate;

  text-shadow: 0px 0px 20px #000;

  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink-caret {
    50% {
      border-color: transparent;
    }
  }
`;

export const StarsContainer = styled.div`
  position: absolute;
  z-index: -1;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const Stars = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
`;

export const Darkness = styled.div`
  position: absolute;

  background-color: rgba(0,0,0,0.8);

  width: 100%;
  height: 100%;
`;

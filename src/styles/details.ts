import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};
`;

export const InfoMain = styled.main`
  width: 70%;
  margin: 3rem auto;

  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;

  border-radius: 30px;
  background: ${(props) => props.theme.colors.secundary};
`;

export const InfoDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const DeskLoad = keyframes`  
  from { opacity: 0; margin-left:1rem;}
  to { opacity: 1;margin-left:7rem;}
`;

const MobileLoad = keyframes`  
  from { opacity: 0; margin-left:-1rem;}
  to { opacity: 1;margin-left:0;}
`;

export const InfoSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  margin-left: 7rem;

  /* Animation */
  animation-duration: 1000ms;
  animation-fill-mode: both;
  animation-play-state: running;

  @media (max-width: 1200px) {
    animation-name: ${MobileLoad};
    margin-left: 0;
    align-items: center;
  }
  @media (min-width: 1200px) {
    animation-name: ${DeskLoad};
  }
`;

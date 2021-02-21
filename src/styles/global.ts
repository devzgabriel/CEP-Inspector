import styled, { createGlobalStyle, css, keyframes } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background:${(props) => props.theme.colors.background};
    font-size: 14px;
    font-family:"Nunito", sans-serif;
  }
`;

interface TextInterface {
  font?: string;
}

export const Text = styled.span<TextInterface>`
  color: ${(props) => props.theme.colors.text};
  ${(props) => {
    switch (props.font) {
      case "title":
        return css`
          font-weight: bold;
          font-size: 70px;
          @media (max-width: 580px) {
            font-size: 50px;
          }
        `;
      case "semi-title":
        return css`
          width: 35%;
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 22px;
          @media (max-width: 720px) {
            width: 90%;
          }
        `;
      case "paragraph":
        return css`
          margin: 0.4rem 0;
          font-weight: 400;
          font-size: 16px;
        `;
      case "author":
        return css`
          font-weight: 400;
          font-size: 18px;
        `;
      case "theme":
        return css`
          font-weight: 400;
          font-size: 18px;
          margin-right: 0.4rem;
        `;
      case "header-theme":
        return css`
          font-weight: 400;
          font-size: 18px;
          margin-right: 0.4rem;
          color: ${(props) => props.theme.colors.alternativeText};
          @media (max-width: 700px) {
            font-size: 14px;
          }
        `;
      case "header-title":
        return css`
          font-weight: 700;
          font-size: 26px;
          color: ${(props) => props.theme.colors.alternativeText};
          @media (max-width: 700px) {
            font-size: 18px;
          }
        `;
      case "info-title":
        return css`
          margin: 2rem auto 1rem;
          font-weight: 700;
          font-size: 30px;
          color: ${(props) => props.theme.colors.alternativeText};
          @media (max-width: 1200px) {
            margin-bottom: 1rem;
          }
        `;
      case "info-span":
        return css`
          font-weight: 700;
          font-size: 22px;
          color: ${(props) => props.theme.colors.alternativeText};
          @media (max-width: 1200px) {
            margin: 0.8rem 0;
          }
        `;
    }
  }};
`;

export const ExampleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Load = keyframes`  
  from { opacity: 0; margin-top:6rem;}
  to { opacity: 1;margin-top:3rem;}
`;

export const MainDiv = styled(ExampleDiv)`
  width: 80%;
  margin: 3rem auto;
  flex-direction: column;
  text-align: center;
  @media (max-width: 580px) {
    margin: 2rem auto;
  }
  /* Animation */
  animation-duration: 1000ms;
  animation-fill-mode: both;
  animation-play-state: running;
  animation-name: ${Load};
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 1rem;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

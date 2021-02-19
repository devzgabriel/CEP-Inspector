import styled, { createGlobalStyle, css } from "styled-components";

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
        `;
      case "semi-title":
        return css`
          width: 35%;
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 22px;
          @media (max-width: 700px) {
            width: 90%;
          }
        `;
      case "paragraph":
        return css`
          margin: 0.4rem 0;
          font-weight: 400;
          font-size: 18px;
          /* @media (max-width: 700px) {
            margin: 7rem auto 1rem;
          } */
        `;
      case "author":
        return css`
          font-weight: 400;
          font-size: 18px;
        `;
      case "theme-text":
        return css`
          font-weight: 400;
          font-size: 18px;
          margin-right: 0.4rem;
        `;
      case "header-theme-text":
        return css`
          font-weight: 400;
          font-size: 18px;
          margin-right: 0.4rem;
          color: ${(props) => props.theme.colors.alternativeText};
        `;
      case "header-title":
        return css`
          font-weight: 700;
          font-size: 26px;
          color: ${(props) => props.theme.colors.alternativeText};
        `;
    }
  }};
`;

export const ExampleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MainDiv = styled(ExampleDiv)`
  width: 80%;
  margin: 5rem auto;
  flex-direction: column;
  text-align: center;
`;

export const Footer = styled.footer`
  width: 80%;
  /* margin: 0.5rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ThemeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

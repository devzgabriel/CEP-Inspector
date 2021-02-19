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
    font-family:"Inter", sans-serif;
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
          width: 50%;
          margin-top: 1.2rem;
          font-weight: 400;
          font-size: 24px;
          @media (max-width: 700px) {
            width: 90%;
          }
        `;
      case "paragraph":
        return css`
          margin: 9rem 0 1rem;
          font-weight: 500;
          font-size: 18px;
          @media (max-width: 700px) {
            margin: 7rem auto 1rem;
          }
        `;
      case "author":
        return css`
          margin: 1rem 0 0.5rem;
          font-weight: 400;
          font-size: 18px;
        `;
    }
  }};
`;

export const ExampleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

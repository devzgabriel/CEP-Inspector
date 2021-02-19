import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: 100%;
  height: 10vh;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.background};
  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export const HomeButton = styled.button`
  height: 2.8rem;
  padding: 10px;
  font: 400 1rem Poppins;
  /* width: 3rem; */

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.alternativeText};
  background: ${(props) => props.theme.colors.secundary};
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

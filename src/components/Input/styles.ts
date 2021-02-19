import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;

  text-align: center;
  font: 400 1.2rem Poppins;
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.alternativeText};

  border: none;
  border-radius: 30px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.background};
  }
  @media (max-width: 700px) {
    border-radius: 10px;
  }
`;

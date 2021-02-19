import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

export const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  border: none;
  border-radius: 0 10px 10px 0;
  height: 2.8rem;
  padding: 20px;
  font: 400 1rem Poppins;
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

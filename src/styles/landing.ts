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
  /* width: 70%; */
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  margin: 8rem auto 8rem;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.8rem;
  padding: 20px;
  margin-top: 1.6rem;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  font: 400 1rem Poppins;

  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

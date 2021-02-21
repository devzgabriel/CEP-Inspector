import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Text, MainDiv, Footer, ThemeDiv } from "../../styles/global";
import { Container, Form, ButtonSubmit } from "../../styles/landing";
import Input from "../../components/Input";

import api from "../../services/api";

function Landing() {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  const [cepNumber, setCepNumber] = useState("");

  function setValidCepNumber(value: any) {
    value = String(value).replace(/\D/g, "");
    setCepNumber(value);
  }

  function validateCep() {
    const cepPattern = /\d{8}/g;
    const isValidCep = cepPattern.test(String(cepNumber));
    if (!isValidCep) alert("Esse não é um CEP válido, verifique novamente.");
  }

  async function handleGoToDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    validateCep();

    try {
      const { data }: any = await api.get(`inspect/${cepNumber}`).then();
      dispatch({ type: "UPDATE_CEP", payload: data });
      console.log(data);
      history.push("/details");
    } catch {
      console.warn("dont worry, the user will not recive these errors");
      alert("Esse não é um CEP válido, verifique novamente.");
    }
  }

  function handleToggleTheme() {
    dispatch({ type: "UPDATE_THEME", payload: null });
  }

  return (
    <Container id="page-landing">
      <MainDiv>
        <Text font="title">CEP Inspector</Text>
        <Text font="semi-title">
          Veja detalhes de um CEP em instantes e sem burocracias!
        </Text>

        <Form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            handleGoToDetails(event)
          }
        >
          <Input
            placeholder="01310-924"
            value={cepNumber}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setValidCepNumber(event.target.value)}
            maxLength={8}
          />
          <Text font="paragraph">*traço não é necessário</Text>

          <ButtonSubmit>Inspecionar</ButtonSubmit>
        </Form>

        <Footer>
          <Text font="author">Por Gabriel Silva</Text>

          <ThemeDiv>
            <Text font="theme">Tema</Text>
            <Switch
              onChange={handleToggleTheme}
              checked={state.theme === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              onColor={colors.primary}
              offColor={colors.primary}
              offHandleColor={colors.primary}
              onHandleColor={colors.primary}
            />
          </ThemeDiv>
        </Footer>
      </MainDiv>
    </Container>
  );
}

export default Landing;

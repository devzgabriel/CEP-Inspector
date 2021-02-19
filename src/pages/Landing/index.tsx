import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";

import { AppContext } from "../../context/AppContext";

import { Text } from "../../styles/global";
import { Container, Form, ButtonSubmit } from "../../styles/landing";
import Input from "../../components/Input";

// import api from "../../services/api";

function Landing() {
  const history = useHistory();
  const cepNumber = useRef(null);

  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  function handleGoToDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //validate CPF

    //use api

    //dispatch CPF data

    history.push("/details");

    //if err: alert user
  }

  return (
    <Container id="page-landing">
      <Text font="title">CEP Inspector</Text>
      <Text font="semi-title">
        Veja detalhes de um CEP em instantes sem burocracias!
      </Text>
      <Text font="paragraph">Digite o CEP abaixo</Text>

      <Form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleGoToDetails(event)
        }
      >
        <Input placeholder="ex: devzgabriel" ref={cepNumber} />

        <ButtonSubmit>Inspecionar</ButtonSubmit>
      </Form>

      <Text font="author">Por Gabriel Silva</Text>
    </Container>
  );
}

export default Landing;

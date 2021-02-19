import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import { Text } from "../../styles/global";

import {
  Container,
  InfoMain,
  InfoDiv,
  InfoSection,
} from "../../styles/details";

import Header from "../../components/Header";

function Landing() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Container id="page-details">
      <Header />
      <InfoMain>
        <Text font="info-title">Informações que encontramos</Text>

        <InfoDiv>
          <InfoSection>
            <Text font="info-span">CEP: 12345-678</Text>
            <Text font="info-span">Logradouro: Praça da Sé</Text>
            <Text font="info-span">Complemento: lado ímpar</Text>
            <Text font="info-span">Bairro: Sé</Text>
            <Text font="info-span">Localidade: São Paulo</Text>
          </InfoSection>

          <InfoSection>
            <Text font="info-span">UF: SP</Text>
            <Text font="info-span">IBGE: 3550308</Text>
            <Text font="info-span">GIA: 1004</Text>
            <Text font="info-span">DDD: 11</Text>
            <Text font="info-span">Siafi: 7107</Text>
          </InfoSection>
        </InfoDiv>
      </InfoMain>
    </Container>
  );
}

export default Landing;

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

function Details() {
  const {
    state: { cepInfo },
  } = useContext(AppContext);

  const verifiedData = {
    cep: cepInfo.cep !== "" ? cepInfo.cep : "Sem dados",
    logradouro: cepInfo.logradouro !== "" ? cepInfo.logradouro : "Sem dados",
    complemento: cepInfo.complemento !== "" ? cepInfo.complemento : "Sem dados",
    bairro: cepInfo.bairro !== "" ? cepInfo.bairro : "Sem dados",
    localidade: cepInfo.localidade !== "" ? cepInfo.localidade : "Sem dados",
    uf: cepInfo.uf !== "" ? cepInfo.uf : "Sem dados",
    ibge: cepInfo.ibge !== "" ? cepInfo.ibge : "Sem dados",
    gia: cepInfo.gia !== "" ? cepInfo.gia : "Sem dados",
    ddd: cepInfo.ddd !== "" ? cepInfo.ddd : "Sem dados",
    siafi: cepInfo.siafi !== "" ? cepInfo.siafi : "Sem dados",
  };

  return (
    <Container id="page-details">
      <Header />
      <InfoMain>
        <Text font="info-title">Informações que encontramos</Text>

        <InfoDiv>
          <InfoSection>
            <Text font="info-span">CEP: {verifiedData.cep} </Text>
            <Text font="info-span">Logradouro: {verifiedData.logradouro} </Text>
            <Text font="info-span">
              Complemento: {verifiedData.complemento}
            </Text>
            <Text font="info-span">Bairro: {verifiedData.bairro} </Text>
            <Text font="info-span">Localidade: {verifiedData.localidade} </Text>
          </InfoSection>

          <InfoSection>
            <Text font="info-span">UF: {verifiedData.uf}</Text>
            <Text font="info-span">IBGE: {verifiedData.ibge}</Text>
            <Text font="info-span">GIA: {verifiedData.gia}</Text>
            <Text font="info-span">DDD: {verifiedData.ddd}</Text>
            <Text font="info-span">Siafi: {verifiedData.siafi}</Text>
          </InfoSection>
        </InfoDiv>
      </InfoMain>
    </Container>
  );
}

export default Details;

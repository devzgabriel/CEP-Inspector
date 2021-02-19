import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";

import { AppContext } from "../../context/AppContext";

import { Container } from "../../styles/details";

// import api from "../../services/api";
import Header from "../../components/Header";

function Landing() {
  const history = useHistory();

  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  function handleGoToLanding(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container id="page-details">
      <Header />
    </Container>
  );
}

export default Landing;

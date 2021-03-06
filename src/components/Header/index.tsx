import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { AppContext } from "../../context/AppContext";

import { Text, ThemeDiv } from "../../styles/global";
import { HeaderDiv, HomeButton } from "./styles";

export default function Header() {
  const history = useHistory();

  const { state, dispatch } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  function handleToggleTheme() {
    dispatch({ type: "UPDATE_THEME", payload: null });
  }

  function handleGoHome() {
    history.push("/");
  }

  return (
    <HeaderDiv>
      <HomeButton onClick={handleGoHome}>Voltar</HomeButton>

      <Text font="header-title">CEP Inspector</Text>
      <ThemeDiv>
        <Text font="header-theme">Tema</Text>
        <Switch
          onChange={handleToggleTheme}
          checked={state.theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={8}
          width={30}
          handleDiameter={15}
          onColor={colors.text}
          offColor={colors.background}
          offHandleColor={colors.background}
        />
      </ThemeDiv>
    </HeaderDiv>
  );
}

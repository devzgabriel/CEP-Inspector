export interface CepInterface {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface StateType {
  theme: string;
  cep: CepInterface;
}

interface ActionType {
  type: string;
  payload: any;
}

function getStorageTheme() {
  return (
    JSON.parse(String(localStorage.getItem("cep-inspector:localTheme"))) ||
    "light"
  );
}
function getStorageCep() {
  return (
    JSON.parse(String(localStorage.getItem("cep-inspector:localCep"))) || {}
  );
}

export const initialState = {
  theme: getStorageTheme(),
  cep: getStorageCep(),
};

export default function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "UPDATE_THEME": {
      const { theme } = state;
      const newTheme = theme === "light" ? "dark" : "light";

      const newState = { ...state, theme: newTheme };
      localStorage.setItem(
        "cep-inspector:localTheme",
        JSON.stringify(newTheme)
      );

      return newState;
    }
    case "UPDATE_CEP": {
      const newCep = action.payload;
      localStorage.setItem("cep-inspector:localCep", JSON.stringify(newCep));
      return { ...state, cep: newCep };
    }
    case "UPDATE_CEP_NUMBER": {
      const newCepNumber = action.payload;
      localStorage.setItem(
        "cep-inspector:localCepNumber",
        JSON.stringify(newCepNumber)
      );
      return { ...state, cepNumber: newCepNumber };
    }

    case "RESET_CEP": {
      localStorage.clear();
      return { ...state, cep: {} };
    }

    default:
      return state;
  }
}

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
  cepInfo: CepInterface;
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
  cepInfo: getStorageCep(),
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
      return { ...state, cepInfo: newCep };
    }
    // case "UPDATE_CEP_NUMBER": {
    //   const newCepNumber = action.payload;
    //   localStorage.setItem(
    //     "cep-inspector:localCepNumber",
    //     JSON.stringify(newCepNumber)
    //   );
    //   return { ...state, cepNumber: newCepNumber };
    // }

    default:
      return state;
  }
}

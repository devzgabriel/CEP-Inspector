export interface CpfInterface {
  //look viaCep with backend
}

interface StateType {
  theme: string;
  cep: CpfInterface;
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
    case "UPDATE_CEP": {
      const newCep = action.payload;
      localStorage.setItem("cep-inspector:localCep", JSON.stringify(newCep));
      return { ...state, Cep: newCep };
    }

    case "RESET_CEP": {
      localStorage.clear();
      return { ...state, Cep: {} };
    }

    default:
      return state;
  }
}

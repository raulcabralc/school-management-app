import * as types from "../types";
import { toast } from "react-toastify";

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      toast.success("Sucesso!");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      toast.error("Erro!");
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      toast.info("Realizando request.");
      return state;
    }

    default:
      return state;
  }
}

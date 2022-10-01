import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last, func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Deu certo paizao');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro paizao');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo a requisiçao');
      return state;
    }
    default: {
      return state;
    }
  }
}

import axios from 'axios';

const API_URL  = process.env.REACT_APP_API_URL;

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

const GET_SERVICIOS = 'GET_SERVICIOS';

// reducer
export default function serviciosReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_SERVICIOS: {
      return { ...state, array: action.payload };
    }
    default:
      return state;
  }
}

// actions
export const getServiciosAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${API_URL}servicio/categorias`);
    dispatch({
      type: GET_SERVICIOS,
      payload: res.data.items,
    });
  } catch (error) {
    console.log(error);
  }
};


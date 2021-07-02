import axios from 'axios';

const API_URL  = process.env.REACT_APP_API_URL;

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

const GET_POST = 'GET_POST';

// reducer
export default function postReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_POST: {
      return { ...state, array: action.payload };
    }
    default:
      return state;
  }
}

// actions
export const getPostAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${API_URL}publicacion`);
    dispatch({
      type: GET_POST,
      payload: res.data.items,
    });
  } catch (error) {
    console.log(error);
  }
};


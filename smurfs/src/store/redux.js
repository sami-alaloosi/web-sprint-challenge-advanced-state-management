/** @format */

import axios from "axios";

// actions
const LOADING = "LOADING";
const CALL_SUCCESS = "CALL_SUCCESS";
const CALL_FAILED = "CALL_FAILED";
const NAME_ADD = "NAME_ADD";
const AGE_ADD = "AGE_ADD";
const HEIGHT_ADD = "HEIGHT_ADD";
const INPUT_CLEAR = "INPUT_CLEAR";

// action creatores

export const axiosCall = () => (dispatch) => {
  dispatch({ type: LOADING });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
    //   console.log("get", res.data);
      dispatch({ type: CALL_SUCCESS, payload:  res.data  });
    })
    .catch(() => {
      dispatch({ type: CALL_FAILED });
    });
};

export const nameChange = (value) => {
  return {
    type: NAME_ADD,
    payload: value,
  };
};

export const ageChange = (value) => {
  return {
    type: AGE_ADD,
    payload: value,
  };
};

export const heightChange = (value) => {
  return {
    type: HEIGHT_ADD,
    payload: value,
  };
};

export const clearInput = () => {
  return {
    type: INPUT_CLEAR,
  };
};

// intial state

const intialState = {
  loading: false,
  smurfs: [],
  error: "",
  name: "",
  age: "",
  height: "",
};

const smurfReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case CALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        smurfs: action.payload
      };

    case CALL_FAILED:
      return {
        ...state,
        loading: false,
        error: "Request failed with status code 404",
      };

    case NAME_ADD:
      return {
        ...state,
        name: action.payload,
      };

    case AGE_ADD:
      return {
        ...state,
        age: parseInt(action.payload),
      };

    case HEIGHT_ADD:
      return {
        ...state,
        height: action.payload,
      };

    case INPUT_CLEAR: {
      return {
        ...state,
        name: "",
        age: "",
        height: "",
      };
    }

    default:
      return state;
  }
};

export default smurfReducer;

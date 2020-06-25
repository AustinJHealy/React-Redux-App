import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
} from "../actions";

const initialState = {
  characters: [],
  error: "",
  isFetching: false,
};

function characterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default characterReducer;

import { CONSTANTS } from "../actions";

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    case CONSTANTS.DELETE_BOARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default boardOrderReducer;
import { CONSTANTS } from "../actions";
import { v4 as uuidv4 } from 'uuid';

export const setActiveBoard = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuidv4();;
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id }
  };
};

export const deleteCard = id => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: id
  };
};
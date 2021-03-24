import { CONSTANTS } from '../actions';

let listId = 2;
let cardId = 5;

const initialState = [
  {
    title: 'Test title',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "some text for example"
      },
      {
        id: `card-${1}`,
        text: "some text for example for the second card"
      },
    ]
  },
  {
    title: 'Test title 2',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${3}`,
        text: "some text for example for the second list"
      },
      {
        id: `card-${4}`,
        text: "some text for example for the second card of the second list"
      },
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`
      }
      cardId += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list;
        }
      });
      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      const newState = [...state];
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return newState;
      }
    default:
      return state;
  }
};

export default listsReducer;
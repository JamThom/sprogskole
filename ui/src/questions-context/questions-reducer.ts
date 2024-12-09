import { QuestionsAction, QuestionsState } from "./questions-types";

const reducer = (state: QuestionsState, action: QuestionsAction): QuestionsState => {
  switch (action.type) {
    case 'SET_ANSWERS':
      return {
        ...state,
      };
    case 'INCREMENT_LEVEL':
      return {
        ...state,
      };
    case 'ADD_ANSWER':
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
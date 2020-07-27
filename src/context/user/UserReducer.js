import { GET_MONTHS, GET_PEOPLE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MONTHS:
      return {
        ...state,
        months: action.payload,
      };
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};

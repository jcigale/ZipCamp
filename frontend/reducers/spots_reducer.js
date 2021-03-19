import { RECEIVE_SPOTS } from "../actions/spot_actions";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.benches;
    default:
      return state;
  }
};

export default spotsReducer;
import { RECEIVE_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW, RECEIVE_BOOKING } from "../actions/spot_actions";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  //debugger
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newSpot = { [action.spot.id]: action.spot };
      return Object.assign({}, state, newSpot)
    default:
      return state;
  }
};

export default spotsReducer;
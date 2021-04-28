import { RECEIVE_SPOTS, RECEIVE_REVIEW, RECEIVE_BOOKING } from "../actions/spot_actions";

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_REVIEW:
      const { review } = action;
      const newState = Object.assign({}, state);
      newState[review.spot_id].reviewIds.push(review.id);
    case RECEIVE_BOOKING:
      const { booking } = action;
      const newState = Object.assign({}, state);
      newState[booking.user_id].bookingIds.push(booking.id);
    default:
      return state;
  }
};

export default spotsReducer;
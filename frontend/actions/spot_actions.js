import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    spots,
})

export const receiveSpot = ({ spot }) => ({
    type: RECEIVE_SPOT,
    spot,
    reviews,
})

export const receiveReview = ({ review, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    author,
})

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
)

export const fetchSpots = () => dispatch => (
    APIUtil.fetchSpots().then(spots => (dispatch(receiveSpots(spots))))
)

export const fetchSpot = id => dispatch => (
    APIUtil.fetchSpot(id).then(spot => (
        dispatch(receiveSpot(spot))
    )) 
);

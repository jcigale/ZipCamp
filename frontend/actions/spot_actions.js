import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    spots,
})

export const receiveSpot = ({ spot }) => ({
    type: RECEIVE_SPOT,
    spot,
})

export const receiveReview = ({ review, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    author,
})

export const receiveBooking = ({ booking, user }) => ({
    type: RECEIVE_BOOKING,
    booking,
    user,
})

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
)

export const createBooking = booking => dispatch => (
    APIUtil.createBooking(booking.then(booking => (
        dispatch(receiveBooking(booking))
    )))
)

export const fetchSpots = (filters) => dispatch => (
    APIUtil.fetchSpots(filters).then(spots => (dispatch(receiveSpots(spots))))
)

export const fetchSpot = id => dispatch => { 
    debugger
    return (
    
    APIUtil.fetchSpot(id).then(spot => (
        dispatch(receiveSpot(spot))
    )) 
)};

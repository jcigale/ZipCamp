import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';



export const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    spots,
})

export const receiveSpot = ({ spot }) => ({
    type: RECEIVE_SPOT,
    spot,
})

export const fetchSpots = (filters) => dispatch => {
    debugger
    return (
    APIUtil.fetchSpots(filters).then(spots => (dispatch(receiveSpots(spots))))
    )}

export const fetchSpot = id => dispatch => { 
    //
    return (
    
    APIUtil.fetchSpot(id).then(spot => (
        dispatch(receiveSpot(spot))
    )) 
)};

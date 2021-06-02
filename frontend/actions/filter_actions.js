import { fetchSpots } from './spot_actions';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchSpots(getState().ui.filters)(dispatch);
}

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

const changeBounds = bounds => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchSpots(getState().ui.filters)(dispatch);
};
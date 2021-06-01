// import { UPDATE_FILTER } from '../actions/filter_actions';

// const defaultFilters = {
//     bounds: {},
//     spotType: 'All listings',
// }

// const filtersReducer = (state=defaultFilters, action) => {
//     Object.freeze(state);
//     
//     if (action.type === UPDATE_FILTER) {
//         const newFilter = {
//             [action.filter]: action.value
//         }
//         return Object.assign({}, state, newFilter)
//     } else {
//         return state;
//     }
// }

import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_BOUNDS:
      newState = {bounds: action.bounds};
      return newState;
    default:
      return state;
  }
};



export default filtersReducer;
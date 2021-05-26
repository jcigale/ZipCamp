import { combineReducers } from 'redux';
import MapReducer from './map_reducer'

import filtersReducer from './filters_reducer';

const uiReducer = combineReducers({
    filters: filtersReducer,
    mapLocal: MapReducer
});

export default uiReducer;
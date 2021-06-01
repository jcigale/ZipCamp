import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Search from './search';
import { updateBounds, updateFilter } from '../../actions/filter_actions';
import { receiveLocation } from '../../actions/map_action'


const mapStateToProps = (state, ownProps) => {
    return{
    spots: asArray(state.entities),
    spotType: state.ui.filters.spotType,
    location: ownProps.location
    }
}  

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    receiveLocation: (location) => dispatch(receiveLocation(location)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
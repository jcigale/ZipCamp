import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Search from './search'
import { updateFilter } from '../../actions/filter_actions';
import { receiveLocation } from '../../actions/map_action'


const mapStateToProps = state => {
    return{
    spots: asArray(state.entities),
    spotType: state.ui.filters.spotType,
    }
}  

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    receiveLocation: (location) => dispatch(receiveLocation(location))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
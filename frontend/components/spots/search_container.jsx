import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchSpots } from '../../actions/spot_actions';
import Search from './search'
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = state => ({
    spots: asArray(state.entities),
    //spotType: state.ui.filter.spotType,
})  

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchBenches } from '../'

const mapStateToProps = state => ({
    spots: asArray(state.entities),
})  

const mapDispatchToProps = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotIndex);
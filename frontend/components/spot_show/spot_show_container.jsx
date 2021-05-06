import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import { selectSpot, selectReviews } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
    debugger
    const spotId = parseInt(match.params.spotId);
    const spot = selectSpot(state.entities, spotId);
    // const reviews = selectReviews(state.entities, spot);
    return {
        spotId,
        spot,
        // reviews,
    };
}

const mapDispatchToProps = dispatch => ({
    fetchSpot: id => dispatch(fetchSpot(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotShow);
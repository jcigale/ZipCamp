import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const spotId = this.props.spot.id;
        this.props.history.push(`/spots.${spotId}`);
    }

    render() {
        const { description, spot_type } = this.props.spot;
        return (
            <div className='spot-index-item' onClick={this.handleClick} >
                <div className='spot-info'>
                    <span className='type'>{spot_type}</span>
                    <span className='description'>{description}</span>
                </div>
                {/* <img src={photo}/> */}
            </div>
        )
    }
}

export default withRouter(SpotIndexItem);
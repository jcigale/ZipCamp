import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const spotId = this.props.spot.id;
        this.props.history.push(`/spots/${spotId}`);
    }

    render() {
        const {photo_url, spot_type, title, price } = this.props.spot;
        
        return (
            <div className='spot-index-item' onClick={this.handleClick} >
                <img src={photo_url}/>
                <div className="spot-info">
                    
                    <span className='spot-title'>{title}</span>
                    <div className='price-type'>
                        <span className='spot-type'>{spot_type}</span>
                        <span className='spot-price'>${price}<span>/NIGHT</span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SpotIndexItem);
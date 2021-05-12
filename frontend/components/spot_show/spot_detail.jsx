import React from 'react';
import {icons} from '../../util/icon_hash';
import { withRouter } from 'react-router-dom';
import ReviewList from '../reviews/review_list';
import ReviewFormContainer from './booking_form_container';

const activitiesList = (spot) => {
    return (
        <ul>
        {spot.activities.map (activity => (
            <li key={Math.floor(Math.random() * 1000)}><i className={icons[activity]}></i> {activity}</li>
        ))}
        </ul>
    )
        }



class SpotDetail extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        const reviews = this.props.reviews ? Object.values(this.props.reviews) : []

        return (
            <div>
                <div className='img-back'><img src={this.props.spot.photo_url} /></div>
            <div className='spot-detail'>
                    <span className='location'>United States &gt; {this.props.spot.details['state']} &gt; {this.props.spot.title}</span>
                    <h2 className='title'>{this.props.spot.title}</h2>
                <span className='rec'><i className="fas fa-thumbs-up"><span> 100%</span></i> Recommened</span>
                <div className='border'></div>
                <div className='sec1'>
                    <div className='host'>
                        <img src={demoHead}/>
                        <div>
                        <span>hosted by</span>
                        <p>Demo User</p>
                        </div>
                    </div>

                    <div className='text'>
                        <span className='covid'>This host has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done <a href='http://beesbeesbees.com/'>here</a>.</span>
                            <span className='desc'>{this.props.spot.description}</span>
                    </div>
                </div>
                <div className='details'>
                    <div className='essentials'>
                    <h2>Essentials</h2>
                    <ul>
                        <li><i className="fas fa-fire"></i> Campfires allowed</li>
                        <li><i className="fas fa-dog"></i> Pets allowed</li>
                        <li><i className="fas fa-toilet-paper"></i> Toilet available</li>
                    </ul>
                    </div>
                    <div className='ammenities'>
                    <h2>Ammentities</h2>
                        <ul>
                            <li><i className="fas fa-faucet"></i> Potable water available</li>
                            <li><i className="fas fa-shower"></i>Shower available</li>
                            <li><i className="fas fa-tshirt"></i> Laundry absent</li>
                            <li><i className="fas fa-wifi"></i> Wifi available</li>
                        </ul>
                    </div>
                    <div className='activities'>
                    <h2>Activites</h2>
                            {activitiesList(this.props.spot)}
                    </div>
                </div>
                <div className="border"></div>
                

                <div className='checkin'>
                    <div>Details</div>
                    <div>
                        <span><b>Check in:</b> After 2PM</span>
                        <span><b>Check out:</b> Before 12PM</span>
                        <span><b>Cancelation policy:</b> Moderate</span>
                    </div>
                    <div>
                        <span><b>On arrival:</b> Go straight to camp</span>
                        <span><b>Minimum nights:</b> 1</span>
                        <span><b>Accepts bookings:</b> 6 months out</span>
                    </div>
                </div>
                <div className="border"></div>
                <ReviewList reviews={reviews} session={this.props.session} deleteReview={this.props.deleteReview} />
            </div>
            </div>

        )
    }

}

export default withRouter(SpotDetail);
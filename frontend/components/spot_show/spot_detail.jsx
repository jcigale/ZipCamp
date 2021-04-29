import React from 'react';
import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => (
    reviews.map(review => (
        <ReviewListItemContainer review={review} key={review.id} />
    ))
)



const SpotDetail = ({ spot, reviews }) => {
    debugger
    return (
        <div>
            <div className='img-back'><img src={spot.photo_url} /></div>
        <div className='spot-detail'>
            <span className='location'>United States &gt; New York &gt; {spot.title}</span>
            <h2 className='title'>{spot.title}</h2>
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
                    <span className='desc'>{spot.description}</span>
                </div>
            </div>
            <div className='details'>
                <div className='essentials'>
                <h2>Essentials</h2>
                </div>
                <div className='ammenities'>
                <h2>Ammentities</h2>
                </div>
                <div clasName='activities'>
                <h2>Activites</h2>
                </div>
            </div>
            <div className="border"></div>
            

            <div className='checkin'>
                <h4>details</h4>
                <div>
                    <span><b>Check in:</b> After 2PM</span>
                    <span><b>Check out:</b> Before 12PM</span>
                    <span><b>Cancelation policy:</b> Moderate</span>
                </div>
                <div>
                    <span><b>On arrival:</b> Go straight to camp</span>
                    <span><b>Minimum nights:</b> 1</span>
                    <span><b>Accapts bookings:</b> 6 months out</span>
                </div>
            </div>

            <div className='activities'>
                <h2>Activities</h2>
            </div>

            {reviewList(reviews)}
        </div>
        </div>

    )
}

export default SpotDetail;
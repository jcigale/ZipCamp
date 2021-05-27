import React from 'react';

class BookingListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        const start_date_disabled = new Date(parseInt(this.props.trip.start_date.split("-")[0]), parseInt(this.props.trip.start_date.split("-")[1]) - 1, parseInt(this.props.trip.start_date.split("-")[2].slice(0, 2)));
        if (new Date() < start_date_disabled) {
            this.props.delete(this.props.trip.id);
        }
        e.stopPropagation();
    }

    handleUpdateClick(e) {
        e.preventDefault();
        const start_date_disabled = new Date(parseInt(this.props.trip.start_date.split("-")[0]), parseInt(this.props.trip.start_date.split("-")[1]) - 1, parseInt(this.props.trip.start_date.split("-")[2].slice(0, 2)));
        if (new Date() < start_date_disabled) {
            this.props.openModal('edit', this.props.trip)
        }
        e.stopPropagation();

    }

    dateFormat(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Placeholder', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const splitted = date.split("-")

        const date_num = parseInt(splitted[2].slice(0, 2));
        const month = months[parseInt(splitted[1])];
        const year = parseInt(splitted[0]);

        const day_of_week = days[new Date(year, parseInt(splitted[1]) - 1, date_num).getDay()];
        return `${day_of_week}, ${date_num} ${month} ${year}`;
    }

    handleClick(e) {
        e.preventDefault();
        this.props.history.push(`/spots/${this.props.trip.spot_id}`);
        window.scrollTo(0, 0);
    }

    render() {  
        debugger
        const spot = this.props.trip.spot

        return (
            <div>
                <div className='spot-index-item' >
                  <img src={spot.photo_url} />
                    <div className="spot-info">

                        <span className='spot-title'>{spot.title}</span>
                        <div className='price-type'>
                            <span className='spot-type'>{spot.spot_type}</span>
                            <span className='spot-price'>${spot.price}<span>/NIGHT</span></span>
                        </div>
                        <div className='booking-detail'>
                            <span className='guests'>{this.props.trip.guests} guest(s)</span>
                            <span className='dates'>{this.dateFormat(this.props.trip.start_date)} - {this.dateFormat(this.props.trip.end_date)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default BookingListItem;
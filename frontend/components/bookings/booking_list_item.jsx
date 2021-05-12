import React from 'react';

class BookingIndexItem extends React.Component {
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
        const spot = this.props.trip.spot;
        const start_date_disabled = new Date(parseInt(this.props.trip.start_date.split("-")[0]), parseInt(this.props.trip.start_date.split("-")[1]) - 1, parseInt(this.props.trip.start_date.split("-")[2].slice(0, 2)));

        const update_class = (new Date() < start_date_disabled) ? 'update-bookings-button' : 'update-bookings-button-disabled';
        const delete_class = (new Date() < start_date_disabled) ? 'delete-bookings-button' : 'delete-bookings-button-disabled';

        let disabled_message;
        if (update_class === 'update-bookings-button-disabled') {
            disabled_message = (
                <div className="disabled-message">
                    <p>It is to late to edit this booking</p>
                </div>);
        } else {
            disabled_message = null;
        }

        let disabled_triangle;
        if (update_class === 'update-bookings-button-disabled') {
            disabled_triangle = (
                <div className="disabled-message-triangle"></div>
            );
        } else {
            disabled_triangle = null;
        }

        return (
            <div>
                <span>{this.props.start_date}</span>
                <span>{this.props.end_date}</span>
            </div>
        );
    }


}

export default BookingIndexItem;
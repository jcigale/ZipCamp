export const fetchSpots = data => (
    $.ajax({
        method: 'GET',
        url: 'api/spots',
        data
    })
)

export const fetchSpot = id => (
    $.ajax({
        method: 'GET',
        url: `api/spots/${id}`,
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
)

export const createBooking = booking => (
    $.ajax({
        method: 'POST',
        url: 'api/bookings',
        data: { booking }
    })
)




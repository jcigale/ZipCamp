export const fetchSpots = spot => (
    $.ajax({
        method: 'GET',
        url: 'api/spots',
        spot
    })
)

export const fetchSpot = id => (
    $.ajax({
        method: 'GET',
        url: `api/spots${id}`,
    })
)

export const createReveiw = review => (
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


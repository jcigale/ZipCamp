export const asArray = ({ spots }) => {
    return (
    Object.keys(spots).map(key => spots[key])
)}

export const selectSpot = ({ spots }, spotId) => {
    return spots[spotId] || { reviewIds: [] };
}

export const selectReviews = ({ spots, reviews }, spot) => {
    debugger
    return spot.reviewIds.map(reviewId => reviews[reviewId]);
}
json.spot do
    json.partial! '/api/spots/spot', spot: @spot
    json.reviewIds @spot.reviews.pluck(:id)
end

@spot.reviews.includes(:author).each do |review|
    json.reviews do
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.authors do 
        json.set! review.author.id do 
            json.extract! review.author, :id, :first_name, :last_name
        end
    end
end 
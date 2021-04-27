@spots.each do |spot|
    json.set! spot.id do 
        json.partial! 'spot', spot: spot
        json.reviewIds []
    end
end
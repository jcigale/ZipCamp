class Api::SpotsController < ApplicationController
    def index
        
        spots = bounds ? Spot.in_bounds(bounds) : Spot.all
        @spots = spots.includes(:reviews)
        render :index
    end

    def show
        @spot = Spot.find(params[:id])
        render :show
    end

    private

    def bounds
        params[:bounds]
    end
end
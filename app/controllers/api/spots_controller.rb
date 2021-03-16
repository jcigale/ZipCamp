class Api::SpotsController < ApplicationController
    def index
        render :index
    end

    def show
        @spot = Spot.find(params[:id])
    end
end
class Api::BookingsController < ApplicationController
    before_action :require_logged_in

    def index
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
    end

    def create
        @booking = current_user.bookings.new(booking_params)

        if booking.save 
            render "api/users/#{@booking.user_id}"
        else
            render json: @booking, status: :unprocessable_entity
        end
    end

    def destroy
        @booking = current_user.bookings.find(params[:id])
        @booking.destroy
        render "api/users/#{@booking.user_id}"
    end


    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :spot_id)
    end

end
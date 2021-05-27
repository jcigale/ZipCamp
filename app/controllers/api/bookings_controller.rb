class Api::BookingsController < ApplicationController
    before_action :require_logged_in

    def index
        @bookings = Booking.includes(:spot).where(user_id: params[:user_id])
    end

    def show
        @booking = Booking.find(params[:id])
    end

    def create
        @booking = current_user.bookings.new(booking_params)

        if @booking.save 
            render "api/bookings/show"
        else
            render json: @booking, status: :unprocessable_entity
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
    end

    def update
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render "api/bookings/show"
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end


    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :spot_id, :guests, :spot)
    end

end
class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def index
        @reviews = Review.includes(:user).where(spot_id: params[:spot_id])
    end

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render "api/spots/#{@review.spot_id}"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        render "api/spots/#{@review.spot_id}"
    end
    private

    def review_params
        params.require(:review).permit(:title, :body, :recommended, :spot_id)
    end
end
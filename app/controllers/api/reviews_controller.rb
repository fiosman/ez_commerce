class Api::ReviewsController < ApplicationController
  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(review_params[:id])

    if @review
      @review.destroy
      render :show
    else
      render json: ["Something went wrong here..."]
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :product_id, :rating)
  end
end

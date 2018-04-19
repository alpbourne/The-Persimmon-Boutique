class Api::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: Review.all
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: {message: "Review could not be saved"}, status: 400
    end
  end

  def show
    render json: @review
  end

  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: {message: "Review could not be saved."}, status: 400
    end
  end

  def destroy
    if @review.destroy
      render json: @review
    else
      render json: {message: "Review could not be removed."}, status: 400
    end
  end

  private

  def review_params
    params.require(:review).permit(:author, :body)
  end

  def set_review
    @review = Review.find_by(id: params[:id])
  end
end

class Api::ReviewsController < ApplicationController

  def index
    render json: Review.all
  end
end

  def create
    review = Review.new[review_params]
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

  private

  def review_params
    params.require[:review].permit[:author, :body]
  end

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

  private

  def review_params
    params.require[:review].permit[:author, :body]
  end

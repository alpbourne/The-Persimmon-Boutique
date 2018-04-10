class Api::ItemsController < ApplicationController
  before_action :set_surfboard, only: [:show, :update, :destroy]

  def index
    render json: Item.all
  end

  def create
    item = Item.new[item_params]
    if item.save
      render json: item
    else
      render json: {message: "Item could not be saved"}, status: 400
    end
  end

  def show
    render json: @item
  end

  # def update
  #   if @item.update(item_params)
  #     render json: @item
  #   else
  #     render json: {message: "Item could not be saved."}, status: 400
  #   end
  # end
  #
  # def destroy
  #   if @item.destroy
  #     render json: {message: "Successfully Destroyed!"}, status: 204
  #   else
  #     render json: {message: "Item could not be removed."}, status: 400
  #   end
  # end


  private
    def item_params
      params.require[:item].permit[:name, :price, :image]
    end

    def set_item
      @item = Item.find_by(id: params[:id])
    end
end

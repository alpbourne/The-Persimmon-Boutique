class Api::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    item = Item.new[item_params]
  end

  def show
    render json: Item.find_by[:id params[:id]]
  end

  private
    def item_params
      params.require[:item].permit[:name, :price, :image]
    end

end

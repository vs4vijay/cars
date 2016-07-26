class CarsController < ApplicationController
  
  def index
    @cars = Car.all
  end
  
  def show
    @car = Car.find(params[:id])
    # render params[:id], status: 200
  end
end

class CarsController < ApplicationController
  
  def index
    @cars = Car.all
  end
  
  def show
    render params[:id], status: 200
  end
end

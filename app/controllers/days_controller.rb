class DaysController < ApplicationController
    before_action :set_day, only: [:show, :add_meal]
    before_action :authorize_request, only: [:create, :update, :destroy]
    before_action :set_user_day, only: [:update, :destroy]
  
    # GET /days
    def index
      @days = Day.all
  
      render json: @days
    end
  
    # GET /days/1
    def show
      render json: @day, include: :meals
    end
  
    # POST /days
    def create
      @day = Day.new(day_params)
      @day.user = @current_user
  
      if @day.save
        render json: @day, status: :created, location: @day
      else
        render json: @day.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /days/1
    def update
      if @day.update(day_params)
        render json: @day
      else
        render json: @day.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /days/1
    def destroy
      @day = Day.find(params[:id])
      @day.destroy
  end
  
    def add_meal
      @meal = meal.find(params[:meal_id])
      @day.meals << @meal
  
      render json: @day, include: :meals
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_day
        @day = day.find(params[:id])
      end
  
      def set_user_day
        @day = @current_user.days.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def day_params
        params.require(:day).permit(:name, :user_id)
      end
  end

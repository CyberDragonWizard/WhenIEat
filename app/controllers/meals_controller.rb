class MealsController < ApplicationController
    before_action :authorize_request, only: :create
    # GET /meals

    def index
        @meals = Meal.all

        render json: @meals
    end

    def destroy
        @meal = Meal.find(params[:id])
        @meal.destroy
    end

    def create
        @meal = Meal.new(meal_params)
        if @meal.save
            render json: @meal, status: :created
        else
            render json: @meal.errors, status: :unprocessable_entity
        end
    end

    def update
        @meal = Meal.find(params[:id])
        if @meal.update(meal_params)
            render json: @meal
        else
            render json: @meal.errors, status: :unprocessable_entity
        end
    end

    private

    def meal_params
        params.require(:meal).permit(:name, :calories, :protein, :fats, :carbs, :day_id)
    end
end

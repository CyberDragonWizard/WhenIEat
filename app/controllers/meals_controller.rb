class MealsController < ApplicationController
    # GET /meals
    def index
        @meals = Meal.all

        render json: @meals
    end
end

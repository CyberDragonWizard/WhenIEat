class Meal < ApplicationRecord
  belongs_to :day, optional: false
end

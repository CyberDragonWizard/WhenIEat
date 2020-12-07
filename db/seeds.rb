# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Meal.destroy_all
Day.destroy_all
User.destroy_all

@admin = User.create!(email: 'admin@email.com', password: 'password', age: 31, height: 60, weight: 400, imgUrl: 'https://i.imgur.com/e9lA0oE.jpeg')

puts "#{User.count} users created"

@day1 = Day.create!(date: '11/23/2020', user: @admin)

@day2 = Day.create!(date: '11/24/2020', user: @admin)

puts "#{Day.count} days created"

# @day2.meals.push(@meal2, @meal5)

@meal1 = Meal.create!(name: 'cereal', calories: 220, protein: 7, carbs: 25, fats: 6, day: @day1)
@meal2 = Meal.create!(name: 'hamburger', calories: 530, protein: 27, carbs: 85, fats: 20, day: @day2)
@meal3 = Meal.create!(name: 'hotdog', calories: 100, protein: 3, carbs: 3, fats: 22, day: @day2)
@meal4 = Meal.create!(name: 'spaghetti', calories: 425, protein: 17, carbs: 43, fats: 26, day: @day1)
@meal5 = Meal.create!(name: 'ham sandwhich', calories: 320, protein: 12, carbs: 20, fats: 6, day: @day1)

puts "#{Meal.count} meals created"

# @meal1.days.create!(date: '11/25/2020', user: @admin)


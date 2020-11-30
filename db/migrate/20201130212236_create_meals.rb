class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.reference :nutrition
      t.reference :day
      t.integer :calories
      t.integer :protein
      t.integer :carbs
      t.integer :fats

      t.timestamps
    end
  end
end

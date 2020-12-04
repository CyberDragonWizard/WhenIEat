class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.references :day, null: false, foreign_key: true
      t.integer :calories
      t.integer :protein
      t.integer :carbs
      t.integer :fats

      t.timestamps
    end
  end
end

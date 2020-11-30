class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :name
      t.integer :age
      t.integer :height
      t.integer :weight
      t.string :imgUrl

      t.timestamps
    end
  end
end

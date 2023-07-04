class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :location
      t.integer :price
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end

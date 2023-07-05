class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.integer :price
      t.references :user, foreign_key: true
      t.references :property, foreign_key: true
      t.timestamps
    end
  end
end

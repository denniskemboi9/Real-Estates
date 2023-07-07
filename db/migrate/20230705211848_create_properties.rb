class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :image_url
      t.boolean :is_approved, default: false
      t.timestamps
    end
  end
end

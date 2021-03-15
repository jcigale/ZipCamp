class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.text :description, null: false
      t.string :longitude, null: false
      t.string :latitude, null: false
      t.string :photos, null: false, array: true
      t.string :spot_type, null: false
      t.text :details, null: false
      t.text :activities
      t.timestamps
    end
  end
end

class LngLatFloat < ActiveRecord::Migration[5.2]
  def change

    change_column :spots, :longitude, :float 
    change_column :spots, :latitude, :float

  end
end
